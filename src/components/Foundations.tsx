import React from 'react';

export const Foundations: React.FC = () => {
  return (
    <section className="foundations" id="education" aria-label="Education & Academic Research">
      <h2 className="eyebrow">Foundations &amp; Academic Research</h2>

      <div className="timeline-list">
        <article className="timeline-item">
          <div className="timeline-item__meta">
            <span>Systems &amp; Code</span>
            <span className="timeline-item__meta-sub">Computer Programming</span>
          </div>
          <div className="timeline-item__content">
            <h3>A.S. in Computer Programming</h3>
            <p className="timeline-item__body">
              Trained in data structures, algorithms, and object-oriented programming. Hands-on experience building robotics and programming IoT devices translates directly to complex enterprise platforms: mapping out state transitions, error boundaries, and payload limits before approaching the canvas.
            </p>
            <p className="timeline-item__subtext">
              <strong>Design Impact:</strong> Eliminates friction with engineering through shared systems literacy—speaking the same technical language to eliminate implementation rework, respect architectural boundaries, and ship cleanly.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-item__meta">
            <span>Communication &amp; Media</span>
            <span className="timeline-item__meta-sub">Research &amp; Systems</span>
          </div>
          <div className="timeline-item__content">
            <h3>M.A. &amp; B.A. in Communication Systems</h3>
            <p className="timeline-item__body">
              Master’s background in journalism and communication frameworks, sharpened by founding and directing an international press bureau. Specializes in information architecture under complexity: organizing chaotic, multi-source inputs into disciplined taxonomies and intuitive structural hierarchies.
            </p>
            <p className="timeline-item__subtext">
              <strong>Design Impact:</strong> Translates multi-tenant business logic and high-density analytics into interfaces that minimize cognitive load and align cross-functional teams.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
