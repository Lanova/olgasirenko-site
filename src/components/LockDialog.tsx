import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolioData } from '../data/portfolioData';

interface LockDialogProps {
  title: string;
  company?: string;
  onUnlock: (code: string) => boolean;
  onSuccess: () => void;
  onClose: () => void;
}

export const LockDialog: React.FC<LockDialogProps> = ({
  title,
  company,
  onUnlock,
  onSuccess,
  onClose,
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const codeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(
      () => codeInputRef.current?.focus({ preventScroll: true }),
      50
    );
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onUnlock(code)) {
      setError('That code doesn’t match. Request access below.');
      codeInputRef.current?.focus({ preventScroll: true });
      return;
    }
    setCode('');
    setError('');
    onSuccess();
  };

  const modal = (
    <div className="lock-backdrop" role="presentation" onClick={onClose}>
      <div
        className="lock-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lock-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lock-top">
          <span className="lock-icon" aria-hidden="true">
            <svg viewBox="0 -960 960 960">
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
            </svg>
          </span>
          <button
            type="button"
            className="lock-close"
            onClick={onClose}
            aria-label="Close access dialog"
          >
            <svg viewBox="0 -960 960 960" aria-hidden="true">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>

        <div className="lock-head">
          <span className="lock-kicker">
            {company ? `${company} · Confidential · NDA` : 'Confidential · NDA'}
          </span>
          <h2 className="lock-title" id="lock-title">
            {title}
          </h2>
          <p className="lock-text">
            Enter the access code from my resume to open this case study.
          </p>
        </div>

        <form className="lock-form" onSubmit={handleSubmit} noValidate>
          <label className="lock-label" htmlFor="lock-code">
            Access code
          </label>
          <input
            ref={codeInputRef}
            className="lock-input"
            id="lock-code"
            type="password"
            placeholder="Enter access code"
            autoComplete="off"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (error) setError('');
            }}
          />
          {error && (
            <p className="lock-error" role="alert">
              {error}
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
              `Case study access request: ${title}`
            )}&body=${encodeURIComponent(
              `Hi Olga,\n\nMy name is [Name] from [Company Name].\nI would like to have access to your case study: ${title}.\n\nThanks,\n[Name]`
            )}`}
          >
            Request access →
          </a>
        </p>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modal, document.body) : modal;
};
