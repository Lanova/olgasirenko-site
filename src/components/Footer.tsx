import React from 'react';

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
  const scrollToTop = () => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__copy">
            {copyright} · {location}
          </span>

          <nav className="footer__links" aria-label="Footer">
            {email && (
              <>
                <a
                  href={`mailto:${email}`}
                  className="footer__link"
                  aria-label={`Email Olga Sirenko at ${email}`}
                >
                  Email
                </a>
                <span className="footer__sep" aria-hidden="true">·</span>
              </>
            )}
            {linkedinUrl && (
              <>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  aria-label="Connect with Olga Sirenko on LinkedIn"
                >
                  LinkedIn
                </a>
                <span className="footer__sep" aria-hidden="true">·</span>
              </>
            )}
            <button
              type="button"
              className="footer__link footer__link--top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              Back to top ↑
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};
