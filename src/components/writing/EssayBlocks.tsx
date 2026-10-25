import React from 'react';
import type { EssayBlock, Seg } from '../../types';
import { figures } from './Figures';

const RichText: React.FC<{ text: string; segs?: Seg[] }> = ({ text, segs }) => (
  <>
    {(segs ?? [{ t: text }]).map((g, i) =>
      g.url ? (
        <a key={i} className="essay-link" href={g.url} target="_blank" rel="noopener noreferrer">
          {g.t}
        </a>
      ) : g.b ? (
        <strong key={i}>{g.t}</strong>
      ) : (
        <React.Fragment key={i}>{g.t}</React.Fragment>
      )
    )}
  </>
);

const Block: React.FC<{ block: EssayBlock }> = ({ block: b }) => {
  switch (b.type) {
    case 'lead':
      return (
        <p className="essay-lead">
          <RichText text={b.text} segs={b.segs} />
        </p>
      );
    case 'p':
      return (
        <p className="essay-p">
          <RichText text={b.text} segs={b.segs} />
        </p>
      );
    case 'h':
      return (
        <h2 className="essay-h2" style={b.top ? { marginTop: b.top } : undefined}>
          {b.text}
        </h2>
      );
    case 'h3':
      return <h3 className="essay-h3">{b.text}</h3>;
    case 'stmt':
      return (
        <div className="essay-stmt">
          <span className="essay-label essay-label--cyan">{b.label ?? 'The shift'}</span>
          <p>
            <RichText text={b.text} segs={b.segs} />
          </p>
        </div>
      );
    case 'list': {
      let n = 0;
      return (
        <ol className="essay-list">
          {b.items.map((it, i) => (
            <li key={i} className={it.sub ? 'is-sub' : undefined}>
              <span className="essay-list__no">{it.sub ? '–' : String(++n).padStart(2, '0')}</span>
              <span className="essay-list__text">
                {it.label && <strong>{it.label} </strong>}
                <RichText text={it.text} segs={it.segs} />
              </span>
            </li>
          ))}
        </ol>
      );
    }
    case 'table': {
      const cols = `minmax(130px,1.1fr) repeat(${b.head.length - 1},minmax(110px,1fr))`;
      return (
        <div className="essay-table">
          <div className="essay-table__inner" style={{ minWidth: b.head.length * 136 }}>
            <div className="essay-table__head" style={{ gridTemplateColumns: cols }}>
              {b.head.map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
            {b.rows.map((r, ri) => {
              const url = b.links?.[ri];
              return (
                <div key={ri} className="essay-table__row" style={{ gridTemplateColumns: cols }}>
                  <span className="essay-table__first">
                    {url ? (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {r[0]}
                      </a>
                    ) : (
                      r[0]
                    )}
                  </span>
                  {r.slice(1).map((c, ci) => (
                    <span key={ci}>{c}</span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    case 'img':
      return (
        <figure className="essay-img">
          <img src={`./${b.src}`} alt={b.cap} loading="lazy" />
        </figure>
      );
    case 'fig': {
      const Figure = figures[b.fig];
      return <Figure />;
    }
    case 'close':
      return (
        <div className="essay-close">
          <span className="essay-label">The one idea to remember</span>
          <p>{b.text}</p>
        </div>
      );
    case 'src':
      return (
        <div className="essay-src">
          <span className="essay-label essay-label--cyan">{b.label}</span>
          <ul>
            {b.items.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  <span>{s.text}</span>
                  <span className="essay-src__arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
};

export const EssayBlocks: React.FC<{ blocks: EssayBlock[] }> = ({ blocks }) => (
  <div className="essay-body">
    {blocks.map((b, i) => (
      <Block key={i} block={b} />
    ))}
  </div>
);
