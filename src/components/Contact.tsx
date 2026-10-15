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
}

export const Contact: React.FC<ContactProps> = ({
  title,
  subtitle,
  email,
  emailSubject,
  linkedinUrl,
}) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section className="container contact" aria-labelledby="contact-title">
      <div className="card">
        <div className="contact__body">
          <span className="contact__kicker">Contact</span>
          <div className="contact__head">
            <h2 id="contact-title">
              {title.lead} <em>{title.italic}</em>
            </h2>
            <p className="contact__sub">{subtitle}</p>
          </div>
          <div className="contact__actions">
            <a className="btn btn--primary" href={mailtoUrl}>
              Start a Conversation
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </a>
            <p className="contact__alt">
              Prefer a direct intro?{' '}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
