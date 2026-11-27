import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Olga Sirenko',
  monogram: 'OS',
  tagline: 'Product Design · Enterprise AI Systems · Seattle–Portland (PNW)',
  heroHeadline: {
    lead: 'Product Designer & Design Leader ·',
    highlight: 'AI Systems Architect'
  },
  lede: 'Based in the Seattle–Portland area of the Pacific Northwest (PNW), I am a hands-on Product Designer and Design Leader with a computer programming degree, 12+ years of enterprise SaaS experience, and an international footprint across three countries (US, Austria, Ukraine). I help engineering-led businesses solve hard technical problems: scaling product design organizations, aligning distributed squads, and turning non-deterministic AI into reliable, automated workflows that drive adoption and revenue.',
  portrait: {
    src: './images/portrait-about.jpg',
    alt: 'Portrait of Olga Sirenko, Product Designer and AI Systems Architect in the Seattle and Portland Pacific Northwest area',
    width: 900,
    height: 900
  },
  principles: [
    {
      id: 'architectural-rigor',
      label: 'Architectural rigor',
      title: 'Executable Truth Over Consensus',
      description:
        'Prototyping complex enterprise product logic, API constraints, and state flows directly in code. Replacing subjective debate with empirical validation so product and engineering teams decide with evidence before committing sprints.'
    },
    {
      id: 'talent-multiplication',
      label: 'Talent multiplication',
      title: 'Elevating Product Design Craft & Teams',
      description:
        'Scaling DesignOps and team velocity through structured critique rituals, reusable Figma and code component governance, and technical mentorship. Coaching product designers to evaluate trade-offs and partner directly with engineering peers.'
    },
    {
      id: 'systems-governance',
      label: 'Systems governance',
      title: 'State Architecture Before Artifacts',
      description:
        'Structuring underlying data schemas, design token pipelines, and latency budgets before finalizing visual screens. Complex B2B SaaS and AI interfaces are treated as resilient state machines, not static canvases.'
    },
    {
      id: 'global-scale',
      label: 'Global scale',
      title: 'Distributed Team Cohesion',
      description:
        'Unifying product, design, and engineering talent across Pacific Northwest, US, and European hubs through asynchronous DesignOps. Bridging transatlantic communication nuances to build high-trust, low-drag squads.'
    }
  ],
  career: [
    {
      id: 'advisory',
      meta: '3+ Years · Advisory Practice',
      title: 'AI Product Design Advisory & Workflow Automation',
      body: 'Optimizing and automating business processes has been a long-standing passion of mine, well before modern AI caught up. Over the last three years, I’ve helped growing companies in the Pacific Northwest and globally pinpoint high-friction, repetitive routines and convert them into automated workflows. By applying targeted AI workflow optimization and 48-hour architecture audits, teams compress turnaround times, elevate client satisfaction, and drive steady new client acquisition.',
      link: {
        text: 'View advisory practice →',
        url: '#/advisory'
      }
    },
    {
      id: 'vividly',
      meta: '2025 — Present · Vividly',
      title: 'Product Design Leadership: AI Dashboard Synthesis & Human-in-the-Loop Architecture',
      body: 'Leading the product design team for the next-generation AI-agent-powered Vividly Hub enterprise SaaS platform, enabling operators to analyze complex retail and trade promotion data and generate pricing datasets through autonomous agent workflows. Established DesignOps rituals and automated internal design team operations with AI systems for automated critique feedback, engineering handoff specs, and accelerated prototyping and usability testing.'
    },
    {
      id: 'quantum-metric',
      meta: '2020 — 2025 · Quantum Metric',
      title: 'Enterprise Platform Architecture, AI Governance & Observability',
      body: 'Partnered directly with the CEO and CTO on high-complexity enterprise SaaS product design initiatives, using a computer programming background to bridge engineering constraints and product strategy. Architected foundational system setups, workspace administrative permissions, and platform-wide AI governance controls. Shipped Visible (real-time web analytics, session overlays, and heatmaps) alongside automated PII masking engines, and designed the inspection workflows and audit logs that made Experience AI anomaly detection transparent and trustworthy for enterprise clients.'
    },
    {
      id: 'equinix',
      meta: '2019 — 2020 · Equinix',
      title: 'Distributed Cloud, Bare-Metal & Edge Infrastructure Product Design',
      body: 'Led 0-to-1 product design for three foundational enterprise infrastructure products from the ground up: Edge Metal, Millennium DB, and Edge Precision Time, while architecting their consolidation into a unified Edge Platform portal. Directed end-to-end information architecture, user testing, and visual design systems, contributing directly to front-end code where needed. Worked hand-in-hand with engineering architects and executive stakeholders to resolve complex systems constraints and win investment.'
    },
    {
      id: 'vienna-press-bureau',
      meta: '2012 — 2016 · Vienna Press Bureau & Creative Direction',
      title: 'Creative Agency Founder & European Market Entry',
      body: 'Founded and scaled a Vienna-based creative agency, directing cross-disciplinary teams of designers, researchers, and journalists across multi-channel campaigns. Led creative direction and experiential design for major corporate launches, introducing emerging international products to European markets.'
    }
  ],
  contact: {
    title: {
      lead: "Let’s Build Intelligent Systems",
      italic: 'Together.'
    },
    subtitle: 'Based in the Seattle–Portland area (PNW) — working locally and globally.',
    email: 'hello@olgasirenko.com',
    emailSubject: 'Product Design Leadership Role',
    linkedinUrl: 'https://www.linkedin.com/in/olga-sirenko-840b08176/'
  },
  footer: {
    copyright: '© 2026 Olga Sirenko',
    location: 'Seattle–Portland'
  }
};
