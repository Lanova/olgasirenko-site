import React from 'react';

interface ContactProps {
  title: {
    lead: string;
    italic: string;
  };
  subtitle: string;
  email: string;
  emailSubject: string;
  linkedinUrl: string;
  /** Optional override for the Advisory CTA when already on the Advisory page. */
  onAdvisoryClick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  title,
  subtitle,
  email,
  emailSubject,
  linkedinUrl,
  onAdvisoryClick,
}) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section className="container contact" aria-labelledby="contact-title">
      <div className="card contact__card">
        <div className="contact__body">
          <div className="contact__head">
            <h2 id="contact-title">
              {title.lead} <em>{title.italic}</em>
            </h2>
            <p className="contact__sub">{subtitle}</p>
          </div>

          <div className="contact__grid">
            <div className="contact__tile">
              <h3 className="contact__tile-title">Product design leadership</h3>
              <p className="contact__tile-desc">
                Principal and Director roles in enterprise AI.
              </p>
              <div className="contact__tile-action">
                <a
                  className="btn btn--primary contact__cta"
                  href={mailtoUrl}
                  aria-label={`Email Olga Sirenko about a role at ${email}`}
                >
                  <span>Email about a role</span>
                  <span className="contact__cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="contact__tile">
              <h3 className="contact__tile-title">AI workflow advisory</h3>
              <p className="contact__tile-desc">
                Selective engagements with product and AI teams.
              </p>
              <div className="contact__tile-action">
                {onAdvisoryClick ? (
                  <button
                    type="button"
                    className="btn btn--primary contact__cta"
                    onClick={onAdvisoryClick}
                    aria-label="See how AI workflow advisory works"
                  >
                    <span>See how it works</span>
                    <span className="contact__cta-arrow" aria-hidden="true">→</span>
                  </button>
                ) : (
                  <a
                    className="btn btn--primary contact__cta"
                    href="#/advisory"
                    aria-label="See how AI workflow advisory works"
                  >
                    <span>See how it works</span>
                    <span className="contact__cta-arrow" aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <p className="contact__alt">
            Or find me on{' '}
            <a
              className="contact__alt-link"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find Olga Sirenko on LinkedIn"
            >
              LinkedIn <span className="contact__alt-arrow" aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
