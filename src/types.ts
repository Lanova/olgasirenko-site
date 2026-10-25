export interface Principle {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface CareerEntry {
  id: string;
  meta: string;
  title: string;
  body: string;
}

export interface PortfolioData {
  name: string;
  monogram: string;
  tagline: string;
  heroHeadline: {
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
  principles: Principle[];
  career: CareerEntry[];
  contact: {
    title: {
      lead: string;
      italic: string;
    };
    subtitle: string;
    email: string;
    emailSubject: string;
    linkedinUrl: string;
  };
  footer: {
    copyright: string;
    location: string;
  };
}

/* ---------- Writing ---------- */

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  read: string;
  dek: string;
  tags: string[];
  /** Article title split for the page heading: t1 (ink), t2 (violet, own line), t3 (italic cyan subtitle). */
  t1: string;
  t2?: string;
  t3?: string;
}

/** A run of text inside a paragraph: plain, bold (`b`) or a link (`url`). */
export interface Seg {
  t: string;
  url?: string;
  b?: boolean;
}

export interface ListItem {
  text: string;
  label?: string;
  segs?: Seg[];
  /** Indented sub-point, shown with a dash instead of a number. */
  sub?: boolean;
}

export type FigureId = 'hero' | 'flow' | 'paradigms' | 'canvas' | 'patterns' | 'quadrant';

export type EssayBlock =
  | { type: 'lead' | 'p'; text: string; segs?: Seg[] }
  | { type: 'h'; text: string; top?: string }
  | { type: 'h3'; text: string }
  | { type: 'stmt'; text: string; label?: string; segs?: Seg[] }
  | { type: 'list'; items: ListItem[] }
  | { type: 'table'; head: string[]; rows: string[][]; links?: string[] }
  | { type: 'img'; src: string; cap: string }
  | { type: 'fig'; fig: FigureId }
  | { type: 'close'; text: string }
  | { type: 'src'; label: string; items: { text: string; url: string }[] };

export interface Essay {
  kicker: string;
  heading: string;
  blocks: EssayBlock[];
}
