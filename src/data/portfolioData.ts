import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Olga Sirenko',
  monogram: 'OS',
  tagline: 'Enterprise Systems · AI Workflow Automation · Global Team Operations',
  heroHeadline: {
    lead: 'Product Design Leader &',
    highlight: 'AI Systems Architect'
  },
  lede: 'I am a Product Design Leader with a computer programming degree, 10+ years of enterprise SaaS experience, and an international footprint spanning three countries (US, Austria, Ukraine). I help businesses solve hard technical problems: building scalable design organizations, aligning distributed squads, and turning non-deterministic AI into reliable, automated workflows that drive adoption and revenue.',
  portrait: {
    src: './images/portrait-about.jpg',
    alt: 'Portrait of Olga Sirenko',
    width: 900,
    height: 900
  },
  principles: [
    {
      id: 'architectural-rigor',
      label: 'Architectural rigor',
      title: 'Executable Truth Over Consensus',
      description:
        'Prototyping complex logic, API constraints, and state flows directly in code. Replacing subjective debate with empirical validation so teams decide with evidence before engineering commits sprints.'
    },
    {
      id: 'talent-multiplication',
      label: 'Talent multiplication',
      title: 'Elevating Craft & Design Teams',
      description:
        'Scaling team velocity through structured critique rituals, reusable component governance, and technical mentorship. Coaching designers to evaluate trade-offs and communicate directly with engineering peers.'
    },
    {
      id: 'systems-governance',
      label: 'Systems governance',
      title: 'State Architecture Before Artifacts',
      description:
        'Structuring underlying data schemas, token pipelines, and latency budgets before finalizing visual screens. Interfaces are treated as resilient state machines, not static canvases.'
    },
    {
      id: 'global-scale',
      label: 'Global scale',
      title: 'Distributed Team Cohesion',
      description:
        'Unifying product, design, and engineering talent across US and European hubs through asynchronous design ops. Bridging transatlantic communication nuances to build high-trust, low-drag squads.'
    }
  ],
  career: [
    {
      id: 'vividly-advisory',
      meta: '2025 — Present · Vividly & Advisory',
      title: 'AI Dashboard Synthesis & Human-in-the-Loop Architecture',
      body: 'Leading product design for next-generation AI dashboard overviews, translating complex automated models into real-time executive decision flows. Operating a 5-year advisory practice helping growing SaaS platforms implement human-in-the-loop workflows, modern design operations, and scalable UX architectures.'
    },
    {
      id: 'quantum-metric',
      meta: '2020 — 2025 · Quantum Metric',
      title: 'Enterprise Platform Architecture, AI Governance & Observability',
      body: 'Partnered directly with the CEO and CTO on high-complexity technical initiatives, using a computer programming background to bridge engineering constraints and product strategy. Architected foundational system setups, workspace administrative permissions, and platform-wide AI governance controls. Shipped Visible (real-time web analytics, session overlays, and heatmaps) alongside automated PII masking engines, and designed the inspection workflows and audit logs that made Experience AI anomaly detection transparent and trustworthy for enterprise clients.'
    },
    {
      id: 'equinix',
      meta: '2019 — 2020 · Equinix',
      title: 'Distributed Cloud, Bare-Metal & Edge Infrastructure',
      body: 'Led 0-to-1 product design for three foundational infrastructure products from the ground up: Edge Metal, Millennium DB, and Edge Precision Time, while architecting their consolidation into a single enterprise Edge Platform portal. Directed end-to-end information architecture, user testing, and visual design systems, contributing directly to frontend code where needed. Worked hand-in-hand with engineering architects and key business stakeholders to resolve complex systems constraints and win executive investment.'
    },
    {
      id: 'vienna-press-bureau',
      meta: '2012 — 2016 · Vienna Press Bureau & Creative Direction',
      title: 'Agency Leadership & European Market Entry',
      body: 'Founded and scaled a Vienna-based creative agency, directing cross-disciplinary teams of designers, researchers, and journalists across multi-channel campaigns. Led creative direction and experiential design for major corporate launches, introducing emerging international products to European markets.'
    }
  ],
  contact: {
    title: {
      lead: "Let’s Build Intelligent Systems",
      italic: 'Together.'
    },
    subtitle: 'Available for product design leadership and selective AI workflow advisory.',
    email: 'hello@olgasirenko.com',
    emailSubject: 'Strategic Collaboration',
    linkedinUrl: 'https://www.linkedin.com/in/olga-sirenko-840b08176/'
  },
  footer: {
    copyright: '© 2026 Olga Sirenko',
    location: 'Seattle – Portland area'
  }
};
