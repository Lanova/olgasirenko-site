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
