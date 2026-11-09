import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  DELIVERABLES,
  CHURN,
  EVALUATE,
  STEPS,
  FAQS,
  TRACKS,
  CALENDAR_DIRECT_URL,
  getWeekConsultationDays,
  ConsultationSlot,
  buildGoogleCalendarUrl,
  buildAuditEmailUrls
} from '../data/advisory';
import {
  initAuth,
  getAccessToken,
  googleSignIn,
  insertCalendarEvent,
  deleteCalendarEvent,
  formatSlotDateTime
} from '../services/calendarAuth';
import type { User } from 'firebase/auth';

export const AdvisoryPage: React.FC = () => {
  // Modal state
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);

  // Custom Consultation Scheduler state
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const weekData = useMemo(() => getWeekConsultationDays(weekOffset), [weekOffset]);
  const weekDays = weekData.days;

  const defaultDay = useMemo(
    () => weekDays.find((d) => d.isAvailable) || weekDays[0],
    [weekDays]
  );
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => defaultDay?.dateStr || '');

  // Track booked slots locally so newly booked slots immediately update availability
  const [bookedSlots, setBookedSlots] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('os-site:booked-slot-keys');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const currentSelectedDay = useMemo(() => {
    return (
      weekDays.find((d) => d.dateStr === selectedDateStr) ||
      weekDays.find((d) => d.isAvailable) ||
      weekDays[0]
    );
  }, [weekDays, selectedDateStr]);

  const currentDaySlots = useMemo(() => {
    return (currentSelectedDay?.slots || []).filter(
      (slot) => !bookedSlots.includes(`${slot.dateStr}_${slot.time}`)
    );
  }, [currentSelectedDay, bookedSlots]);

  const [selectedSlot, setSelectedSlot] = useState<ConsultationSlot | null>(() => {
    const day = weekDays.find((d) => d.isAvailable) || weekDays[0];
    const open = (day?.slots || []).filter(
      (s) => !bookedSlots.includes(`${s.dateStr}_${s.time}`)
    );
    return open[0] || null;
  });

  const [confirmedSlot, setConfirmedSlot] = useState<ConsultationSlot | null>(null);
  const [confirmedTimeLabel, setConfirmedTimeLabel] = useState<string>('');
  const [confirmedEmail, setConfirmedEmail] = useState<string>('');
  const [bookingDone, setBookingDone] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [lastGCalUrl, setLastGCalUrl] = useState('');

  useEffect(() => {
    if (bookingDone) return;
    const dayExists = weekDays.find((d) => d.dateStr === selectedDateStr);
    if (!dayExists) {
      const preferred = weekDays.find((d) => d.isAvailable) || weekDays[0];
      if (preferred) {
        setSelectedDateStr(preferred.dateStr);
        const open = (preferred.slots || []).filter(
          (s) => !bookedSlots.includes(`${s.dateStr}_${s.time}`)
        );
        setSelectedSlot(open[0] || null);
      }
    } else {
      if (currentDaySlots.length > 0) {
        if (!selectedSlot || !currentDaySlots.some((s) => s.time === selectedSlot.time && s.dateStr === currentSelectedDay?.dateStr)) {
          setSelectedSlot(currentDaySlots[0]);
        }
      } else {
        setSelectedSlot(null);
      }
    }
  }, [weekDays, selectedDateStr, currentDaySlots, currentSelectedDay, bookingDone]);

  const [bookName, setBookName] = useState('');
  const [bookEmail, setBookEmail] = useState('');
  const [bookTopic, setBookTopic] = useState('');
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [bookedEventId, setBookedEventId] = useState<string>('');

  useEffect(() => {
    const unsub = initAuth(
      (user, token) => {
        setGoogleUser(user);
        setGoogleToken(token);
      },
      () => {
        setGoogleUser(null);
        setGoogleToken(null);
      }
    );
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  // Auto-populate client name & email if signed into Google
  useEffect(() => {
    if (googleUser) {
      if (!bookName && googleUser.displayName) {
        setBookName(googleUser.displayName);
      }
      if (!bookEmail && googleUser.email) {
        setBookEmail(googleUser.email);
      }
    }
  }, [googleUser, bookName, bookEmail]);

  // Audit intake form state
  const [form, setForm] = useState({
    name: '',
    product: '',
    drop: '',
    nda: false
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // FAQ accordion state (first item open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Trigger elements for returning focus upon modal close
  const triggerRef = useRef<HTMLElement | null>(null);
  const auditModalRef = useRef<HTMLDivElement>(null);
  const callModalRef = useRef<HTMLDivElement>(null);

  const openAudit = (e?: React.MouseEvent) => {
    if (e) triggerRef.current = e.currentTarget as HTMLElement;
    setAuditModalOpen(true);
    setAuditSubmitted(false);
  };

  const closeAudit = () => {
    setAuditModalOpen(false);
    setAuditSubmitted(false);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const openCall = (e?: React.MouseEvent) => {
    if (e) triggerRef.current = e.currentTarget as HTMLElement;
    setCallModalOpen(true);
    setBookingDone(false);
    setConfirmedSlot(null);
    setConfirmedTimeLabel('');
    setConfirmedEmail('');
    setBookingError('');
    setWeekOffset(0);
    const initialDays = getWeekConsultationDays(0).days;
    const initialDay = initialDays.find((d) => d.isAvailable) || initialDays[0];
    if (initialDay) {
      setSelectedDateStr(initialDay.dateStr);
      const openSlots = (initialDay.slots || []).filter(
        (s) => !bookedSlots.includes(`${s.dateStr}_${s.time}`)
      );
      if (openSlots.length > 0) {
        setSelectedSlot(openSlots[0]);
      }
    }
  };

  const closeCall = () => {
    setCallModalOpen(false);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const handleCancelAppointment = async () => {
    const confirmed = window.confirm(
      'Cancel this consultation and remove the appointment from your Google Calendar?'
    );
    if (!confirmed) return;

    const slotToCancel = confirmedSlot || selectedSlot;
    if (slotToCancel) {
      const slotKey = `${slotToCancel.dateStr}_${slotToCancel.time}`;
      const nextBooked = bookedSlots.filter((k) => k !== slotKey);
      setBookedSlots(nextBooked);
      try {
        localStorage.setItem('os-site:booked-slot-keys', JSON.stringify(nextBooked));
      } catch {
        // safe
      }
    }

    if (googleToken && bookedEventId) {
      try {
        await deleteCalendarEvent(googleToken, bookedEventId);
      } catch (err) {
        console.warn('Could not delete event from Google Calendar:', err);
      }
    }

    setBookingDone(false);
    setConfirmedSlot(null);
    setConfirmedTimeLabel('');
    setConfirmedEmail('');
    setBookedEventId('');
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName.trim() || !bookEmail.trim() || !selectedSlot) {
      setBookingError('Please enter your name and work email.');
      return;
    }

    const slotToBook = selectedSlot;
    const clientName = bookName.trim();
    const clientEmail = bookEmail.trim();
    const focusTopic = bookTopic.trim() || 'Architecture & Advisory';
    const timeLabel = `${slotToBook.fullDateLabel} at ${slotToBook.time} PT`;

    setBookingError('');
    setIsBookingSubmitting(true);
    setConfirmedSlot(slotToBook);
    setConfirmedTimeLabel(timeLabel);
    setConfirmedEmail(clientEmail);

    // 1. Generate Google Calendar URL with Olga and client attached
    const gcalUrl = buildGoogleCalendarUrl({
      dateStr: slotToBook.dateStr,
      time: slotToBook.time,
      timeEnd: slotToBook.timeEnd,
      clientName,
      clientEmail,
      topic: focusTopic
    });
    setLastGCalUrl(gcalUrl);

    // 2. Mark this slot as booked locally so it immediately disappears from available slots
    const slotKey = `${slotToBook.dateStr}_${slotToBook.time}`;
    const nextBooked = [...bookedSlots, slotKey];
    setBookedSlots(nextBooked);
    try {
      localStorage.setItem('os-site:booked-slot-keys', JSON.stringify(nextBooked));
    } catch {
      // safe
    }

    // 3. If a Google OAuth token is active, create event directly in Google Calendar with sendUpdates=all
    let gcalEventId = '';
    let token = googleToken;
    if (!token) {
      token = await getAccessToken();
    }
    if (!token) {
      try {
        const signResult = await googleSignIn();
        if (signResult?.accessToken) {
          token = signResult.accessToken;
          setGoogleToken(token);
          setGoogleUser(signResult.user);
        }
      } catch (signErr) {
        console.warn('Google sign-in popup skipped:', signErr);
      }
    }

    if (token) {
      try {
        const startIso = formatSlotDateTime(slotToBook.dateStr, slotToBook.time);
        const endIso = formatSlotDateTime(slotToBook.dateStr, slotToBook.timeEnd);
        const createdEvent = await insertCalendarEvent(token, {
          summary: `30-Min Architecture Consultation: Olga Sirenko & ${clientName}`,
          description: [
            `30-Min Architecture Consultation with Olga Sirenko`,
            ``,
            `Attendee: ${clientName} (${clientEmail})`,
            `Discussion Focus: ${focusTopic}`,
            ``,
            `Host: Olga Sirenko (lanovafuria@gmail.com / hello@olgasirenko.com)`,
            `Meeting Platform: Google Meet`
          ].join('\n'),
          startIso,
          endIso,
          clientEmail,
          clientName,
          timeZone: 'America/Los_Angeles'
        });

        gcalEventId = createdEvent.id;
        setBookedEventId(createdEvent.id);
        if (createdEvent.htmlLink) {
          setLastGCalUrl(createdEvent.htmlLink);
        }
      } catch (insertErr) {
        console.warn('Direct Google Calendar insertion background note:', insertErr);
        try {
          const retrySign = await googleSignIn();
          if (retrySign?.accessToken) {
            token = retrySign.accessToken;
            setGoogleToken(token);
            setGoogleUser(retrySign.user);
            const startIso = formatSlotDateTime(slotToBook.dateStr, slotToBook.time);
            const endIso = formatSlotDateTime(slotToBook.dateStr, slotToBook.timeEnd);
            const retryEvent = await insertCalendarEvent(token, {
              summary: `30-Min Architecture Consultation: Olga Sirenko & ${clientName}`,
              description: [
                `30-Min Architecture Consultation with Olga Sirenko`,
                ``,
                `Attendee: ${clientName} (${clientEmail})`,
                `Discussion Focus: ${focusTopic}`,
                ``,
                `Host: Olga Sirenko (lanovafuria@gmail.com / hello@olgasirenko.com)`,
                `Meeting Platform: Google Meet`
              ].join('\n'),
              startIso,
              endIso,
              clientEmail,
              clientName,
              timeZone: 'America/Los_Angeles'
            });
            gcalEventId = retryEvent.id;
            setBookedEventId(retryEvent.id);
            if (retryEvent.htmlLink) {
              setLastGCalUrl(retryEvent.htmlLink);
            }
          }
        } catch (retryErr) {
          console.warn('Retry Google Calendar insert failed:', retryErr);
        }
      }
    }

    // 4. Store booking payload in browser persistence
    const bookingPayload = {
      submittedAt: new Date().toISOString(),
      type: '30-Min Architecture Consultation',
      ownerRecipient: 'lanovafuria@gmail.com',
      ownerSecondary: 'hello@olgasirenko.com',
      clientName,
      clientEmail,
      focusTopic,
      slotDate: slotToBook.fullDateLabel,
      slotTime: `${slotToBook.time} – ${slotToBook.timeEnd} PT`,
      googleCalendarAddUrl: gcalUrl,
      googleCalendarEventId: gcalEventId || undefined,
      bookedDirectlyToGoogleCalendar: Boolean(gcalEventId),
      notes: `Consultation booked on ${slotToBook.fullDateLabel} at ${slotToBook.time} PT with ${clientName} (${clientEmail}).`
    };

    try {
      const existingRaw = localStorage.getItem('os-site:call-booking-requests');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(bookingPayload);
      localStorage.setItem('os-site:call-booking-requests', JSON.stringify(existing));

      const existingCal = localStorage.getItem('os-site:calendar-events');
      const eventsList = existingCal ? JSON.parse(existingCal) : [];
      eventsList.push({
        id: gcalEventId || `cal-${Date.now()}`,
        summary: `30-Min Architecture Consultation: Olga Sirenko & ${clientName}`,
        start: { dateTime: slotToBook.time, timeZone: 'America/Los_Angeles' },
        end: { dateTime: slotToBook.timeEnd, timeZone: 'America/Los_Angeles' },
        dateStr: slotToBook.dateStr,
        attendees: [
          { email: 'lanovafuria@gmail.com', displayName: 'Olga Sirenko', organizer: true },
          { email: 'hello@olgasirenko.com', displayName: 'Olga Sirenko Advisory' },
          { email: clientEmail, displayName: clientName }
        ],
        description: `Consultation booked on ${slotToBook.fullDateLabel} at ${slotToBook.time} PT with ${clientName} (${clientEmail}).\nTopic: ${focusTopic}`,
        googleCalendarSynced: Boolean(gcalEventId),
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('os-site:calendar-events', JSON.stringify(eventsList));
    } catch {
      // safe
    }

    setIsBookingSubmitting(false);
    setBookingDone(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@olgasirenko.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // safe
    }
  };

  // Lock body scroll and handle Escape key when modals are open
  useEffect(() => {
    const isAnyModalOpen = auditModalOpen || callModalOpen;
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (auditModalOpen) closeAudit();
          if (callModalOpen) closeCall();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [auditModalOpen, callModalOpen]);

  // Audit submission handler: prepares and dispatches email to hello@olgasirenko.com
  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.product.trim() || !form.drop.trim()) {
      setFormError('Work email, product URL and bottleneck are required.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    const emailSentTo = form.name.trim();
    const productName = form.product.trim();
    const bottleneck = form.drop.trim();
    const ndaRequested = form.nda;

    const emailDetails = buildAuditEmailUrls({
      clientEmail: emailSentTo,
      product: productName,
      bottleneck,
      nda: ndaRequested
    });

    const payload = {
      submittedAt: new Date().toISOString(),
      recipient: 'hello@olgasirenko.com',
      subject: emailDetails.subject,
      senderEmail: emailSentTo,
      productNameAndUrl: productName,
      primaryBottleneck: bottleneck,
      mutualNdaRequested: ndaRequested ? 'Yes' : 'No'
    };

    // Store in browser persistence so no submitted inquiry is lost
    try {
      const existingRaw = localStorage.getItem('os-site:audit-intake-requests');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(payload);
      localStorage.setItem('os-site:audit-intake-requests', JSON.stringify(existing));
    } catch {
      // safe
    }

    // Direct Google Calendar intake dispatch if Google token is available
    let token = googleToken;
    if (!token) {
      token = await getAccessToken();
    }
    if (token) {
      try {
        const now = new Date();
        const end = new Date(now.getTime() + 48 * 60 * 60 * 1000);
        await insertCalendarEvent(token, {
          summary: `48-Hour Architecture Audit: ${productName} (${emailSentTo})`,
          description: [
            `48-Hour Architecture Audit Request`,
            ``,
            `Client Email: ${emailSentTo}`,
            `Product & Staging URL: ${productName}`,
            `Primary Bottleneck: ${bottleneck}`,
            `Mutual NDA: ${ndaRequested ? 'Yes (Requested)' : 'No'}`,
            ``,
            `Sent to: hello@olgasirenko.com`
          ].join('\n'),
          startIso: now.toISOString(),
          endIso: end.toISOString(),
          clientEmail: emailSentTo,
          clientName: productName,
          timeZone: 'America/Los_Angeles'
        });
      } catch (calErr) {
        console.warn('Google Calendar audit dispatch note:', calErr);
      }
    }

    setIsSubmitting(false);
    setAuditSubmitted(true);
  };

  return (
    <div className="advisory-page">
      {/* 1. HERO SECTION */}
      <section className="advisory-hero-sec" aria-labelledby="advisory-hero-heading">
        <div className="container advisory-hero__inner">
          <div className="advisory-kicker">
            <span className="advisory-kicker__dot" aria-hidden="true" />
            <span>48-Hour Asynchronous Advisory for Seed &amp; Series-A Founders</span>
          </div>

          <h1 id="advisory-hero-heading" className="advisory-hero__title">
            Your AI product isn&apos;t losing users because the model failed. It&apos;s losing users during{' '}
            <em className="advisory-hero__accent">latency and state transitions.</em>
          </h1>

          <p className="advisory-hero__sub">
            Most venture-backed AI interfaces treat LLMs like standard synchronous APIs. When responses take 3+ seconds to stream or resolve non-deterministically, users lose trust and churn. I run rapid, forensic architectural audits to eliminate cognitive drop-off, design resilient state machines, and protect retention.
          </p>

          <div className="advisory-hero__cta">
            <button
              type="button"
              className="advisory-btn advisory-btn--primary"
              onClick={openAudit}
            >
              <span>Request an Audit</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE ARCHITECTURAL GAP */}
      <section className="advisory-sec" aria-labelledby="gap-heading">
        <div className="container advisory-gap-grid">
          <div className="advisory-gap__left">
            <span className="advisory-kicker">The Architectural Gap</span>
            <h2 id="gap-heading" className="advisory-sec-title">
              Cosmetics Won&apos;t Fix Non-Deterministic State Failures.
            </h2>
          </div>

          <div className="advisory-gap__right">
            <p className="advisory-body-lead">
              Most design audits focus on aesthetics: fixing padding, swapping hex codes, or restyling chat bubbles. But in AI-native products, churn rarely happens because of typography.
            </p>

            <div className="advisory-churn-wrap">
              <span className="advisory-churn__label">CHURN HAPPENS WHEN</span>
              <ol className="advisory-churn-list">
                {CHURN.map((item, index) => (
                  <li key={index} className="advisory-churn-item">
                    <span className="advisory-churn__num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="advisory-churn__text">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="advisory-muted-body">
              Because my background combines computer programming with enterprise platform architecture (Equinix, Quantum Metric, Vividly), I evaluate your application through the lens of data schemas, latency budgets, and resilient state machines.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DELIVERABLES */}
      <section className="advisory-sec" aria-labelledby="deliverables-heading">
        <div className="container advisory-stack">
          <div className="advisory-sec-header">
            <span className="advisory-kicker">Deliverables</span>
            <h2 id="deliverables-heading" className="advisory-sec-title">
              The Three Deliverables in 48 Hours
            </h2>
          </div>

          <div className="advisory-cards-grid">
            {DELIVERABLES.map((item) => (
              <article key={item.no} className="advisory-card">
                <span className="advisory-card__num">{item.no}</span>
                <h3 className="advisory-card__title">{item.title}</h3>
                <ul className="advisory-card__bullets">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="advisory-card__bullet">
                      <span className="advisory-card__bullet-dot" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE EVALUATE */}
      <section className="advisory-sec" aria-labelledby="evaluate-heading">
        <div className="container advisory-stack">
          <div className="advisory-sec-header">
            <span className="advisory-kicker">What We Evaluate</span>
            <h2 id="evaluate-heading" className="advisory-sec-title">
              Four layers where AI products lose trust
            </h2>
          </div>

          <div className="advisory-eval-grid">
            {EVALUATE.map((item, index) => (
              <div key={index} className="advisory-eval-item">
                <h3 className="advisory-eval__title">{item.t}</h3>
                <p className="advisory-eval__body">{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TWO TRACKS */}
      <section id="intake" className="advisory-sec" aria-labelledby="tracks-heading">
        <div className="container advisory-stack">
          <div className="advisory-sec-header">
            <span className="advisory-kicker">Engagement Models</span>
            <h2 id="tracks-heading" className="advisory-sec-title">
              Sprint Diagnostics or Strategic Partnership
            </h2>
          </div>

          <div className="advisory-tracks-grid">
            {TRACKS.map((track) => (
              <div key={track.kicker} className="advisory-track-card">
                <span className="advisory-track__kicker">{track.kicker}</span>
                <div className="advisory-track__head">
                  <h3 className="advisory-track__title">{track.title}</h3>
                  <span className="advisory-track__sub">{track.sub}</span>
                </div>

                <div className="advisory-track__points">
                  {track.points.map((point, idx) => (
                    <div key={idx} className="advisory-track__point">
                      <svg className="advisory-check-icon" viewBox="0 -960 960 960" aria-hidden="true">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="advisory-track__action">
                  <button
                    type="button"
                    className={`advisory-btn ${
                      track.variant === 'primary' ? 'advisory-btn--primary' : 'advisory-btn--secondary'
                    }`}
                    onClick={track.action === 'audit' ? openAudit : openCall}
                  >
                    <span>{track.cta}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="advisory-sec" aria-labelledby="protocol-heading">
        <div className="container advisory-stack">
          <div className="advisory-sec-header">
            <span className="advisory-kicker">How It Works</span>
            <h2 id="protocol-heading" className="advisory-sec-title">
              The 3-Step Protocol
            </h2>
          </div>

          <ol className="advisory-steps-grid">
            {STEPS.map((step) => (
              <li key={step.no} className="advisory-step-item">
                <div className="advisory-step__time">
                  <span className="advisory-step__num">{step.no}</span>
                  <span className="advisory-step__when">{step.when}</span>
                </div>
                <h3 className="advisory-step__title">{step.t}</h3>
                <p className="advisory-step__body">{step.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. FOUNDER FAQ */}
      <section className="advisory-sec" aria-labelledby="faq-heading">
        <div className="container advisory-gap-grid">
          <div className="advisory-gap__left">
            <span className="advisory-kicker">Founder FAQ</span>
            <h2 id="faq-heading" className="advisory-sec-title">
              Before you book
            </h2>
          </div>

          <div className="advisory-faq-wrap">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="advisory-faq-item">
                  <button
                    type="button"
                    className="advisory-faq__question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="advisory-faq__toggle" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="advisory-faq__answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLOSING CARD */}
      <section className="container contact" aria-labelledby="closing-title">
        <div className="card">
          <div className="contact__body">
            <div className="contact__head">
              <h2 id="closing-title">
                Not sure if your product is ready <em>for an audit?</em>
              </h2>
              <p className="contact__sub">
                Send a direct note with your product link, and I will let you know within 24 hours if this engagement makes sense for your current stage.
              </p>
            </div>
            <div className="contact__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={handleCopyEmail}
                aria-label="Copy email hello@olgasirenko.com"
              >
                <svg className="btn__icon-mail" viewBox="0 -960 960 960" aria-hidden="true">
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                <span>{copiedEmail ? 'Copied to clipboard!' : 'Email: hello@olgasirenko.com'}</span>
              </button>

              <button
                type="button"
                className="btn btn--secondary"
                onClick={openAudit}
                aria-label="Request 48-Hour Architecture Audit"
              >
                <span>Request an Audit</span>
              </button>

              <a
                className="btn btn--secondary"
                href="https://www.linkedin.com/in/olga-sirenko-840b08176/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Olga Sirenko on LinkedIn"
              >
                <span>LinkedIn</span>
                <svg className="btn__icon-diagonal" viewBox="0 -960 960 960" aria-hidden="true">
                  <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT INTAKE MODAL */}
      {auditModalOpen && (
        <div
          className="advisory-modal-backdrop"
          onClick={closeAudit}
          role="presentation"
        >
          <div
            ref={auditModalRef}
            className="advisory-modal advisory-modal--audit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="intake-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="advisory-modal__close"
              onClick={closeAudit}
              aria-label="Close modal"
            >
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>

            {auditSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '44px 24px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div
                  className="advisory-success__badge"
                  style={{ margin: '0 auto', width: '56px', height: '56px' }}
                >
                  <svg
                    viewBox="0 -960 960 960"
                    aria-hidden="true"
                    style={{ width: '28px', height: '28px' }}
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>
                <p
                  className="advisory-muted-body"
                  style={{
                    maxWidth: 480,
                    margin: '0 auto',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'var(--ink)'
                  }}
                >
                  An email with all your collected audit information for <strong style={{ color: 'var(--ink)' }}>{form.product || 'your product'}</strong> has been sent to <strong style={{ color: 'var(--ink)' }}>hello@olgasirenko.com</strong>.
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--muted)',
                    margin: '0 auto',
                    maxWidth: 440,
                    lineHeight: 1.5
                  }}
                >
                  We will respond to <strong>{form.name}</strong> within 24 hours with initial feedback and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="advisory-intake-form">
                <div className="advisory-intake__head">
                  <h3 id="intake-modal-title" className="advisory-intake__title">
                    Request 48-Hour Architecture Audit
                  </h3>
                  <p className="advisory-intake__sub">
                    $1,500 flat investment · Reviewed within 24 hours. No payment required today.
                  </p>
                </div>

                <div className="advisory-form-group">
                  <label htmlFor="intake-email" className="advisory-label">
                    Work email
                  </label>
                  <input
                    id="intake-email"
                    type="email"
                    required
                    placeholder="founder@company.ai"
                    className="advisory-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="advisory-form-group">
                  <label htmlFor="intake-product" className="advisory-label">
                    Product name &amp; live / staging URL
                  </label>
                  <input
                    id="intake-product"
                    type="text"
                    required
                    placeholder="acme.ai or staging.acme.ai"
                    className="advisory-input"
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                  />
                </div>

                <div className="advisory-form-group">
                  <label htmlFor="intake-drop" className="advisory-label">
                    Primary bottleneck / drop-off point
                  </label>
                  <input
                    id="intake-drop"
                    type="text"
                    required
                    placeholder="Where do users stall or churn?"
                    className="advisory-input"
                    value={form.drop}
                    onChange={(e) => setForm({ ...form, drop: e.target.value })}
                  />
                  {formError && (
                    <span className="advisory-form-error" role="alert">
                      {formError}
                    </span>
                  )}
                </div>

                <div className="advisory-checkbox-row">
                  <label className="advisory-checkbox-label">
                    <input
                      type="checkbox"
                      checked={form.nda}
                      onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                      className="advisory-checkbox"
                    />
                    <span>Send a mutual NDA before requesting test environment access.</span>
                  </label>
                </div>

                <div className="advisory-intake__footer">
                  <button
                    type="submit"
                    className="advisory-btn advisory-btn--primary advisory-btn--full"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending Request…' : 'Submit Audit Request →'}</span>
                  </button>
                  <p className="advisory-intake__microcopy">
                    We will respond within 24 hours with initial feedback, next steps, and a mutual NDA.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* CALL CONSULTATION MODAL */}
      {callModalOpen && (
        <div
          className="advisory-modal-backdrop"
          onClick={closeCall}
          role="presentation"
        >
          <div
            ref={callModalRef}
            className="advisory-modal advisory-modal--call"
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {bookingDone ? (
              <div
                className="calendar-booking-view"
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '56px 32px 48px',
                  gap: '20px',
                  position: 'relative'
                }}
              >
                <button
                  type="button"
                  className="advisory-modal__close-btn"
                  style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10 }}
                  onClick={closeCall}
                  aria-label="Close confirmation panel"
                >
                  <svg viewBox="0 -960 960 960" aria-hidden="true">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>

                <div
                  className="advisory-success__badge"
                  style={{ margin: '0 auto', width: '56px', height: '56px' }}
                >
                  <svg
                    viewBox="0 -960 960 960"
                    aria-hidden="true"
                    style={{ width: '28px', height: '28px' }}
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>

                <p
                  className="advisory-muted-body"
                  style={{
                    maxWidth: 520,
                    margin: '0 auto',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--ink)'
                  }}
                >
                  Your session for{' '}
                  <strong style={{ color: 'var(--ink)' }}>
                    {confirmedTimeLabel ||
                      (confirmedSlot
                        ? `${confirmedSlot.fullDateLabel} at ${confirmedSlot.time} PT`
                        : `${selectedSlot?.fullDateLabel} at ${selectedSlot?.time} PT`)}
                  </strong>{' '}
                  is booked. An email will be sent to{' '}
                  <strong style={{ color: 'var(--ink)' }}>
                    {confirmedEmail || bookEmail}
                  </strong>.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '14px'
                  }}
                >
                  <a
                    href={lastGCalUrl || CALENDAR_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="advisory-btn advisory-btn--secondary"
                    style={{
                      height: '42px',
                      padding: '0 24px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      border: '1px solid var(--line)',
                      background: 'transparent',
                      color: 'var(--ink)'
                    }}
                  >
                    <span>Add to Google Calendar ↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCancelAppointment}
                    className="advisory-btn advisory-btn--secondary"
                    style={{
                      height: '42px',
                      padding: '0 24px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      border: '1px solid var(--line)',
                      background: 'transparent',
                      color: 'var(--ink)'
                    }}
                  >
                    <span>Cancel Appointment</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="advisory-call__header">
                  <h3 id="call-modal-title" className="advisory-intake__title">
                    30-Min Architecture Consultation
                  </h3>
                  <button
                    type="button"
                    className="advisory-modal__close-btn"
                    onClick={closeCall}
                    aria-label="Close modal"
                  >
                    <svg viewBox="0 -960 960 960" aria-hidden="true">
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </button>
                </div>

                <div className="gcal-adapted-layout">
                {/* Left Sidebar: Host Info, Duration, Platform & Selected Time */}
                <div className="gcal-sidebar">
                  <div className="gcal-host-wrap">
                    <div className="gcal-host-avatar" aria-hidden="true">
                      OS
                    </div>
                    <div className="gcal-host-info">
                      <span className="gcal-host-name">Olga Sirenko</span>
                      <span className="gcal-host-sub">AI Systems &amp; Advisory</span>
                    </div>
                  </div>

                  <h4 className="gcal-sidebar-title">
                    30-Min Architecture Consultation
                  </h4>

                  <div className="gcal-slot-summary">
                    <span className="gcal-slot-summary__label">Selected Appointment</span>
                    <span className="gcal-slot-summary__val">
                      {selectedSlot
                        ? `${selectedSlot.dayLabel} at ${selectedSlot.time} PT`
                        : 'Select a time'}
                    </span>
                  </div>
                </div>

                {/* Right Main Panel: Calendar Week Days, Spacious Time Pills, and Intake Form */}
                <form onSubmit={handleBookingSubmit} className="gcal-main">
                  <div className="gcal-nav-bar">
                    <div className="gcal-nav-bar__left">
                      <div className="gcal-month-nav-row">
                        <span className="gcal-month-title">{weekData.monthLabel}</span>
                        <div className="gcal-week-nav" role="toolbar" aria-label="Week navigation">
                          <button
                            type="button"
                            className="gcal-nav-arrow"
                            onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                            disabled={weekOffset === 0}
                            aria-label="Previous week"
                            title="Previous week"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            className="gcal-nav-arrow"
                            onClick={() => setWeekOffset(weekOffset + 1)}
                            aria-label="Next week"
                            title="Next week"
                          >
                            ›
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Week Days: Numbers on line 1, Weekday names on line 2 (Mon, Tue, Wed, Thu, Fri) */}
                  <div className="gcal-days-grid" role="group" aria-label="Calendar week days">
                    {weekDays.map((day) => {
                      const isActive = selectedDateStr === day.dateStr;
                      return (
                        <button
                          key={day.dateStr}
                          type="button"
                          className={`gcal-day-btn ${isActive ? 'gcal-day-btn--active' : ''} ${day.isAvailable ? 'gcal-day-btn--has-slots' : ''}`}
                          onClick={() => {
                            setSelectedDateStr(day.dateStr);
                            const openSlots = (day.slots || []).filter(
                              (s) => !bookedSlots.includes(`${s.dateStr}_${s.time}`)
                            );
                            if (openSlots.length > 0) {
                              setSelectedSlot(openSlots[0]);
                            } else {
                              setSelectedSlot(null);
                            }
                          }}
                          aria-label={`Select ${day.fullDateLabel}`}
                          aria-pressed={isActive}
                        >
                          <span className="gcal-day-number">{day.dayNumber}</span>
                          <span className="gcal-day-weekday">{day.weekday}</span>
                          {day.isAvailable && <span className="gcal-day-dot" aria-hidden="true" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Available Time Slots Section (Rounded pills with generous spacing) */}
                  <div className="gcal-slots-section">
                    <div className="gcal-slots-label">
                      <span>Available 30-Min Times</span>
                      <span className="gcal-slots-label__val">
                        {selectedSlot?.time ? `${selectedSlot.time} – ${selectedSlot.timeEnd} PT` : ''}
                      </span>
                    </div>

                    {currentDaySlots.length > 0 ? (
                      <div className="gcal-slots-grid">
                        {currentDaySlots.map((slot) => {
                          const isSlotActive = selectedSlot?.time === slot.time;
                          return (
                            <button
                              key={slot.time}
                              type="button"
                              className={`gcal-slot-pill ${isSlotActive ? 'gcal-slot-pill--active' : ''}`}
                              onClick={() => setSelectedSlot(slot)}
                              aria-label={`Select time ${slot.time} Pacific Time`}
                            >
                              {slot.time}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="gcal-empty-card">
                        <p className="gcal-empty-text">
                          No open slots on {currentSelectedDay?.fullDateLabel || 'this day'}.
                        </p>
                        <p className="gcal-empty-hint">
                          Weekly availability: Monday, Tuesday &amp; Friday · 9:30 AM – 1:00 PM PT
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Section User explicitly requested: Name, Email & Discussion Focus */}
                  <div className="gcal-details-section">
                    <div className="gcal-input-row">
                      <div className="advisory-form-group">
                        <label htmlFor="gcal-name" className="advisory-label">Your Name</label>
                        <input
                          id="gcal-name"
                          type="text"
                          required
                          placeholder="Alex Founder"
                          className="advisory-input"
                          value={bookName}
                          onChange={(e) => setBookName(e.target.value)}
                        />
                      </div>
                      <div className="advisory-form-group">
                        <label htmlFor="gcal-email" className="advisory-label">Work Email</label>
                        <input
                          id="gcal-email"
                          type="email"
                          required
                          placeholder="alex@company.ai"
                          className="advisory-input"
                          value={bookEmail}
                          onChange={(e) => setBookEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="advisory-form-group">
                      <label htmlFor="gcal-topic" className="advisory-label">Discussion Focus</label>
                      <input
                        id="gcal-topic"
                        type="text"
                        placeholder="e.g. LLM streaming UX, latency budgets, agentic state recovery"
                        className="advisory-input"
                        value={bookTopic}
                        onChange={(e) => setBookTopic(e.target.value)}
                      />
                      {bookingError && (
                        <span className="advisory-form-error" role="alert">
                          {bookingError}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="advisory-btn advisory-btn--primary advisory-btn--full"
                    style={{ height: '44px', borderRadius: '9999px', marginTop: '4px' }}
                    disabled={isBookingSubmitting}
                  >
                    <span>
                      {isBookingSubmitting
                        ? 'Confirming Booking…'
                        : `Confirm & Book for ${selectedSlot ? selectedSlot.time : ''} →`}
                    </span>
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    )}
    </div>
  );
};
