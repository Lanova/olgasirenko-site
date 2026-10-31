import React from 'react';
import { CareerEntry } from '../types';

interface CareerProps {
  entries: CareerEntry[];
}

export const Career: React.FC<CareerProps> = ({ entries }) => {
  return (
    <section className="career" id="experiences" aria-label="Career history">
      <h2 className="eyebrow">Experience &amp; Leadership</h2>
      <div className="timeline-list">
        {entries.map((entry) => (
          <article key={entry.id} id={entry.id} className="timeline-item">
            <div className="timeline-item__meta">
              <span>{entry.meta}</span>
            </div>
            <div className="timeline-item__content">
              <h3>{entry.title}</h3>
              <p className="timeline-item__body">{entry.body}</p>
              {entry.link && (
                <a href={entry.link.url} className="timeline-item__link">
                  {entry.link.text}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
