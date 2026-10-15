import React from 'react';
import { Principle } from '../types';

interface PrinciplesProps {
  principles: Principle[];
}

export const Principles: React.FC<PrinciplesProps> = ({ principles }) => {
  return (
    <div className="principles">
      <h2 className="eyebrow">Operating Principles &amp; Leadership</h2>
      <div className="principles__grid">
        {principles.map((principle) => (
          <article key={principle.id} className="card principle">
            <div className="principle__body">
              <span className="principle__label">{principle.label}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
