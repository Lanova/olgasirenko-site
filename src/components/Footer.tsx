import React from 'react';

interface FooterProps {
  monogram: string;
  copyright: string;
  location: string;
}

export const Footer: React.FC<FooterProps> = ({
  monogram,
  copyright,
  location,
}) => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="monogram monogram--square" aria-hidden="true">
            {monogram}
          </span>
          <span className="footer__copy">
            {copyright} · {location}
          </span>
        </div>
      </div>
    </footer>
  );
};
