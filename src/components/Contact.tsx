import React from 'react';

export interface ContactTile {
  title: string;
  description: string;
  ctaLabel: string;
  ariaLabel?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ContactProps {
  title: {
    lead: string;
    italic: string;
  };
  subtitle: string;
  email: string;
  emailSubject: string;
  linkedinUrl: string;
  /** Optional custom intent tiles (defaults to Product design leadership & AI workflow advisory). */
  tiles?: ContactTile[];
}

export const Contact: React.FC<ContactProps> = ({
  title,
  subtitle,
  email,
  emailSubject,
  linkedinUrl,
  tiles,
}) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}`;

  const resolvedTiles: ContactTile[] = tiles ?? [
    {
      title: 'Product design leadership',
      description: 'Principal and Director roles in enterprise AI.',
      ctaLabel: 'Email about a role',
      ariaLabel: `Email Olga Sirenko about a role at ${email}`,
      href: mailtoUrl,
    },
    {
      title: 'AI workflow advisory',
      description: 'Selective engagements with product and AI teams.',
      ctaLabel: 'See how it works',
      ariaLabel: 'See how AI workflow advisory works',
      href: '#/advisory',
    },
  ];

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
            {resolvedTiles.map((tile) => (
              <div key={tile.title} className="contact__tile">
                <h3 className="contact__tile-title">{tile.title}</h3>
                <p className="contact__tile-desc">{tile.description}</p>
                <div className="contact__tile-action">
                  {tile.onClick ? (
                    <button
                      type="button"
                      className="btn btn--primary contact__cta"
                      onClick={tile.onClick}
                      aria-label={tile.ariaLabel ?? tile.ctaLabel}
                    >
                      <span>{tile.ctaLabel}</span>
                      <span className="contact__cta-arrow" aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <a
                      className="btn btn--primary contact__cta"
                      href={tile.href}
                      aria-label={tile.ariaLabel ?? tile.ctaLabel}
                    >
                      <span>{tile.ctaLabel}</span>
                      <span className="contact__cta-arrow" aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
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
