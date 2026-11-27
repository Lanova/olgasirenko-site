import React, { useRef, useState } from 'react';
import { ALL_CASES, type CaseStudyEntry } from '../data/work';
import { portfolioData } from '../data/portfolioData';
import { hrefFor } from '../hooks/useRoute';
import { useWorkAccess } from '../hooks/useWorkAccess';
import { LockDialog } from '../components/LockDialog';
import { Contact } from '../components/Contact';
import underConstructionImg from '../assets/images/case_under_construction_1795808898651.jpg';

interface CaseStudyPageProps {
  entry: CaseStudyEntry;
}

const LockSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 -960 960 960"
    aria-hidden="true"
  >
    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
  </svg>
);

const UnlockSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="11" width="13.5" height="10" rx="2.2" />
    <path d="M12.5 11V7a4.25 4.25 0 0 1 8.5 0v2.5" />
    <circle cx="9.25" cy="16" r="1.25" fill="currentColor" stroke="none" />
  </svg>
);

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ entry }) => {
  const { item, group, index } = entry;
  const { unlocked, verifyAndUnlock } = useWorkAccess();
  const isLocked = Boolean(item.locked && !unlocked);

  const [inlineCode, setInlineCode] = useState('');
  const [inlineError, setInlineError] = useState('');
  const inlineInputRef = useRef<HTMLInputElement>(null);

  const [navLockTarget, setNavLockTarget] = useState<CaseStudyEntry | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const prev = ALL_CASES[(index - 1 + ALL_CASES.length) % ALL_CASES.length];
  const next = ALL_CASES[(index + 1) % ALL_CASES.length];

  const handleInlineUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyAndUnlock(inlineCode)) {
      setInlineError('That code doesn’t match. Request access below.');
      inlineInputRef.current?.focus();
      return;
    }
    setInlineCode('');
    setInlineError('');
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: CaseStudyEntry
  ) => {
    if (target.item.locked && !unlocked) {
      e.preventDefault();
      openerRef.current = e.currentTarget;
      setNavLockTarget(target);
    }
  };

  const closeNavLock = () => {
    setNavLockTarget(null);
    openerRef.current?.focus({ preventScroll: true });
  };

  const handleNavUnlockSuccess = () => {
    if (!navLockTarget) return;
    const target = navLockTarget;
    setNavLockTarget(null);
    window.location.hash = hrefFor({
      page: 'case',
      company: target.group.id,
      slug: target.item.id,
    });
  };

  return (
    <div className="case-shell">
      <article className="container case-page" aria-labelledby="case-page-title">
        <header className="case-page__top">
          <nav className="case-breadcrumb" aria-label="Breadcrumb" data-noprint>
            <a className="essay-back" href={hrefFor({ page: 'work' })}>
              ← Work
            </a>
            <span className="case-breadcrumb__sep" aria-hidden="true">/</span>
            <span className="case-breadcrumb__company">{group.company}</span>
          </nav>

          <span className="case-page__counter" data-noprint>
            {String(index + 1).padStart(2, '0')} / {String(ALL_CASES.length).padStart(2, '0')}
          </span>
        </header>

        {isLocked ? (
          <section className="case-gate" aria-label="Confidential case study access">
            <div className="case-gate__card">
              <span className="lock-icon" aria-hidden="true">
                <LockSvg />
              </span>

              <div className="lock-head">
                <span className="lock-kicker">
                  {group.company} · Confidential · NDA
                </span>
                <h1 id="case-page-title" className="case-gate__title">
                  {item.title}
                </h1>
                <p className="lock-text">
                  Enter the access code from my resume to unlock and open this case study.
                </p>
              </div>

              <form className="lock-form" onSubmit={handleInlineUnlock} noValidate>
                <label className="lock-label" htmlFor="case-gate-code">
                  Access code
                </label>
                <input
                  ref={inlineInputRef}
                  className="lock-input"
                  id="case-gate-code"
                  type="password"
                  placeholder="Enter access code"
                  autoComplete="off"
                  value={inlineCode}
                  onChange={(e) => {
                    setInlineCode(e.target.value);
                    if (inlineError) setInlineError('');
                  }}
                />
                {inlineError && (
                  <p className="lock-error" role="alert">
                    {inlineError}
                  </p>
                )}
                <button className="btn btn--primary lock-submit" type="submit">
                  <span>Open case study</span>
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              <p className="lock-request">
                Don’t have a code?{' '}
                <a
                  href={`mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
                    `Case study access request: ${item.title}`
                  )}&body=${encodeURIComponent(
                    `Hi Olga,\n\nMy name is [Name] from [Company Name].\nI would like to have access to your case study: ${item.title}.\n\nThanks,\n[Name]`
                  )}`}
                >
                  Request access →
                </a>
              </p>
            </div>
          </section>
        ) : (
          <>
            <header className="case-page__header">
              <span className="work-group__role">
                {group.company} · {group.role}
                {item.locked ? ' · Confidential' : ''}
              </span>
              <h1 id="case-page-title" className="case-page__title">
                {item.title}
              </h1>
              <p className="case-page__dek">{item.summary}</p>
              <div className="case-card__pills" aria-label="Case study highlights">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="case-card__pill">
                    {highlight}
                  </span>
                ))}
              </div>
            </header>

            <section className="case-coming-soon" aria-labelledby="coming-soon-heading">
              <div className="case-coming-soon__media">
                <img
                  src={underConstructionImg}
                  alt="Editorial illustration of a calico cat wearing a hard hat and glasses using a miniature crane to hoist a glowing UI button into place over wireframe sketches"
                  className="case-coming-soon__img"
                />
              </div>

              <div className="case-coming-soon__content">
                <span className="work-group__role">Under construction</span>
                <h2 id="coming-soon-heading" className="case-coming-soon__title">
                  Coming soon
                </h2>
                <p className="case-coming-soon__text">
                  The full deep-dive for <strong>{item.title}</strong> is currently being assembled—diagrams, prototypes, and architecture notes are on the way. Want to see the live walkthrough now?
                </p>
                <div className="case-coming-soon__actions">
                  <a
                    className="btn btn--primary"
                    href={`mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
                      `Case study walkthrough: ${item.title}`
                    )}`}
                  >
                    <span>Request a live walkthrough</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a className="btn btn--secondary" href={hrefFor({ page: 'work' })}>
                    <span>← Back to all work</span>
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Previous / Next Case Study Navigation */}
        <nav className="case-nav" aria-label="Adjacent case studies" data-noprint>
          <a
            className="case-nav__item case-nav__item--prev"
            href={hrefFor({ page: 'case', company: prev.group.id, slug: prev.item.id })}
            onClick={(e) => handleNavClick(e, prev)}
          >
            <span className="case-nav__dir">
              ← Previous · {prev.group.company}
              {prev.item.locked &&
                (unlocked ? (
                  <UnlockSvg className="case-nav__lock case-nav__lock--unlocked" />
                ) : (
                  <LockSvg className="case-nav__lock" />
                ))}
            </span>
            <span className="case-nav__title">{prev.item.title}</span>
          </a>

          <a
            className="case-nav__item case-nav__item--next"
            href={hrefFor({ page: 'case', company: next.group.id, slug: next.item.id })}
            onClick={(e) => handleNavClick(e, next)}
          >
            <span className="case-nav__dir">
              {next.item.locked &&
                (unlocked ? (
                  <UnlockSvg className="case-nav__lock case-nav__lock--unlocked" />
                ) : (
                  <LockSvg className="case-nav__lock" />
                ))}
              {next.group.company} · Next →
            </span>
            <span className="case-nav__title">{next.item.title}</span>
          </a>
        </nav>

        {navLockTarget && (
          <LockDialog
            title={navLockTarget.item.title}
            company={navLockTarget.group.company}
            onUnlock={verifyAndUnlock}
            onSuccess={handleNavUnlockSuccess}
            onClose={closeNavLock}
          />
        )}
      </article>

      <Contact
        title={portfolioData.contact.title}
        subtitle={portfolioData.contact.subtitle}
        email={portfolioData.contact.email}
        emailSubject={portfolioData.contact.emailSubject}
        linkedinUrl={portfolioData.contact.linkedinUrl}
      />
    </div>
  );
};
