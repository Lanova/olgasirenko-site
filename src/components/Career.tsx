import React from 'react';
import { CareerEntry } from '../types';

interface CareerProps {
  entries: CareerEntry[];
}

export const Career: React.FC<CareerProps> = ({ entries }) => {
  return (
    <div className="career" aria-label="Career history">
      {entries.map((entry) => (
        <article key={entry.id} className="entry">
          <p className="entry__meta">{entry.meta}</p>
          <h3>{entry.title}</h3>
          <p className="entry__body">{entry.body}</p>
        </article>
      ))}
    </div>
  );
};
