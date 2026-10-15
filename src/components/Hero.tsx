import React from 'react';

interface HeroProps {
  tagline: string;
  headline: {
    lead: string;
    highlight: string;
  };
  lede: string;
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const Hero: React.FC<HeroProps> = ({
  tagline,
  headline,
  lede,
  portrait,
}) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p className="eyebrow">{tagline}</p>
        <h1>
          {headline.lead} <span>{headline.highlight}</span>
        </h1>
        <p className="hero__lede">{lede}</p>
      </div>
      <figure className="portrait">
        <img
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          fetchPriority="high"
          decoding="async"
        />
      </figure>
    </div>
  );
};
