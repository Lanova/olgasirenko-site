import React, { useEffect, useRef } from 'react';
import type { ArticleMeta, Essay } from '../types';
import { articles } from '../data/essays';
import { hrefFor } from '../hooks/useRoute';
import { portfolioData } from '../data/portfolioData';
import { EssayBlocks } from '../components/writing/EssayBlocks';
import { NorthEastIcon } from '../components/writing/icons';

interface ArticlePageProps {
  article: ArticleMeta;
  essay: Essay;
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Set when "Next article" is clicked, so the incoming article slides in.
let slideInNext = false;

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, essay }) => {
  const articleRef = useRef<HTMLElement>(null);
  const exitAnim = useRef<Animation | null>(null);

  const index = articles.findIndex(a => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];
  const nextHref = hrefFor({ page: 'article', slug: next.slug });

  useEffect(() => {
    document.title = `${article.title} · Olga Sirenko`;
    const el = articleRef.current;
    exitAnim.current?.cancel();
    exitAnim.current = null;
    if (slideInNext && el && el.animate && !reducedMotion()) {
      el.animate([{ opacity: 0, transform: 'translateX(64px)' }, { opacity: 1, transform: 'translateX(0)' }], {
        duration: 650,
        easing: 'cubic-bezier(0.16,1,0.3,1)',
      });
    }
    slideInNext = false;
  }, [article.slug, article.title]);

  const onNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = articleRef.current;
    if (!el || !el.animate || reducedMotion()) return;
    e.preventDefault();
    const out = el.animate([{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: 'translateX(-48px)' }], {
      duration: 260,
      easing: 'cubic-bezier(0.4,0,1,1)',
      fill: 'forwards',
    });
    exitAnim.current = out;
    out.onfinish = () => {
      slideInNext = true;
      window.location.hash = nextHref;
    };
  };

  return (
    <article ref={articleRef} className="container essay" aria-labelledby="essay-title">
      <header className="essay-header">
        <a className="essay-back" href={hrefFor({ page: 'writing' })} data-noprint>
          ← All writing
        </a>
        <div className="essay-header__main">
          <span className="essay-meta">
            {article.date} · {article.read} read
          </span>
          <h1 id="essay-title" className="essay-title">
            <span className="essay-title__main">
              <span>{article.t1}</span>
              {article.t2 && (
                <>
                  <br />
                  <span className="essay-title__accent">{article.t2}</span>
                </>
              )}
            </span>
            {article.t3 && <span className="essay-title__sub">{article.t3}</span>}
          </h1>
          <p className="essay-dek">{article.dek}</p>
          <div className="essay-actions" data-noprint>
            <button type="button" className="essay-action" onClick={() => window.print()}>
              Download PDF ↓
            </button>
          </div>
        </div>
      </header>

      <EssayBlocks blocks={essay.blocks} />

      <div className="essay-cta" data-noprint>
        <a className="btn btn--secondary" href={portfolioData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
          Discuss on LinkedIn
          <NorthEastIcon />
        </a>
      </div>

      <a className="essay-next" href={nextHref} onClick={onNext} data-noprint>
        <span className="essay-label essay-label--cyan">Next article →</span>
        <span className="essay-next__title">{next.title}</span>
      </a>
    </article>
  );
};
