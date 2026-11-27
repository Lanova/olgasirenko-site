import React, { useRef, useState } from 'react';
import {
  WORK_GROUPS,
  WORK_HERO,
  WORK_STRENGTHS,
  type CaseStudyItem,
  type WorkCompanyGroup,
} from '../data/work';
import { portfolioData } from '../data/portfolioData';
import { hrefFor } from '../hooks/useRoute';
import { useWorkAccess } from '../hooks/useWorkAccess';
import { Contact } from '../components/Contact';
import { LockDialog } from '../components/LockDialog';

interface ActiveCase {
  item: CaseStudyItem;
  group: WorkCompanyGroup;
}

const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 -960 960 960"
    aria-hidden="true"
  >
    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
  </svg>
);

const UnlockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="19"
    height="19"
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

export const WorkPage: React.FC = () => {
  const { unlocked, verifyAndUnlock } = useWorkAccess();
  const [lockTarget, setLockTarget] = useState<ActiveCase | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const handleCaseClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: CaseStudyItem,
    group: WorkCompanyGroup
  ) => {
    if (item.locked && !unlocked) {
      e.preventDefault();
      openerRef.current = e.currentTarget;
      setLockTarget({ item, group });
    }
  };

  const closeLock = () => {
    setLockTarget(null);
    openerRef.current?.focus({ preventScroll: true });
  };

  const handleUnlockSuccess = () => {
    if (!lockTarget) return;
    const { item, group } = lockTarget;
    setLockTarget(null);
    window.location.hash = hrefFor({
      page: 'case',
      company: group.id,
      slug: item.id,
    });
  };

  return (
    <div className="work-page">
      {/* 1. HERO & STRENGTHS */}
      <section className="work-hero" aria-labelledby="work-hero-title">
        <div className="container work-hero__inner">
          <div className="work-hero__head">
            <h1 id="work-hero-title" className="work-hero__title">
              {WORK_HERO.lead} <em>{WORK_HERO.italic}</em>
            </h1>
            <p className="work-hero__sub">{WORK_HERO.subtitle}</p>
            <div className="work-hero__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => scrollToSection('work-contact')}
              >
                <span>Let’s build together</span>
                <svg className="work-btn-icon" viewBox="0 -960 960 960" aria-hidden="true">
                  <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => scrollToSection('case-studies')}
              >
                <span>View selected work</span>
                <svg className="work-btn-icon" viewBox="0 -960 960 960" aria-hidden="true">
                  <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="work-strengths">
            {WORK_STRENGTHS.map((strength) => (
              <div key={strength.title} className="work-strength">
                <h2 className="work-strength__title">{strength.title}</h2>
                <p className="work-strength__desc">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK */}
      <section id="case-studies" className="work-selected" aria-labelledby="selected-work-title">
        <div className="container work-selected__inner">
          <h2 id="selected-work-title" className="work-selected__heading">
            Selected work
          </h2>

          <div className="work-groups">
            {WORK_GROUPS.map((group) => (
              <div key={group.id} id={`work-group-${group.id}`} className="work-group">
                <div className="work-group__head">
                  <span className="work-group__role">{group.role}</span>
                  <h3 className="work-group__company">{group.company}</h3>
                  <p className="work-group__summary">{group.summary}</p>
                </div>

                <div className="work-cards-grid">
                  {group.cases.map((item) => {
                    const isLocked = Boolean(item.locked && !unlocked);
                    return (
                      <a
                        key={item.id}
                        href={hrefFor({ page: 'case', company: group.id, slug: item.id })}
                        className="case-card"
                        data-locked={isLocked ? 'true' : 'false'}
                        onClick={(e) => handleCaseClick(e, item, group)}
                        aria-label={`Open case study: ${item.title}${isLocked ? ' (Confidential, access code required)' : ''}`}
                      >
                        <div className="case-card__frame">
                          <div className="case-card__media-wrap">
                            <div
                              className={`case-card__media${
                                item.image?.transparentBg ? ' case-card__media--studio' : ''
                              }`}
                            >
                              {item.image ? (
                                <img
                                  src={item.image.src}
                                  alt={item.image.alt}
                                  loading="lazy"
                                  decoding="async"
                                  className={`case-card__img${
                                    item.image.transparentBg ? ' case-card__img--contain' : ''
                                  }`}
                                />
                              ) : (
                                <div className="case-card__placeholder" aria-hidden="true">
                                  16:10 · UI preview
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="case-card__body">
                            <h4 className="case-card__title">{item.title}</h4>
                            <p className="case-card__summary">{item.summary}</p>

                            <div className="case-card__pills">
                              {item.highlights.map((h) => (
                                <span key={h} className="case-card__pill">
                                  {h}
                                </span>
                              ))}
                            </div>

                            <div className="case-card__footer">
                              <span className="case-card__link">
                                {item.locked &&
                                  (isLocked ? (
                                    <LockIcon className="case-card__lock-icon" />
                                  ) : (
                                    <UnlockIcon className="case-card__lock-icon case-card__lock-icon--unlocked" />
                                  ))}
                                <span>View case study →</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT */}
      <div id="work-contact">
        <Contact
          title={portfolioData.contact.title}
          subtitle={portfolioData.contact.subtitle}
          email={portfolioData.contact.email}
          emailSubject={portfolioData.contact.emailSubject}
          linkedinUrl={portfolioData.contact.linkedinUrl}
        />
      </div>

      {/* LOCK DIALOG (NDA Access Gate) */}
      {lockTarget && (
        <LockDialog
          title={lockTarget.item.title}
          company={lockTarget.group.company}
          onUnlock={verifyAndUnlock}
          onSuccess={handleUnlockSuccess}
          onClose={closeLock}
        />
      )}
    </div>
  );
};
