import React from 'react';
import { Principle } from '../types';

interface PrinciplesProps {
  principles: Principle[];
}

export const Principles: React.FC<PrinciplesProps> = ({ principles }) => {
  return (
    <section className="principles" aria-labelledby="principles-heading">
      <h2 id="principles-heading" className="eyebrow">Operating Principles &amp; Leadership</h2>
      <div className="principles__grid">
        {principles.map((principle, index) => {
          const num = String(index + 1).padStart(2, '0');
          return (
            <article key={principle.id} className="principle">
              <div className="principle__meta">
                <span className="principle__num">{num}</span>
                <span className="principle__sep">/</span>
                <span className="principle__label">{principle.label}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
