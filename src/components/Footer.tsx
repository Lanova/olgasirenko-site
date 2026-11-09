import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  monogram?: string;
  copyright: string;
  location: string;
  email?: string;
  linkedinUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  copyright,
  location,
  email,
  linkedinUrl,
}) => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="monogram" aria-hidden="true">
            <Logo className="monogram__logo" />
          </span>
          <span className="footer__copy">
            {copyright} · {location}
          </span>
        </div>
        <div className="footer__links">
          {email && (
            <a
              href={`mailto:${email}`}
              className="footer__link"
              aria-label={`Email Olga Sirenko at ${email}`}
            >
              {email}
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="Connect with Olga Sirenko on LinkedIn"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
