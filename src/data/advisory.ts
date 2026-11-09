export interface Deliverable {
  no: string;
  title: string;
  points: string[];
}

export interface EvaluateItem {
  t: string;
  b: string;
}

export interface StepItem {
  no: string;
  when: string;
  t: string;
  b: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TrackItem {
  kicker: string;
  title: string;
  sub: string;
  points: string[];
  cta: string;
  icon: string;
  variant: 'primary' | 'secondary';
  action: 'audit' | 'call';
}

export const DELIVERABLES: Deliverable[] = [
  {
    no: '01',
    title: '25-Min Forensic Teardown',
    points: [
      'Screen-by-screen video breakdown of your live web app or staging environment.',
      'Pinpoints exact cognitive drop-off points: latency dead zones, unclear agent execution states, and friction in human approval loops.'
    ]
  },
  {
    no: '02',
    title: 'Priority Matrix',
    points: [
      'Categorized roadmap formatted directly for your sprint backlog: immediate UI fixes vs. core state refactors.',
      'Prioritizes updates by business impact: activation, retention, and engineering complexity.'
    ]
  },
  {
    no: '03',
    title: 'State Architecture Specs',
    points: [
      'Production-ready wireframe patterns for token streaming states, optimistic UI updates, and non-deterministic error recovery.',
      'Explicit human-in-the-loop verification gates and audit trail layouts.'
    ]
  }
];

export const CHURN: string[] = [
  'The UI freezes silently while an agent runs background tool calls.',
  'Streaming text jitter causes layout reflows that break user reading flow.',
  'Hallucinations occur without a clear diff view or verification checkpoint.',
  'Model timeouts dump users back to empty input fields with zero state recovery.'
];

export const EVALUATE: EvaluateItem[] = [
  {
    t: 'Agentic Workflows & Tool Calling',
    b: 'How your UI communicates background processing, autonomous sub-tasks, and error states.'
  },
  {
    t: 'Streaming Latency & Perceived Speed',
    b: 'Implementing optimistic updates, skeleton progress bars, and token streaming without layout shifts.'
  },
  {
    t: 'Human-in-the-Loop (HITL) Controls',
    b: 'Designing diff viewers, editable intermediate outputs, and role-based approval thresholds.'
  },
  {
    t: 'Dirty Data Ingestion & Recovery',
    b: 'Error handling for unstructured uploads (CSVs, PDFs, API payloads) that prevents silent data corruption.'
  }
];

export const TERMS = [
  { t: '$1,500 Flat Corporate Investment' },
  { t: '48-Hour Turnaround', note: 'Starts once environment access is confirmed' },
  { t: '100% Asynchronous', note: 'Zero scheduling friction or meeting drag' },
  { t: 'Mutual NDA Signed Upfront' },
  { t: 'Payment via Corporate Credit Card, ACH, or Wire' }
];

export const STEPS: StepItem[] = [
  {
    no: '1',
    when: 'Hour 0–24',
    t: 'Request & NDA',
    b: 'Submit your intake. Within 24 hours, I confirm fit and send a countersigned mutual NDA.'
  },
  {
    no: '2',
    when: 'Onboarding',
    t: 'Access & Invoice',
    b: 'Access is shared via secure vault; payment processed via corporate invoice (Card/Wire).'
  },
  {
    no: '3',
    when: '48 hours',
    t: '48-Hour Delivery',
    b: 'Receive your video teardown, FigJam priority backlog, and state architecture specs.'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'Why is this 100% asynchronous?',
    a: 'Synchronous Zoom meetings waste leadership and engineering time. By working asynchronously, I spend those hours performing forensic, undisturbed testing in your environment. You receive dense, unedited analysis and an actionable FigJam backlog that your engineering and product teams can implement immediately.'
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. Protecting your intellectual property and unreleased features is non-negotiable. Once you submit an inquiry, I provide a standard, founder-friendly mutual NDA alongside confirmation within 24 hours. No credentials or staging links are shared until that agreement is executed.'
  },
  {
    q: 'How does payment work?',
    a: 'Payment is handled via standard corporate invoicing (powered by Stripe Invoicing). Your finance team can pay using any corporate credit card (Brex, Ramp, Amex), ACH transfer, or wire transfer. Payment is finalized when the NDA is signed and before the 48-hour audit window begins.'
  },
  {
    q: 'What tech stacks and products do you evaluate?',
    a: 'Enterprise SaaS, vertical AI tools, agentic workflows, and complex data-intensive platforms. Whether your product runs on custom LLM orchestration, LangChain, multi-tenant databases, or high-frequency telemetry, the audit evaluates state machines, latency handling, and interface feedback.'
  },
  {
    q: 'Can we engage you for ongoing advisory after the audit?',
    a: 'Yes. Many teams use the 48-hour audit as a diagnostic sprint before moving into a monthly strategic advisory retainer (supporting bi-weekly architectural reviews, PRD audits, and DesignOps velocity). Retainer engagements are strictly capped at two companies at a time.'
  }
];

export const TRACKS: TrackItem[] = [
  {
    kicker: 'Track A: Fixed Sprint',
    title: '48-Hour Architecture Audit',
    sub: '$1,500 Flat Investment',
    points: [
      '25-Min Forensic Video Teardown',
      'Priority Backlog (Sprint-Ready)',
      'State Architecture Specs & Fallback Wireframes'
    ],
    cta: 'Request 48-Hr Audit →',
    icon: 'arrow_forward',
    variant: 'primary',
    action: 'audit'
  },
  {
    kicker: 'Track B: Ongoing & Fractional',
    title: 'Strategic Advisory & Retainers',
    sub: 'Ongoing Advisory · Fractional Leadership',
    points: [
      'Bi-weekly executive strategy syncs',
      'Direct PRD, state schema & UX reviews',
      'Team retooling & DesignOps AI automation'
    ],
    cta: 'Book 30-Min Discovery Call →',
    icon: 'arrow_forward',
    variant: 'secondary',
    action: 'call'
  }
];

export const CALENDAR_DIRECT_URL = 'https://calendar.app.google/giUTcTXTiPj71fEF6';

/** Google Calendar appointment schedule URL */
export const CALENDAR_SCHEDULE_URL =
  ((import.meta as unknown as { env?: Record<string, string> }).env?.VITE_CALENDAR_SCHEDULE_URL as string) ||
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ12bwpx6pAiy9e-T0f_eSRCIvAnOAB7pciF9t3M0sXOhfwYS4j4Pk6cFP4slm0g5EJ8lQphjM3s';

export interface ConsultationSlot {
  dateStr: string;
  dayLabel: string;
  fullDateLabel: string;
  time: string;
  timeEnd: string;
}

export interface ConsultationDay {
  dateStr: string;
  weekday: string;
  dayNumber: string;
  monthName: string;
  monthShort: string;
  year: number;
  dayLabel: string;
  fullDateLabel: string;
  isAvailable: boolean;
  slots: ConsultationSlot[];
}

export const MONDAY_CONSULTATION_SLOTS = [
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM'
];

export const WEDNESDAY_CONSULTATION_SLOTS = [
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM'
];

export const FRIDAY_CONSULTATION_SLOTS = [
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM'
];

export const AFTERNOON_CONSULTATION_SLOTS = MONDAY_CONSULTATION_SLOTS;
export const CONSULTATION_TIME_SLOTS = MONDAY_CONSULTATION_SLOTS;

export function getSlotEndTime(time: string): string {
  switch (time) {
    case '9:30 AM':
      return '10:00 AM';
    case '10:00 AM':
      return '10:30 AM';
    case '10:30 AM':
      return '11:00 AM';
    case '11:00 AM':
      return '11:30 AM';
    case '11:30 AM':
      return '12:00 PM';
    case '12:00 PM':
      return '12:30 PM';
    case '12:30 PM':
      return '1:00 PM';
    case '1:00 PM':
      return '1:30 PM';
    case '1:30 PM':
      return '2:00 PM';
    case '2:00 PM':
      return '2:30 PM';
    case '2:30 PM':
      return '3:00 PM';
    case '3:00 PM':
      return '3:30 PM';
    case '3:30 PM':
      return '4:00 PM';
    default:
      return time;
  }
}

/**
 * Returns a 5-day work week (Monday–Friday) of consultation days.
 * Reflects Olga's exact real schedule:
 * - Monday: 12:00 PM – 3:30 PM PT (12:00 till 15:30)
 * - Tuesday & Thursday: 1:00 PM – 3:00 PM PT
 * - Wednesday (11th): 1:00 PM – 3:00 PM PT (13:00 to 15:00)
 * - Friday: 9:30 AM – 1:00 PM PT
 */
export function getWeekConsultationDays(weekOffset: number = 0): {
  days: ConsultationDay[];
  monthLabel: string;
} {
  const now = new Date();
  const currentDayOfWeek = now.getDay(); // 0: Sun, 1: Mon, ... 5: Fri, 6: Sat

  // Determine starting Monday
  const isPastFridaySlots = (currentDayOfWeek === 5 && (now.getHours() > 13 || (now.getHours() === 13 && now.getMinutes() >= 0)));
  const shouldAdvanceToNextWeek = currentDayOfWeek === 0 || currentDayOfWeek === 6 || isPastFridaySlots;

  const baseMonday = new Date(now);
  let distanceToMonday = 1 - currentDayOfWeek;
  if (currentDayOfWeek === 0) distanceToMonday = 1;
  else if (shouldAdvanceToNextWeek && currentDayOfWeek === 5) distanceToMonday = 3;
  else if (currentDayOfWeek === 6) distanceToMonday = 2;

  baseMonday.setDate(now.getDate() + distanceToMonday + (weekOffset * 7));
  baseMonday.setHours(0, 0, 0, 0);

  const days: ConsultationDay[] = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date(baseMonday);
    d.setDate(baseMonday.getDate() + i);
    const pad = (n: number) => String(n).padStart(2, '0');
    const dateStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const weekday = d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dayNumber = String(d.getDate());
    const monthName = d.toLocaleDateString('en-US', { month: 'long' });
    const monthShort = d.toLocaleDateString('en-US', { month: 'short' });
    const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const fullDateLabel = d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

    // Monday through Friday: all days active
    const dayOfWeek = d.getDay(); // 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri
    const isPast = d.getTime() < new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const isAvailable = !isPast && dayOfWeek >= 1 && dayOfWeek <= 5;

    // Day specific hours:
    // Friday: 9:30 AM – 1:00 PM PT
    // Monday: 12:00 PM – 3:30 PM PT (12:00 till 15:30)
    // Wednesday (11th): 1:00 PM – 3:00 PM PT (13:00 to 15:00)
    let daySlotsList = MONDAY_CONSULTATION_SLOTS;
    if (dayOfWeek === 5) {
      daySlotsList = FRIDAY_CONSULTATION_SLOTS;
    } else if (dayOfWeek === 3) {
      daySlotsList = WEDNESDAY_CONSULTATION_SLOTS;
    } else if (dayOfWeek === 1) {
      daySlotsList = MONDAY_CONSULTATION_SLOTS;
    } else {
      daySlotsList = WEDNESDAY_CONSULTATION_SLOTS;
    }

    const slots: ConsultationSlot[] = isAvailable
      ? daySlotsList.map((t) => ({
          dateStr,
          dayLabel,
          fullDateLabel,
          time: t,
          timeEnd: getSlotEndTime(t)
        }))
      : [];

    days.push({
      dateStr,
      weekday,
      dayNumber,
      monthName,
      monthShort,
      year: d.getFullYear(),
      dayLabel,
      fullDateLabel,
      isAvailable,
      slots
    });
  }

  const firstDay = days[0];
  const lastDay = days[days.length - 1];
  let monthLabel = `${firstDay.monthName} ${firstDay.year}`;
  if (firstDay.monthName !== lastDay.monthName) {
    monthLabel = `${firstDay.monthShort} – ${lastDay.monthShort} ${lastDay.year}`;
  }

  return { days, monthLabel };
}

/** Parses slot times into UTC dates for calendars */
export function getSlotUtcDates(dateStr: string, time: string, timeEnd: string): { startUtc: Date; endUtc: Date } {
  const [year, month, day] = dateStr.split('-').map(Number);
  const formatTime = (t: string) => {
    const [timePart, meridiem] = t.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);
    if (meridiem === 'PM' && hours !== 12) hours += 12;
    if (meridiem === 'AM' && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const start = formatTime(time);
  const end = formatTime(timeEnd);

  // Dynamically determine Pacific offset (PDT: UTC-7 vs PST: UTC-8)
  let offsetHours = 7;
  try {
    const probe = new Date(`${dateStr}T12:00:00Z`);
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'shortOffset'
    });
    const parts = dtf.formatToParts(probe);
    const tzPart = parts.find((p) => p.type === 'timeZoneName')?.value;
    if (tzPart) {
      const match = tzPart.match(/GMT([+-]\d+)/);
      if (match) {
        offsetHours = Math.abs(parseInt(match[1], 10));
      }
    }
  } catch {
    offsetHours = 7;
  }

  const startUtc = new Date(Date.UTC(year, month - 1, day, start.hours + offsetHours, start.minutes, 0));
  const endUtc = new Date(Date.UTC(year, month - 1, day, end.hours + offsetHours, end.minutes, 0));
  return { startUtc, endUtc };
}

/** Constructs an official Google Calendar event link that invites Olga & attendee and sets Google Meet */
export function buildGoogleCalendarUrl(params: {
  dateStr: string;
  time: string;
  timeEnd: string;
  clientName: string;
  clientEmail: string;
  topic?: string;
}): string {
  try {
    const { startUtc, endUtc } = getSlotUtcDates(params.dateStr, params.time, params.timeEnd);
    const toGCalString = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const details = [
      `30-Min Architecture Consultation with Olga Sirenko`,
      ``,
      `Attendee: ${params.clientName} (${params.clientEmail})`,
      `Discussion Focus: ${params.topic || 'Architecture, Latency & Agentic UX'}`,
      ``,
      `Host: Olga Sirenko (hello@olgasirenko.com / lanovafuria@gmail.com)`,
      `Meeting Link: Google Meet (link attached upon booking confirmation)`
    ].join('\n');

    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.set('action', 'TEMPLATE');
    url.searchParams.set('text', `30-Min Architecture Consultation: Olga Sirenko & ${params.clientName}`);
    url.searchParams.set('dates', `${toGCalString(startUtc)}/${toGCalString(endUtc)}`);
    url.searchParams.set('details', details);
    url.searchParams.set('location', 'Google Meet');
    url.searchParams.set('add', `lanovafuria@gmail.com,hello@olgasirenko.com,${params.clientEmail}`);

    return url.toString();
  } catch {
    return 'https://calendar.app.google/giUTcTXTiPj71fEF6';
  }
}

/** Constructs a mailto URI for instant notification to Olga */
export function buildBookingEmailUrl(params: {
  dateStr: string;
  dayLabel: string;
  time: string;
  timeEnd: string;
  clientName: string;
  clientEmail: string;
  topic?: string;
}): string {
  const subject = `[Consultation Booked] ${params.clientName} - ${params.dayLabel} at ${params.time} PT`;
  const body = [
    `Hi Olga,`,
    ``,
    `A new 30-Min Architecture Consultation has been scheduled:`,
    ``,
    `• Attendee: ${params.clientName}`,
    `• Email: ${params.clientEmail}`,
    `• Date: ${params.dayLabel}`,
    `• Time: ${params.time} – ${params.timeEnd} Pacific Time`,
    `• Discussion Focus: ${params.topic || 'Architecture, Latency & Agentic UX'}`,
    ``,
    `Host: lanovafuria@gmail.com / hello@olgasirenko.com`,
    `Meeting Platform: Google Meet`
  ].join('\n');

  return `mailto:lanovafuria@gmail.com,hello@olgasirenko.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Generates standard iCalendar (.ics) content for downloading into Google Calendar/Outlook/Apple Calendar */
export function generateIcsContent(params: {
  dateStr: string;
  time: string;
  timeEnd: string;
  clientName: string;
  clientEmail: string;
  topic?: string;
}): string {
  const { startUtc, endUtc } = getSlotUtcDates(params.dateStr, params.time, params.timeEnd);
  const toIcsDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const nowIcs = toIcsDate(new Date());
  const uid = `consultation-${Date.now()}@olgasirenko.com`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Olga Sirenko//Consultation Scheduler//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${nowIcs}`,
    `DTSTART:${toIcsDate(startUtc)}`,
    `DTEND:${toIcsDate(endUtc)}`,
    `SUMMARY:30-Min Architecture Consultation: Olga Sirenko & ${params.clientName}`,
    `DESCRIPTION:Attendee: ${params.clientName} (${params.clientEmail})\\nDiscussion Focus: ${params.topic || 'Architecture, Latency & Agentic UX'}\\nHost: Olga Sirenko (lanovafuria@gmail.com)`,
    'LOCATION:Google Meet',
    'ORGANIZER;CN=Olga Sirenko:MAILTO:lanovafuria@gmail.com',
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=${params.clientName}:MAILTO:${params.clientEmail}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

/** Generates mailto and Gmail Web compose URLs for 48-Hour Architecture Audit requests to hello@olgasirenko.com */
export function buildAuditEmailUrls(params: {
  clientEmail: string;
  product: string;
  bottleneck: string;
  nda: boolean;
}): { mailtoUrl: string; gmailWebUrl: string; subject: string; body: string } {
  const subject = `48-Hour Architecture Audit Request — ${params.product}`;
  const body = [
    `Hi Olga,`,
    ``,
    `I would like to request a 48-Hour Architecture Audit:`,
    ``,
    `• Work Email: ${params.clientEmail}`,
    `• Product Name & URL: ${params.product}`,
    `• Primary Bottleneck: ${params.bottleneck}`,
    `• Mutual NDA Requested: ${params.nda ? 'Yes' : 'No'}`,
    ``,
    `Submitted via olgasirenko.com on ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
  ].join('\n');

  const mailtoUrl = `mailto:hello@olgasirenko.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@olgasirenko.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { mailtoUrl, gmailWebUrl, subject, body };
}
