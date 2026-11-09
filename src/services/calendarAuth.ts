import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Reuse app instance if already created
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/calendar.events');
// Hint to select Google account with calendar
provider.setCustomParameters({
  prompt: 'consent'
});

// Flag to track ongoing popup sign-in
let isSigningIn = false;
// Cache for access token with localStorage backing
let cachedAccessToken: string | null = (() => {
  try {
    return localStorage.getItem('os-site:google-access-token');
  } catch {
    return null;
  }
})();

export const initAuth = (
  onAuthSuccess?: (user: User | null, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    const token = cachedAccessToken || localStorage.getItem('os-site:google-access-token');
    if (token) {
      cachedAccessToken = token;
      if (onAuthSuccess) onAuthSuccess(user, token);
    } else if (!isSigningIn) {
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('No access token returned from Google authentication');
    }
    cachedAccessToken = credential.accessToken;
    try {
      localStorage.setItem('os-site:google-access-token', cachedAccessToken);
    } catch {
      // safe
    }
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error) {
    console.error('Google Sign-in failed:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  if (cachedAccessToken) return cachedAccessToken;
  try {
    const saved = localStorage.getItem('os-site:google-access-token');
    if (saved) {
      cachedAccessToken = saved;
      return saved;
    }
  } catch {
    // safe
  }
  return null;
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
  cachedAccessToken = null;
  try {
    localStorage.removeItem('os-site:google-access-token');
  } catch {
    // safe
  }
};

export interface TimeSlot {
  dateStr: string; // YYYY-MM-DD
  dayLabel: string; // e.g. "Tuesday, Nov 3"
  startTime: string; // e.g. "10:00 AM"
  endTime: string; // e.g. "10:30 AM"
  isoStart: string;
  isoEnd: string;
}

/**
 * Computes available 30-minute consultation slots over the next 5 business days
 * based on Google Calendar busy events from the primary calendar.
 */
export const fetchCalendarSlots = async (
  accessToken: string,
  daysCount = 5
): Promise<TimeSlot[]> => {
  const now = new Date();
  const timeMin = new Date(now.getTime() + 1000 * 60 * 60).toISOString(); // start 1 hour from now
  const timeMax = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 10).toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(
    timeMin
  )}&timeMax=${encodeURIComponent(
    timeMax
  )}&singleEvents=true&orderBy=startTime&maxResults=250`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  if (!res.ok) {
    throw new Error(`Google Calendar API error: ${res.statusText}`);
  }

  const data = await res.json();
  const busyRanges: { start: number; end: number }[] = [];

  if (Array.isArray(data.items)) {
    for (const item of data.items) {
      if (item.start?.dateTime && item.end?.dateTime) {
        busyRanges.push({
          start: new Date(item.start.dateTime).getTime(),
          end: new Date(item.end.dateTime).getTime()
        });
      }
    }
  }

  const slots: TimeSlot[] = [];
  let dayOffset = 0;
  let collectedDays = 0;

  while (collectedDays < daysCount && dayOffset < 14) {
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + dayOffset);
    const dayOfWeek = targetDate.getDay();

    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      collectedDays++;
      const dateStr = targetDate.toISOString().split('T')[0];
      const dayLabel = targetDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });

      // 30-min slots between 10:00 AM and 4:30 PM
      const hours = [10, 11, 13, 14, 15, 16];
      for (const h of hours) {
        for (const m of [0, 30]) {
          const slotStart = new Date(targetDate);
          slotStart.setHours(h, m, 0, 0);
          const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

          if (slotStart.getTime() > now.getTime() + 2 * 60 * 60 * 1000) {
            // Check if slot overlaps any busy range
            const isBusy = busyRanges.some(
              (b) => slotStart.getTime() < b.end && slotEnd.getTime() > b.start
            );

            if (!isBusy) {
              const formatTime = (d: Date) =>
                d.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                });

              slots.push({
                dateStr,
                dayLabel,
                startTime: formatTime(slotStart),
                endTime: formatTime(slotEnd),
                isoStart: slotStart.toISOString(),
                isoEnd: slotEnd.toISOString()
              });
            }
          }
        }
      }
    }
    dayOffset++;
  }

  return slots;
};

/**
 * Calculates RFC3339 timezone offset for America/Los_Angeles (Pacific Time)
 * Correctly distinguishes between PST (-08:00) and PDT (-07:00).
 */
export function getPacificOffset(dateStr: string): string {
  try {
    const probe = new Date(`${dateStr}T12:00:00Z`);
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'shortOffset'
    });
    const parts = dtf.formatToParts(probe);
    const tzPart = parts.find((p) => p.type === 'timeZoneName')?.value; // e.g. "GMT-7" or "GMT-8"
    if (tzPart) {
      const match = tzPart.match(/GMT([+-]\d+)(?::(\d+))?/);
      if (match) {
        const sign = match[1].startsWith('-') ? '-' : '+';
        const rawNum = Math.abs(parseInt(match[1], 10));
        const hh = String(rawNum).padStart(2, '0');
        const mm = match[2] ? match[2].padStart(2, '0') : '00';
        return `${sign}${hh}:${mm}`;
      }
    }
  } catch (err) {
    console.warn('Failed to calculate Pacific offset:', err);
  }
  return '-07:00';
}

/**
 * Formats a date and time string into a valid RFC3339 string with Pacific Time offset.
 * Example: '2026-03-11' & '1:00 PM' -> '2026-03-11T13:00:00-07:00'
 */
export function formatSlotDateTime(dateStr: string, timeStr: string): string {
  const [timePart, meridiem] = timeStr.trim().split(' ');
  let [hours, minutes] = timePart.split(':').map(Number);
  if (meridiem === 'PM' && hours !== 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;
  const pad = (n: number) => String(n).padStart(2, '0');
  const offset = getPacificOffset(dateStr);
  return `${dateStr}T${pad(hours)}:${pad(minutes)}:00${offset}`;
}

export interface InsertEventParams {
  summary: string;
  description: string;
  startIso: string;
  endIso: string;
  timeZone?: string;
  clientEmail: string;
  clientName: string;
}

export const insertCalendarEvent = async (
  accessToken: string,
  params: InsertEventParams
): Promise<{ id: string; htmlLink?: string; hangoutLink?: string }> => {
  const urlWithConference =
    'https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all';
  const urlWithoutConference =
    'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all';

  // Deduplicate attendees by email to prevent Google Calendar API 400 Bad Request error
  const rawAttendees = [
    { email: 'lanovafuria@gmail.com', displayName: 'Olga Sirenko' },
    { email: 'hello@olgasirenko.com', displayName: 'Olga Sirenko Advisory' },
    { email: params.clientEmail.trim(), displayName: params.clientName.trim() }
  ];
  const seenEmails = new Set<string>();
  const attendees: { email: string; displayName?: string }[] = [];
  for (const att of rawAttendees) {
    const lower = att.email.toLowerCase().trim();
    if (lower && !seenEmails.has(lower)) {
      seenEmails.add(lower);
      attendees.push({ email: att.email.trim(), displayName: att.displayName });
    }
  }

  const baseEventBody = {
    summary: params.summary,
    description: params.description,
    location: 'Google Meet',
    start: {
      dateTime: params.startIso,
      timeZone: params.timeZone || 'America/Los_Angeles'
    },
    end: {
      dateTime: params.endIso,
      timeZone: params.timeZone || 'America/Los_Angeles'
    },
    attendees,
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 15 }
      ]
    }
  };

  // Attempt 1: with Meet conference auto-creation
  try {
    const bodyWithMeet = {
      ...baseEventBody,
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    };

    const res = await fetch(urlWithConference, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyWithMeet)
    });

    if (res.ok) {
      return await res.json();
    }

    const errText = await res.text();
    console.warn('Google Calendar insert with Meet conference failed, falling back to standard event:', errText);
  } catch (confErr) {
    console.warn('Meet conference network error, falling back to standard event:', confErr);
  }

  // Attempt 2: fallback without conferenceData (standard Google Calendar event with Google Meet location)
  const resFallback = await fetch(urlWithoutConference, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(baseEventBody)
  });

  if (!resFallback.ok) {
    const errText = await resFallback.text();
    console.error('Google Calendar event insert failed:', errText);
    let errorDetail = `Google Calendar API error (${resFallback.status})`;
    try {
      const parsed = JSON.parse(errText);
      if (parsed?.error?.message) {
        errorDetail = parsed.error.message;
      }
    } catch {
      // not json
    }
    throw new Error(errorDetail);
  }

  return await resFallback.json();
};

export const deleteCalendarEvent = async (
  accessToken: string,
  eventId: string
): Promise<void> => {
  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events/${encodeURIComponent(
    eventId
  )}?sendUpdates=all`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (!res.ok && res.status !== 404 && res.status !== 410) {
    const errText = await res.text();
    console.warn('Failed to delete Google Calendar event:', errText);
  }
};

