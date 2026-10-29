import React from 'react';
import { articles } from '../data/essays';
import { hrefFor } from '../hooks/useRoute';
import { ArrowForwardIcon } from '../components/writing/icons';

export const WritingPage: React.FC = () => (
  <>
    <section className="writing-intro" aria-labelledby="writing-title">
      <div className="container writing-intro__inner">
        <span className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          Writing
        </span>
        <h1 id="writing-title">
          Notes on...
          <br />
          <em>AI systems</em> and <em>business impact</em>
        </h1>
        <p className="writing-intro__lede">
          Exploring how thoughtful interface design simplifies complex workflows, reduces operational overhead, and drives user adoption.
        </p>
      </div>
    </section>

    <section aria-label="Articles">
      <div className="container article-list">
        {articles.map(a => (
          <a key={a.slug} className="article-row" href={hrefFor({ page: 'article', slug: a.slug })}>
            <div className="article-row__date">
              <span>{a.date}</span>
            </div>
            <div className="article-row__main">
              <h2>{a.title}</h2>
              <p>{a.dek}</p>
            </div>
            <span className="article-row__read">
              {a.read}
              <ArrowForwardIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  </>
);
