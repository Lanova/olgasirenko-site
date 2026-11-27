export interface WorkStrength {
  title: string;
  description: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  locked?: boolean;
  image?: {
    src: string;
    alt: string;
    transparentBg?: boolean;
  };
}

export interface WorkCompanyGroup {
  id: string;
  role: string;
  company: string;
  summary: string;
  cases: CaseStudyItem[];
}

export const WORK_ACCESS_CODE = 'ACCESS2026';

export const WORK_HERO = {
  lead: 'Principal Product Designer &',
  italic: 'Systems Architect',
  subtitle:
    '12+ years leading product design for enterprise platforms, AI security, and the design teams that build them.',
};

export const WORK_STRENGTHS: WorkStrength[] = [
  {
    title: 'Leads design teams',
    description:
      'Directs product designers and builds DesignOps: critique rituals, component libraries, engineering handoff.',
  },
  {
    title: 'Builds from scratch',
    description:
      'Prototypes complex logic and state flows directly in code. Equinix prototypes went from brief to executive funding in 3 weeks.',
  },
  {
    title: 'Data-heavy & AI systems',
    description:
      'Designs data-dense analytics and AI security, including Auto-PII privacy controls at Quantum Metric.',
  },
];

export const WORK_GROUPS: WorkCompanyGroup[] = [
  {
    id: 'vividly',
    role: 'Lead Product Designer',
    company: 'Vividly',
    summary:
      'Built and led the product design team for an enterprise trade promotion platform, directing its core product architecture. Moved the team from static Figma mocks to Claude Design and AI prototyping, backed by custom LLM skills and ESLint checks.',
    cases: [
      {
        id: 'vividly-hub-ai-agents',
        title: 'Vividly Hub AI Agent',
        summary:
          'Replaced a static reporting overview with a 6-phase modular hub (27 tiles, 5 personal tabs) and an embedded AI agent that computes answers from a shared metric catalog and previews changes before applying them.',
        highlights: ['Human-in-the-Loop AI', '6-Phase Rollout'],
        locked: true,
        image: {
          src: './images/case/vividly-hub-ai-agent-hq.webp',
          alt: 'Vividly Hub AI Agent workspace: personalized Hello, Dana prompt bar, My overview AI summary with high-priority exceptions (Walmart trade spend over plan, Kroger deductions, Target BOGO), KPI metric cards, and the Vividly Assistant side panel recommending a $340K dispute with plan-vs-actual chart and one-click confirmation.',
        },
      },
      {
        id: 'promotion-lifecycle-consolidation',
        title: 'Promotion Lifecycle Consolidation',
        summary:
          'Reframed promotion approval from seven separate status pages into one unified workspace with derived state logic—cutting approval time from ~15 seconds to 1–3 seconds and retiring six legacy surfaces.',
        highlights: ['7 → 1 Pages Retired', '5–15× Faster Actions'],
        locked: true,
        image: {
          src: './images/case/vividly-promotions-hq.webp',
          alt: 'Vividly Promotions unified calendar workspace: KPI strip showing 24 promotions in view, $3.00M committed spend, 2 running today, and 19 awaiting approval, above a customer-grouped November timeline with Need my approval filter and color-coded promotion status bars.',
        },
      },
      {
        id: 'bulk-data-ingestion-diff-engine',
        title: 'Bulk Data Ingestion & Editing',
        summary:
          'Turned a pass/fail spreadsheet uploader into an inline editing grid supporting up to 20,000 rows, eliminating silent data loss and defining per-cell API validation rules for REST and MCP endpoints.',
        highlights: ['20,000-Row Scale', 'API & MCP Semantics'],
        locked: true,
        image: {
          src: './images/case/vividly-bulk-editing-hq.webp',
          alt: 'Edit promotions in bulk workspace: inline spreadsheet grid for 2,000 selected rows showing a 7 values to fix validation banner, AI-suggested cells, and an open Customer Name popover resolving KRG-MA with Apply to 2 other rows option.',
        },
      },
    ],
  },
  {
    id: 'quantum-metric',
    role: 'Staff Product Designer',
    company: 'Quantum Metric',
    summary:
      'Partnered directly with the CEO and CTO on high-complexity platform initiatives, leveraging a computer programming foundation to align technical constraints with enterprise product strategy and workspace governance.',
    cases: [
      {
        id: 'unified-genai-digital-analyst',
        title: 'Unified Gen AI Digital Analyst & Agentic Ecosystem',
        summary:
          'Architected a cross-platform generative AI assistant in partnership with the CEO, CTO, VP of Product, and four engineering teams to eliminate fragmented analytics across dashboards, session replays, and behavioral maps. Designed adaptive workflows that balance one-click plain-language summaries for executives with transparent function-call execution logs and custom agent builders for technical analysts.',
        highlights: [
          '80% Faster Root-Cause Analysis (<7 min vs. 37 min)',
          '98% User Testing Success',
          '+40% AI Feature Opt-In',
        ],
        locked: true,
        image: {
          src: './images/case/qm-felix-ai-hq.webp',
          alt: 'Felix AI Gen AI Digital Analyst alongside an executive insight card flagging a revenue drop anomaly (-34% vs yesterday), with key metrics ($324,248 revenue, 3,450 impacted sessions), trend chart, and plain-language root-cause summary.',
        },
      },
      {
        id: 'admin-space-auto-pii',
        title: 'Admin Space: Automated PII Governance & Multi-Platform Privacy Controls',
        summary:
          'Redesigned enterprise privacy, security, and SDK data-capture governance across Web, iOS, and Android to eliminate a 30-day customer onboarding bottleneck and 90-day Customer Success Engineer training cycle. Introduced vertical-specific AI auto-configuration, URL/CSS blocklists, Data Loss Prevention (DLP) remediation, and audit changelogs to enforce data minimization at enterprise scale.',
        highlights: [
          '>91% Faster Setup (3 hrs → 15 min)',
          '$550K+ in CSE Time Savings',
          'Multi-Tenant Compliance',
        ],
        locked: true,
        image: {
          src: './images/case/qm-ai-privacy-hq.webp',
          alt: 'Admin Space AI Privacy & Capture Governance: setup steps for automated PII detection, CSS and URL blocklist rules, and multi-platform SDK sync, with a 99.8% data-guarded protection status and governance rule coverage charts.',
        },
      },
      {
        id: 'interactions-and-visible',
        title: 'Interactions & Visible: In-Context Behavioral Analytics & Progressive Disclosure',
        summary:
          'Led the end-to-end redesign of Quantum Metric’s visual analytics suite—unifying real-time browser overlays (Visible) with deep heatmap, scroll-depth, and A/B variant comparison workflows while mentoring a Junior Product Designer. Replaced high-friction setup and visual clutter with one-click session capture, data confidence indicators, and a three-tier progressive disclosure system powered by AI-suggested zones.',
        highlights: [
          '3-Tier Progressive Disclosure',
          '1-Click Session Capture & A/B Compare',
          'AI-Suggested Zones',
        ],
        locked: false,
        image: {
          src: './images/case/qm-heatmaps-studio-hq.webp',
          alt: 'Overlays & Heatmaps panel over a product page showing click heatmap density, scroll-depth markers at 71% and 54%, navigation and buy-box click zones, active metrics, and an impression confidence histogram.',
        },
      },
    ],
  },
  {
    id: 'equinix',
    role: 'Product Design Lead',
    company: 'Equinix',
    summary:
      'Led 0-to-1 product design across distributed cloud and bare-metal infrastructure, working hand-in-hand with principal systems architects, directing user testing and design systems, and contributing directly to frontend code.',
    cases: [
      {
        id: 'equinix-unified-edge-portal',
        title: 'Unified Edge Services Portal',
        summary:
          'Brought Equinix’s separate cloud and infrastructure products together into one unified developer portal. Designed the shared navigation, account permissions, and core UI patterns so enterprise teams could manage all their edge services in a single place instead of jumping between disconnected tools.',
        highlights: ['Platform Unification', 'Information Architecture', '0-to-1 Portal'],
        locked: false,
        image: {
          src: './images/case/equinix-edge-portal.webp',
          alt: 'Unified Edge Services Portal on desktop, laptop, and tablet: dashboard with projects, current billing, used storage, nodes in use, subscribed services, and an Edge Services map.',
          transparentBg: true,
        },
      },
      {
        id: 'equinix-edge-metal',
        title: 'Edge Metal Bare-Metal Provisioning',
        summary:
          'Designed the 0-to-1 self-serve experience for deploying automated physical servers across global data centers. Turned complex hardware setup, networking, and API workflows into a clear, guided interface that developers could launch and configure in minutes.',
        highlights: ['0-to-1 Product', 'Developer Experience', 'Bare-Metal Cloud'],
        locked: false,
        image: {
          src: './images/case/equinix-edge-metal-combo3.webp',
          alt: 'Three Edge Metal screens in sequence: the server setup wizard, a server detail page with network interfaces, and a New Connection flow linking two subnets at 10Mb.',
          transparentBg: true,
        },
      },
      {
        id: 'equinix-millenniumdb',
        title: 'MillenniumDB Distributed Edge Database',
        summary:
          'Led end-to-end product design for a globally distributed database built for high-speed edge applications. Simplified cluster setup, scaling controls, and real-time performance monitoring so engineering teams could manage global data without guesswork.',
        highlights: ['Distributed Systems', 'Data Observability', 'End-to-End UX'],
        locked: false,
        image: {
          src: './images/case/equinix-millenniumdb.webp',
          alt: 'MillenniumDB for PostgreSQL dashboard: a universes table with locations, nodes, replication factor and status, above a universe map of global edge locations.',
        },
      },
      {
        id: 'equinix-precision-time',
        title: 'Edge Precision Time-as-a-Service',
        summary:
          'Built the interface from scratch for an enterprise network timing service used by financial and trading platforms where microsecond accuracy is critical. Partnered with systems architects to translate dense network protocols into straightforward setup and health-monitoring workflows.',
        highlights: ['0-to-1 Architecture', 'Enterprise Telemetry', 'Systems Design'],
        locked: false,
        image: {
          src: './images/case/equinix-precision-time.webp',
          alt: 'Precision Time Service screens: a dashboard of nanosecond time offsets by device, service setup cards for Linux, Windows, and hardware clients, and a map of connected sites.',
          transparentBg: true,
        },
      },
    ],
  },
];

export interface CaseStudyEntry {
  item: CaseStudyItem;
  group: WorkCompanyGroup;
  index: number;
}

export const ALL_CASES: CaseStudyEntry[] = WORK_GROUPS.flatMap((group) =>
  group.cases.map((item) => ({ item, group }))
).map((entry, index) => ({ ...entry, index }));

export function getCaseBySlug(slug: string): CaseStudyEntry | undefined {
  return ALL_CASES.find((entry) => entry.item.id === slug);
}

export function getCaseByRoute(
  company: string | undefined,
  slug: string
): CaseStudyEntry | undefined {
  if (company) {
    const exact = ALL_CASES.find(
      (entry) => entry.group.id === company && entry.item.id === slug
    );
    if (exact) return exact;
  }
  return getCaseBySlug(slug);
}

