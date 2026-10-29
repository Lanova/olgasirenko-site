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
            <a className="btn btn--primary" href={mailtoUrl} aria-label={`Email ${email}`}>
              <svg className="btn__icon-mail" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <span>Email: {email}</span>
            </a>

            <button
              type="button"
              className="btn btn--secondary btn--advisory"
              title="Advisory details coming soon"
            >
              <span>Explore Advisory</span>
              <svg className="btn__icon-arrow" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>

            <a
              className="btn btn--secondary"
              href={linkedinUrl}
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
  );
};
