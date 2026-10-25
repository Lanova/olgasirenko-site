// Essays shown on the Writing page. Generated from the Claude Design export
// (writings/index.dc.html): edit the text here directly.
import type { ArticleMeta, Essay } from '../types';

export const articles: ArticleMeta[] = [
  {
    slug: 'death-of-hierarchical-navigation',
    title: 'The Death of Hierarchical Navigation',
    date: 'Oct 2026',
    read: '13 min',
    dek: 'AI lets people state the outcome they want and get only the controls that job needs. The sitemap moves from the front door to the fallback.',
    tags: ['NAVIGATION', 'AGENTIC UX'],
    t1: 'The death of',
    t2: 'hierarchical navigation',
    t3: 'and what replaces it.',
  },
  {
    slug: 'death-of-passive-dashboard',
    title: 'The death of the passive dashboard',
    date: 'Sep 2026',
    read: '10 min',
    dek: "Computers are good at spotting patterns. People are good at trade-offs. Most dashboards hand each of them the other's job.",
    tags: ['ANALYTICS', 'AI & AUTOMATION'],
    t1: 'The death of',
    t2: 'the passive dashboard',
  },
  {
    slug: 'dual-audience-ui',
    title: 'Dual-audience UI',
    date: 'Aug 2026',
    read: '9 min',
    dek: 'Designing for machine users first. The interface an agent can use and the interface a screen reader can use turn out to be the same interface, and most of the web gets both wrong.',
    tags: ['ACCESSIBILITY', 'AGENTS'],
    t1: 'Dual-audience',
    t2: 'UI',
  },
  {
    slug: 'death-of-double-diamond',
    title: 'The death of the Double Diamond',
    date: 'Jul 2026',
    read: '9 min',
    dek: "The model isn't wrong. The calendar teams built around it is. When building is cheap, working code is the fastest way to learn, as long as you still check that the problem is worth solving.",
    tags: ['DESIGN LEADERSHIP'],
    t1: 'The death of',
    t2: 'the Double Diamond',
  },
  {
    slug: 'chatbots-fail-enterprise',
    title: 'Why chatbots fail enterprise software',
    date: 'Jun 2026',
    read: '8 min',
    dek: 'A chat drawer in the corner checks the AI box on a roadmap. For dense, high-stakes work it makes the product slower and harder to trust. The fix is to put the intelligence inside the screens where the work already happens.',
    tags: ['AI & AUTOMATION', 'ENTERPRISE SAAS'],
    t1: 'Why chatbots fail',
    t2: 'enterprise software',
  },
  {
    slug: 'non-deterministic-state-design',
    title: 'Designing for non-deterministic states',
    date: 'May 2026',
    read: '9 min',
    dek: "Design systems promised predictability. AI features need a different promise: that the product stays dependable even when the engine underneath isn't.",
    tags: ['STATE DESIGN', 'AI SYSTEMS'],
    t1: 'Designing for',
    t2: 'non-deterministic states',
  },
];

export const essays: Record<string, Essay> = {
  'death-of-hierarchical-navigation': {
    kicker: 'Essay 01',
    heading: 'The Death of Hierarchical Navigation',
    blocks: [
      {
        type: 'fig',
        fig: 'hero',
      },
      {
        type: 'h',
        text: 'The sidebar nobody designed',
      },
      {
        type: 'lead',
        text: 'The permanent, multi-level sitemap is no longer the best default way into business software. AI lets users state the outcome they want and get only the controls that job needs, so navigation shifts from the front door to the fallback.',
      },
      {
        type: 'p',
        text: 'Open almost any enterprise app built between 2005 and 2024 and you see the same thing: a dark grey rail on the left with flyout menus four levels deep. To change one permission, a person has to know where the engineers filed it.',
      },
      {
        type: 'p',
        text: 'That structure was never a finding from user research. It is the shape of the system showing through the screen. And for the first time, there is a credible way to stop making people learn it.',
      },
      {
        type: 'fig',
        fig: 'flow',
      },
      {
        type: 'p',
        text: 'This piece makes the case in four steps:',
      },
      {
        type: 'list',
        items: [
          {
            label: '',
            text: 'Why hierarchical navigation exists at all, and why it fits the database better than the person.',
          },
          {
            label: '',
            text: 'Why the first fix, a chatbot in the corner, made things worse in different ways.',
          },
          {
            label: '',
            text: 'What is actually replacing the sitemap in shipping products in 2026.',
          },
          {
            label: '',
            text: 'What small businesses and enterprise teams should do about it now, and where navigation still earns its place.',
          },
        ],
      },
      {
        type: 'stmt',
        label: 'One honest caveat up front.',
        text: '"Navigation is dead" is a good headline and a bad design rule. The stronger, defensible claim is narrower: the permanent, hierarchical sitemap stops being the primary interface.',
      },
      {
        type: 'h',
        text: 'Where the sitemap came from',
      },
      {
        type: 'lead',
        text: 'Most enterprise navigation mirrors how the software is built, not how people think about their work. Designers have had a name for this mistake for decades.',
      },
      {
        type: 'p',
        text: 'In About Face, Alan Cooper separated three models: the implementation model (how the system actually works), the mental model (how the user thinks it works), and the represented model (what the interface shows). Interfaces built by and for developers tend to map straight onto program functions, which is exactly the trap Cooper warned against (UX Passion, UX Collective).',
        segs: [
          {
            t: 'In About Face, Alan Cooper separated three models: the implementation model (how the system actually works), the mental model (how the user thinks it works), and the represented model (what the interface shows). Interfaces built by and for developers tend to map straight onto program functions, which is exactly the trap Cooper warned against (',
          },
          {
            t: 'UX Passion',
            url: 'https://uxpassion.com/?p=281077',
          },
          {
            t: ', ',
          },
          {
            t: 'UX Collective',
            url: 'https://uxdesign.cc/are-you-considering-the-developers-mental-model-306c49104a27',
          },
          {
            t: ').',
          },
        ],
      },
      {
        type: 'p',
        text: 'Enterprise apps fell into it at scale. Each table in the schema became a section. Each foreign key became a child page. Users ended up memorizing the plumbing to update a billing address, and companies wrote internal wikis just to explain where the configuration page lives.',
      },
      {
        type: 'p',
        text: 'The constraints of the time made this reasonable. Servers were slow, browsers mostly displayed pages, and a predictable page-per-entity structure was the cheapest way to query and render records safely. The constraint is gone. The layout stayed.',
      },
      {
        type: 'stmt',
        label: 'The 2026 twist.',
        text: 'Microsoft CEO Satya Nadella has argued that business applications are essentially CRUD databases with business logic on top, and that this logic is moving into an AI layer that works across many systems at once (CX Today). If the logic lives in the AI tier, the menus that exposed each database table lose their reason to exist. Even Nadella hedged, though: he also described apps like Excel and Word surviving as specialized canvases the agents work in (Computerworld).',
        segs: [
          {
            t: 'Microsoft CEO Satya Nadella has argued that business applications are essentially CRUD databases with business logic on top, and that this logic is moving into an AI layer that works across many systems at once (',
          },
          {
            t: 'CX Today',
            url: 'https://cxtoday.com/microsoft-ceo-ai-agents-will-transform-saas-as-we-know-it',
          },
          {
            t: '). If the logic lives in the AI tier, the menus that exposed each database table lose their reason to exist. Even Nadella hedged, though: he also described apps like Excel and Word surviving as specialized canvases the agents work in (',
          },
          {
            t: 'Computerworld',
            url: 'https://www.computerworld.com/article/3981415/does-agentic-ai-spell-doom-for-saas.html',
          },
          {
            t: ').',
          },
        ],
      },
      {
        type: 'h',
        text: "Why the chatbot in the corner didn't fix it",
      },
      {
        type: 'lead',
        text: 'Bolting a chat pill onto a sitemap swapped one usability problem for three new ones. The research is clear on why.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'The articulation barrier.',
            text: 'Jakob Nielsen coined this term in 2023: prompt-driven AI requires people to describe what they want in well-formed prose, and many capable professionals can\'t do that reliably (UX Tigers). He estimates the share of low-articulation users is likely larger than the share of low-literacy users, and points to the existence of "prompt engineers" as evidence. He has compared it to the syntax wall of DOS (UX Tigers).',
            segs: [
              {
                t: "Jakob Nielsen coined this term in 2023: prompt-driven AI requires people to describe what they want in well-formed prose, and many capable professionals can't do that reliably (",
              },
              {
                t: 'UX Tigers',
                url: 'https://www.uxtigers.com/post/ai-articulation-barrier',
              },
              {
                t: '). He estimates the share of low-articulation users is likely larger than the share of low-literacy users, and points to the existence of "prompt engineers" as evidence. He has compared it to the syntax wall of DOS (',
              },
              {
                t: 'UX Tigers',
                url: 'https://www.uxtigers.com/post/ux-roundup-20240108',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'The blank box hides capability.',
            text: "Traditional software surfaces features through menus, buttons and tooltips. A chat app offers a text field and a cursor, so people form a narrow mental model from their first use and never expand it (Leon Furze). Even NN/g found Google's AI Mode held back by discoverability and navigation issues, especially for AI novices (NN/g).",
            segs: [
              {
                t: 'Traditional software surfaces features through menus, buttons and tooltips. A chat app offers a text field and a cursor, so people form a narrow mental model from their first use and never expand it (',
              },
              {
                t: 'Leon Furze',
                url: 'https://leonfurze.com/2026/03/18/iykyk-how-do-we-know-what-ai-can-really-do/',
              },
              {
                t: "). Even NN/g found Google's AI Mode held back by discoverability and navigation issues, especially for AI novices (",
              },
              {
                t: 'NN/g',
                url: 'https://www.nngroup.com/articles/author/kate-moran/?page=1',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'Recall replaces recognition.',
            text: "Nielsen's sixth heuristic says recognizing something on screen is easier than retrieving it from memory (NN/g). Chat-first systems shift the burden back to recall: you must remember what to ask and how to phrase it (Design Systems Collective).",
            segs: [
              {
                t: "Nielsen's sixth heuristic says recognizing something on screen is easier than retrieving it from memory (",
              },
              {
                t: 'NN/g',
                url: 'https://www.nngroup.com/videos/recognition-vs-recall/',
              },
              {
                t: '). Chat-first systems shift the burden back to recall: you must remember what to ask and how to phrase it (',
              },
              {
                t: 'Design Systems Collective',
                url: 'https://www.designsystemscollective.com/why-ai-needs-a-sense-of-place-7e9ca6a504e1',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'Text is serial, screens are spatial.',
            text: 'Verifying a change by reading a paragraph is slower than glancing at a table diff. A recent controlled study makes the point concrete: an assistant that changed the live interface in place beat a side-panel chat assistant on task time, roughly 182 vs 242 seconds on average, with 100% vs 92% accuracy (arXiv, DOMSteer).',
            segs: [
              {
                t: 'Verifying a change by reading a paragraph is slower than glancing at a table diff. A recent controlled study makes the point concrete: an assistant that changed the live interface in place beat a side-panel chat assistant on task time, roughly 182 vs 242 seconds on average, with 100% vs 92% accuracy (',
              },
              {
                t: 'arXiv, DOMSteer',
                url: 'https://arxiv.org/pdf/2604.14668',
              },
              {
                t: ').',
              },
            ],
          },
        ],
      },
      {
        type: 'p',
        text: 'The lesson is not "AI interfaces fail." It is that conversation is a poor container for output. People want to say what they want, then see and touch the result.',
      },
      {
        type: 'h',
        text: 'The real shift: from "where is it?" to "what do you want?"',
      },
      {
        type: 'lead',
        text: 'Navigation exists to answer where. AI changes the question to what, and that is why the sitemap loses its central role.',
      },
      {
        type: 'p',
        text: 'Nielsen frames generative AI as only the third user-interface paradigm in computing history (UX Tigers / Substack):',
        segs: [
          {
            t: 'Nielsen frames generative AI as only the third user-interface paradigm in computing history (',
          },
          {
            t: 'UX Tigers / Substack',
            url: 'https://jakobnielsenphd.substack.com/p/ai-is-first-new-ui-paradigm-in-60',
          },
          {
            t: '):',
          },
        ],
      },
      {
        type: 'fig',
        fig: 'paradigms',
      },
      {
        type: 'p',
        text: "The phrase that matters is that intent-based interaction reverses the locus of control. In a GUI, the user operates the machine step by step, and menus are the map of every possible step. In an intent-based system, the user supervises; the procedure is the system's job (Nielsen, Intent by Discovery).",
        segs: [
          {
            t: "The phrase that matters is that intent-based interaction reverses the locus of control. In a GUI, the user operates the machine step by step, and menus are the map of every possible step. In an intent-based system, the user supervises; the procedure is the system's job (",
          },
          {
            t: 'Nielsen, Intent by Discovery',
            url: 'https://jakobnielsenphd.substack.com/p/intent-ux',
          },
          {
            t: ').',
          },
        ],
      },
      {
        type: 'p',
        text: "That is the real argument. Navigation doesn't die because typing is faster than clicking. It loses its job because users no longer have to locate the procedure. The menu was an index of procedures; when the system owns the procedure, the index becomes reference material.",
      },
      {
        type: 'p',
        text: 'Nielsen himself adds two important qualifiers. First, the future is likely a hybrid that keeps many GUI elements alongside intent. Second, the new paradigm gives up some of what command-based interaction did well: reassessing after each step and adjusting course (UX Tigers / Substack). Good intent-driven design has to put that control back.',
        segs: [
          {
            t: 'Nielsen himself adds two important qualifiers. First, the future is likely a hybrid that keeps many GUI elements alongside intent. Second, the new paradigm gives up some of what command-based interaction did well: reassessing after each step and adjusting course (',
          },
          {
            t: 'UX Tigers / Substack',
            url: 'https://jakobnielsenphd.substack.com/p/ai-is-first-new-ui-paradigm-in-60',
          },
          {
            t: '). Good intent-driven design has to put that control back.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Five patterns replacing the sitemap right now',
      },
      {
        type: 'lead',
        text: 'The replacement is not one thing. It is a spectrum, from a smarter search box to agents that never show a screen at all. Each pattern below is already shipping.',
      },
      {
        type: 'fig',
        fig: 'patterns',
      },
      {
        type: 'h3',
        text: '1. The command palette is the bridge',
      },
      {
        type: 'p',
        text: 'The palette is the intent canvas\'s humble ancestor, and the safest place to start. Menus hit a ceiling as features grow; a palette gets more useful as you add commands, because search collapses everything into one input (DEV Community). Superhuman\'s design rule is that the palette must be the single place every command can be found, and it shows each command\'s shortcut so users graduate to the keyboard (Superhuman). Add an LLM behind it and "go to billing" becomes "refund the last invoice for Acme."',
        segs: [
          {
            t: "The palette is the intent canvas's humble ancestor, and the safest place to start. Menus hit a ceiling as features grow; a palette gets more useful as you add commands, because search collapses everything into one input (",
          },
          {
            t: 'DEV Community',
            url: 'https://dev.to/thekitbase/cmdk-is-the-new-hamburger-menu-why-command-palettes-are-taking-over-saas-81d',
          },
          {
            t: "). Superhuman's design rule is that the palette must be the single place every command can be found, and it shows each command's shortcut so users graduate to the keyboard (",
          },
          {
            t: 'Superhuman',
            url: 'https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/',
          },
          {
            t: '). Add an LLM behind it and "go to billing" becomes "refund the last invoice for Acme."',
          },
        ],
      },
      {
        type: 'h3',
        text: '2. The intent canvas',
      },
      {
        type: 'p',
        text: 'This is what NN/g calls generative UI: the system assembles a purpose-built interface at the moment of need, rather than serving a layout fixed in advance (NN/g via cur.at). SAP is the clearest enterprise example. It describes its generative UI as "batch size 1" applications, temporary control centers built for one specific problem, and it builds them on the established Fiori component grammar with data lineage back to the system of record (SAP News). Picture a table diff, three toggles and an approve button, then nothing.',
        segs: [
          {
            t: 'This is what NN/g calls generative UI: the system assembles a purpose-built interface at the moment of need, rather than serving a layout fixed in advance (',
          },
          {
            t: 'NN/g via cur.at',
            url: 'https://cur.at/72pN5I4?m=web',
          },
          {
            t: '). SAP is the clearest enterprise example. It describes its generative UI as "batch size 1" applications, temporary control centers built for one specific problem, and it builds them on the established Fiori component grammar with data lineage back to the system of record (',
          },
          {
            t: 'SAP News',
            url: 'https://news.sap.com/2026/03/why-is-generative-ui-the-new-frontier-for-business-software/',
          },
          {
            t: '). Picture a table diff, three toggles and an approve button, then nothing.',
          },
        ],
      },
      {
        type: 'fig',
        fig: 'canvas',
      },
      {
        type: 'h3',
        text: '3. The app comes to the conversation',
      },
      {
        type: 'p',
        text: "In January 2026, MCP Apps became the first official extension to the Model Context Protocol, built jointly by Anthropic, OpenAI and the MCP-UI project. It lets a tool return a real interactive interface, such as a dashboard, form or checkout, inside the AI chat instead of a text reply (WorkOS). Hosts now include Claude, ChatGPT, VS Code, Microsoft 365 Copilot and Goose (AI Engineer). Google's open A2UI protocol takes a different route: the agent sends a JSON description, and the app renders it with its own trusted native components (Google Developers Blog). Both solve the serial-text problem described earlier: the conversation captures intent, and a real UI handles the decision.",
        segs: [
          {
            t: 'In January 2026, MCP Apps became the first official extension to the Model Context Protocol, built jointly by Anthropic, OpenAI and the MCP-UI project. It lets a tool return a real interactive interface, such as a dashboard, form or checkout, inside the AI chat instead of a text reply (',
          },
          {
            t: 'WorkOS',
            url: 'https://workos.com/blog/2026-01-27-mcp-apps',
          },
          {
            t: '). Hosts now include Claude, ChatGPT, VS Code, Microsoft 365 Copilot and Goose (',
          },
          {
            t: 'AI Engineer',
            url: 'https://www.ai.engineer/orgs/mcp-apps',
          },
          {
            t: "). Google's open A2UI protocol takes a different route: the agent sends a JSON description, and the app renders it with its own trusted native components (",
          },
          {
            t: 'Google Developers Blog',
            url: 'https://developers.googleblog.com/introducing-a2ui-an-open-project-for-agent-driven-interfaces/',
          },
          {
            t: '). Both solve the serial-text problem described earlier: the conversation captures intent, and a real UI handles the decision.',
          },
        ],
      },
      {
        type: 'h3',
        text: '4. The agent skips the interface',
      },
      {
        type: 'p',
        text: 'For routine work, the best navigation is none. Agents increasingly orchestrate tasks across systems without touching a GUI, and that is changing how companies buy software: BetterCloud reports the average number of SaaS apps per company fell 18% in 2025 (Medium, citing BetterCloud). Gartner expects a third of enterprise apps to include agentic AI by 2028, up from under 1% in 2024 (ARN). Here the human interface shrinks to review and approval.',
        segs: [
          {
            t: 'For routine work, the best navigation is none. Agents increasingly orchestrate tasks across systems without touching a GUI, and that is changing how companies buy software: BetterCloud reports the average number of SaaS apps per company fell 18% in 2025 (',
          },
          {
            t: 'Medium, citing BetterCloud',
            url: 'https://medium.com/@jdejter/the-saas-apocalypse-43a2f3ffed2a',
          },
          {
            t: '). Gartner expects a third of enterprise apps to include agentic AI by 2028, up from under 1% in 2024 (',
          },
          {
            t: 'ARN',
            url: 'https://www.arnnet.com.au/?p=3848988',
          },
          {
            t: '). Here the human interface shrinks to review and approval.',
          },
        ],
      },
      {
        type: 'h3',
        text: '5. The interface adapts to the person',
      },
      {
        type: 'p',
        text: 'The quietest pattern: navigation reorders and features surface based on role and behavior. Microsoft 365 Copilot, for example, holds back advanced features until a user shows intent (UX Collective). It keeps a stable structure while trimming what each person has to wade through.',
        segs: [
          {
            t: 'The quietest pattern: navigation reorders and features surface based on role and behavior. Microsoft 365 Copilot, for example, holds back advanced features until a user shows intent (',
          },
          {
            t: 'UX Collective',
            url: 'https://uxdesign.cc/enterprise-software-is-getting-personal-dea453bee3e3',
          },
          {
            t: '). It keeps a stable structure while trimming what each person has to wade through.',
          },
        ],
      },
      {
        type: 'h',
        text: 'What the evidence actually says',
      },
      {
        type: 'lead',
        text: 'The direction is well supported; the size of the win is not yet. Credible studies show gains of roughly 20–30% on focused tasks, not a universal halving, and plain chat can lose to a good GUI.',
      },
      {
        type: 'table',
        head: ['Study', 'Compared', 'Result', 'What it tells you'],
        rows: [
          [
            'DOMSteer (2026)',
            'In-place UI changes vs side-panel chat assistant vs autonomous agent',
            'In-place UI ~25% faster than chat (182 vs 242 s); accuracy 100% vs 92%; autonomous agent fastest but least accurate (79%)',
            'Intent plus visible UI beats chat; full autonomy trades accuracy for speed',
          ],
          [
            'Voice CMS vs GUI (2025)',
            'Conversational vs graphical editing of a knowledge base',
            'GUI rated easier and was faster on average; accuracy similar',
            'Conversation alone is not automatically better',
          ],
          [
            'Google Research generative UI (2025)',
            'Generated interfaces vs plain LLM text vs expert-built sites',
            'Raters strongly preferred generated UI over text, but expert-designed sites still scored highest; speed was not counted',
            'Generated UI beats chat output; it does not yet beat great design',
          ],
          [
            'Google enterprise RCT (2024)',
            'Engineers with vs without AI on a real task',
            '~21% faster (96 vs 114 min)',
            'Realistic enterprise gains are meaningful but moderate',
          ],
          [
            'Echoes of AI (2026)',
            'Developers with vs without AI assistants',
            '30.7% median time reduction; habitual users ~56%',
            'Speed-ups grow with practice; training matters',
          ],
        ],
        links: [
          'https://arxiv.org/pdf/2604.14668',
          'https://arxiv.org/pdf/2505.22303',
          'https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/',
          'https://addyo.substack.com/p/the-reality-of-ai-assisted-software',
          'https://link.springer.com/article/10.1007/s10664-026-10889-1',
        ],
      },
      {
        type: 'stmt',
        label: 'What this means for your business case.',
        text: "Expect 20–30% faster task completion on focused tasks, with larger gains for experienced users and for jobs that used to require hunting through nested settings. Don't promise a universal halving. Measure your own before and after on three real tasks; one number from your own team is more persuasive than any industry figure.",
      },
      {
        type: 'p',
        text: 'Fewer support tickets is a likely benefit, since people stop getting lost in nested tabs. No published study yet measures it directly for intent-driven interfaces, so treat it as a metric to track rather than a guaranteed result.',
      },
      {
        type: 'h',
        text: 'Where navigation still earns its place',
      },
      {
        type: 'lead',
        text: 'Addressing the strongest objections makes the argument harder to dismiss. In five situations, visible structure still beats intent.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Orientation and exploration.',
            text: "Navigation tells people what a product can do before they know what to ask. Without it, users can't course-correct, and an intent-only UI risks becoming an illusion of control (Web Designer Depot). Intent works best layered on top of a solid structure, not in place of one.",
            segs: [
              {
                t: "Navigation tells people what a product can do before they know what to ask. Without it, users can't course-correct, and an intent-only UI risks becoming an illusion of control (",
              },
              {
                t: 'Web Designer Depot',
                url: 'https://webdesignerdepot.com/intent-based-ui-is-replacing-navigation-are-we-designing-ourselves-out-of-the-interface/',
              },
              {
                t: '). Intent works best layered on top of a solid structure, not in place of one.',
              },
            ],
          },
          {
            label: 'Habits and high-frequency tasks.',
            text: "For the daily three-click routine, a fixed location is faster than describing it. One banking-UX team's rule of thumb: classic navigation for familiar repeated habits; generative UI for complex, stressful, or one-off requests (Craft Innovations).",
            segs: [
              {
                t: "For the daily three-click routine, a fixed location is faster than describing it. One banking-UX team's rule of thumb: classic navigation for familiar repeated habits; generative UI for complex, stressful, or one-off requests (",
              },
              {
                t: 'Craft Innovations',
                url: 'https://craftinnovations.global/generative-ui-and-prompt-first-interfaces/',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'Precision control.',
            text: 'A retoucher adjusting warmth by dragging a slider is more accurate than describing "a little warmer" in words (Woshipm). Continuous values want direct manipulation.',
            segs: [
              {
                t: 'A retoucher adjusting warmth by dragging a slider is more accurate than describing "a little warmer" in words (',
              },
              {
                t: 'Woshipm',
                url: 'https://www.woshipm.com/ai/6414965.html',
              },
              {
                t: '). Continuous values want direct manipulation.',
              },
            ],
          },
          {
            label: 'High-stakes, auditable actions.',
            text: 'Payroll, permissions and payments need deterministic paths, predictable confirmation, and a record of what changed. Intent systems are probabilistic (Nielsen), so the approve step and the audit trail must stay explicit.',
            segs: [
              {
                t: 'Payroll, permissions and payments need deterministic paths, predictable confirmation, and a record of what changed. Intent systems are probabilistic (',
              },
              {
                t: 'Nielsen',
                url: 'https://jakobnielsenphd.substack.com/p/intent-ux',
              },
              {
                t: '), so the approve step and the audit trail must stay explicit.',
              },
            ],
          },
          {
            label: 'Accessibility, and agents as users.',
            text: "NN/g notes that AI agents now use your interfaces too, and that semantic HTML, clear labels and logical hierarchy serve both screen readers and agents (NN/g). A well-structured information architecture is what makes intent routing work. Salesforce's design team warns that agents don't solve accessibility on their own, because they learned from a web that isn't very accessible (Salesforce).",
            segs: [
              {
                t: 'NN/g notes that AI agents now use your interfaces too, and that semantic HTML, clear labels and logical hierarchy serve both screen readers and agents (',
              },
              {
                t: 'NN/g',
                url: 'https://nngroup.com/articles/ai-agents-as-users',
              },
              {
                t: "). A well-structured information architecture is what makes intent routing work. Salesforce's design team warns that agents don't solve accessibility on their own, because they learned from a web that isn't very accessible (",
              },
              {
                t: 'Salesforce',
                url: 'https://www.salesforce.com/blog/accessible-ai-experiences/',
              },
              {
                t: ').',
              },
            ],
          },
        ],
      },
      {
        type: 'fig',
        fig: 'quadrant',
      },
      {
        type: 'stmt',
        label: 'The reframe.',
        text: 'The information architecture doesn\'t disappear; it stops being the user\'s job. It becomes the map the system uses to route intent, check permissions, and build the right surface. Designers who abandon IA work because "AI will figure it out" will ship intent layers that guess wrong.',
      },
      {
        type: 'h',
        text: 'Playbook for small businesses',
      },
      {
        type: 'lead',
        text: "Small businesses already use AI widely but rarely deeply, and intent-driven workflows are how to close that gap. Goldman Sachs found 76% of US small businesses use AI in some form, but only 14% have it fully embedded in core operations (Delaware Inc., citing Goldman Sachs). Thryv's 2026 survey found 70% of owners say they need more training (WICPA), which is the articulation barrier showing up in the field.",
        segs: [
          {
            t: 'Small businesses already use AI widely but rarely deeply, and intent-driven workflows are how to close that gap. Goldman Sachs found 76% of US small businesses use AI in some form, but only 14% have it fully embedded in core operations (',
          },
          {
            t: 'Delaware Inc., citing Goldman Sachs',
            url: 'https://www.delawareinc.com/blog/ai-adoption-small-business/',
          },
          {
            t: "). Thryv's 2026 survey found 70% of owners say they need more training (",
          },
          {
            t: 'WICPA',
            url: 'https://www.wicpa.org/news/c7e16527-afd0-44ce-bf27-5478bc646213:survey-ai-adoption-continues-to-rise-but-70-say-they-need-more-training',
          },
          {
            t: '), which is the articulation barrier showing up in the field.',
          },
        ],
      },
      {
        type: 'p',
        text: 'A small team has no IT department to build a custom canvas. Its version of "killing the sitemap" is making the AI assistant the front door to the tools it already pays for.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Map the five tasks people hunt for most.',
            text: 'Ask the team which screens they bookmark, which they ask a colleague to find, and which they put off. These are the first targets.',
          },
          {
            label: 'Connect the assistant to the core tools.',
            text: 'Use connectors (MCP-based where possible) for email, calendar, accounting, CRM and docs, so "show me unpaid invoices over 30 days" returns a real table, not a paragraph.',
          },
          {
            label: 'Replace blank prompts with buttons.',
            text: "Turn each top task into a saved prompt, template or one-click action. This directly removes the articulation barrier for staff who aren't strong writers. Nielsen's prompt-augmentation patterns, such as prompt builders and parameterized prompts, are good models (UX Tigers).",
            segs: [
              {
                t: "Turn each top task into a saved prompt, template or one-click action. This directly removes the articulation barrier for staff who aren't strong writers. Nielsen's prompt-augmentation patterns, such as prompt builders and parameterized prompts, are good models (",
              },
              {
                t: 'UX Tigers',
                url: 'https://www.uxtigers.com/post/prompt-augmentation',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'Prefer tools with a command bar.',
            text: 'When choosing new software, favor products with a Cmd+K palette or built-in assistant. It shortens onboarding for every new hire.',
          },
          {
            label: 'Keep a human approve step on money and customers.',
            text: 'Let the assistant draft the refund, the invoice or the email; a person clicks send.',
          },
          {
            label: 'Measure one before/after.',
            text: 'Time three common tasks today and again after 30 days. That becomes your own case study, which is far more persuasive to the next client than any industry statistic.',
          },
        ],
      },
      {
        type: 'stmt',
        label: 'What to tell an owner in one sentence:',
        text: 'Stop teaching staff where things are in five different apps; teach them to ask for what they need, and give them buttons for the things they ask for most.',
      },
      {
        type: 'h',
        text: 'Playbook for enterprise teams',
      },
      {
        type: 'lead',
        text: 'For enterprise, the move is to turn the design system and the permissions model into the vocabulary an AI can safely compose with. That is the shift NN/g calls outcome-oriented design: designers define goals, constraints and quality limits rather than every screen (Lazarev.agency, on NN/g).',
        segs: [
          {
            t: 'For enterprise, the move is to turn the design system and the permissions model into the vocabulary an AI can safely compose with. That is the shift NN/g calls outcome-oriented design: designers define goals, constraints and quality limits rather than every screen (',
          },
          {
            t: 'Lazarev.agency, on NN/g',
            url: 'https://www.lazarev.agency/articles/generative-ui-design',
          },
          {
            t: ').',
          },
        ],
      },
      {
        type: 'list',
        items: [
          {
            label: 'Audit navigation against intent.',
            text: 'Pull search logs, support tickets and analytics to find the tasks where users get lost in nested tabs. Rank them by frequency and pain.',
          },
          {
            label: 'Ship a command palette first.',
            text: 'Cover navigation plus the top 20 actions. It is low-risk, helps power users immediately, and the query logs it produces become your intent dataset.',
          },
          {
            label: 'Make the design system "agent-ready."',
            text: "Generative UI stays coherent by constraining what the model can generate, not by reviewing each output (Capicua). Both A2UI and SAP's approach rely on a catalog of approved components the agent can request (SD Times).",
            segs: [
              {
                t: 'Generative UI stays coherent by constraining what the model can generate, not by reviewing each output (',
              },
              {
                t: 'Capicua',
                url: 'https://www.capicua.com/blog/generative-ui-genui-strategy',
              },
              {
                t: "). Both A2UI and SAP's approach rely on a catalog of approved components the agent can request (",
              },
              {
                t: 'SD Times',
                url: 'https://sdtimes.com/ai/google-launches-a2ui-project-to-enable-agents-to-build-contextually-relevant-uis/',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'Pilot one intent canvas.',
            text: 'Pick one painful, infrequent flow, such as a role change, a vendor onboarding or a pricing exception. Build the core pattern from Figure 04.',
          },
          {
            label: 'Keep the sitemap as a fallback.',
            text: "Don't remove navigation in the pilot. Demote it. Watch how often people still reach for it, and for which tasks.",
          },
          {
            label: 'Change what you measure.',
            text: 'Screen-level analytics break when every session sees a different interface. Track intents captured, time to outcome, overrides and refusals instead (Capicua).',
            segs: [
              {
                t: 'Screen-level analytics break when every session sees a different interface. Track intents captured, time to outcome, overrides and refusals instead (',
              },
              {
                t: 'Capicua',
                url: 'https://www.capicua.com/blog/generative-ui-genui-strategy',
              },
              {
                t: ').',
              },
            ],
          },
          {
            label: 'Design for agents as users.',
            text: "Semantic markup, stable labels and clean APIs make your product usable by customers' agents, not just their employees (NN/g).",
            segs: [
              {
                t: "Semantic markup, stable labels and clean APIs make your product usable by customers' agents, not just their employees (",
              },
              {
                t: 'NN/g',
                url: 'https://nngroup.com/articles/ai-agents-as-users',
              },
              {
                t: ').',
              },
            ],
          },
        ],
      },
      {
        type: 'stmt',
        label: 'Guardrails that make it sellable:',
        text: 'show data lineage for anything the AI renders, as SAP does; require explicit approval for writes; log every intent and action for audit; and give users a one-click path to the underlying record.',
      },
      {
        type: 'h',
        text: "Navigation doesn't die. It moves behind intent.",
      },
      {
        type: 'p',
        text: "The four-level sidebar was a workaround for software that couldn't understand what people meant. Now it can, imperfectly, and the interface can finally be shaped around the job instead of the schema.",
      },
      {
        type: 'p',
        text: 'The winning products of the next few years will not be the ones with the cleverest chatbot. They will be the ones that let people say what they want, show them exactly what they need to decide, and keep a clear map underneath for the moments when someone wants to look around.',
      },
      {
        type: 'close',
        text: 'The sitemap becomes what an index is to a book: essential, rarely the way in.',
      },
      {
        type: 'h',
        text: 'Sources and further reading',
        top: 'clamp(72px,10vw,104px)',
      },
      {
        type: 'src',
        label: 'Start with these five',
        items: [
          {
            text: 'Jakob Nielsen, AI Is First New UI Paradigm in 60 Years: the intent-based outcome specification framework.',
            url: 'https://jakobnielsenphd.substack.com/p/ai-is-first-new-ui-paradigm-in-60',
          },
          {
            text: 'Jakob Nielsen, The Articulation Barrier: why prompt boxes exclude many users.',
            url: 'https://www.uxtigers.com/post/ai-articulation-barrier',
          },
          {
            text: 'Jakob Nielsen, Intent by Discovery: the user shifts from operator to supervisor.',
            url: 'https://jakobnielsenphd.substack.com/p/intent-ux',
          },
          {
            text: 'SAP, Why generative UI is the new frontier for business software: the clearest enterprise implementation.',
            url: 'https://news.sap.com/2026/03/why-is-generative-ui-the-new-frontier-for-business-software/',
          },
          {
            text: 'NN/g, AI Agents as Users: why IA and accessibility matter more, not less.',
            url: 'https://nngroup.com/articles/ai-agents-as-users',
          },
        ],
      },
      {
        type: 'src',
        label: 'Industry and adoption',
        items: [
          {
            text: 'Nadella on SaaS and the AI tier (CX Today)',
            url: 'https://cxtoday.com/microsoft-ceo-ai-agents-will-transform-saas-as-we-know-it',
          },
          {
            text: 'Does agentic AI spell doom for SaaS? (Computerworld)',
            url: 'https://www.computerworld.com/article/3981415/does-agentic-ai-spell-doom-for-saas.html',
          },
          {
            text: 'Small business AI adoption (Delaware Inc.)',
            url: 'https://www.delawareinc.com/blog/ai-adoption-small-business/',
          },
          {
            text: 'Thryv 2026 survey summary (WICPA)',
            url: 'https://www.wicpa.org/news/c7e16527-afd0-44ce-bf27-5478bc646213:survey-ai-adoption-continues-to-rise-but-70-say-they-need-more-training',
          },
        ],
      },
      {
        type: 'src',
        label: 'Counterpoints worth reading',
        items: [
          {
            text: 'Intent-Based UI Is Replacing Navigation — Are We Designing Ourselves Out of the Interface? (Web Designer Depot)',
            url: 'https://webdesignerdepot.com/intent-based-ui-is-replacing-navigation-are-we-designing-ourselves-out-of-the-interface/',
          },
          {
            text: 'Why AI Needs a Sense of Place (Design Systems Collective)',
            url: 'https://www.designsystemscollective.com/why-ai-needs-a-sense-of-place-7e9ca6a504e1',
          },
        ],
      },
      {
        type: 'src',
        label: 'Patterns and practice',
        items: [
          {
            text: 'How to build a remarkable command palette (Superhuman)',
            url: 'https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/',
          },
          {
            text: 'Prompt Augmentation patterns (UX Tigers)',
            url: 'https://www.uxtigers.com/post/prompt-augmentation',
          },
          {
            text: 'Generative UI strategy and metrics (Capicua)',
            url: 'https://www.capicua.com/blog/generative-ui-genui-strategy',
          },
          {
            text: 'Enterprise software is getting personal (UX Collective)',
            url: 'https://uxdesign.cc/enterprise-software-is-getting-personal-dea453bee3e3',
          },
        ],
      },
    ],
  },
  'death-of-passive-dashboard': {
    kicker: 'Essay 02',
    heading: 'The death of the passive dashboard',
    blocks: [
      {
        type: 'h',
        text: 'A morning with thirty charts',
      },
      {
        type: 'lead',
        text: "It's 8:00 on a Tuesday. The operations lead at a mid-sized online retailer opens the analytics dashboard, the one that looked so convincing in the sales demo: thirty charts, green sparklines, a heatmap, four conversion funnels. She sets five filters. For the next twenty minutes she compares lines, trying to work out whether yesterday's dip in revenue is a problem or just the Monday after a public holiday.",
      },
      {
        type: 'p',
        text: "It was the holiday. She closes the tab, and tomorrow she'll do it again.",
      },
      {
        type: 'p',
        text: 'Enterprise analytics is still sold by the pound, and this is the job it creates: a skilled person working as a human anomaly detector every morning, mostly to confirm that nothing happened. This essay is about moving that work to the software, so the person can spend her attention on decisions.',
      },
      {
        type: 'h',
        text: 'What the evidence says',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Most dashboards go unused.',
            text: 'Gartner puts average adoption of analytics and BI tools at about 29% of employees, and that share has barely moved in years [1]. Many of the people who do log in are checking that nothing changed.',
          },
          {
            label: "Asking questions doesn't solve discovery.",
            text: 'Natural-language query boxes help when you already know what to ask. Nobody types "are Frankfurt auth tokens failing?" until something else has broken and someone has spent an hour narrowing it down.',
          },
          {
            label: 'Aviation solved this decades ago.',
            text: 'As cockpits went digital from the late 1970s, designers adopted what pilots call the dark cockpit: when every system is normal, nothing is lit. A light comes on only for something abnormal, and it points the crew to the right system and checklist [2]. In the words of the Lean Enterprise Institute\'s account, "If you overload people with information, the risk is that the real problem becomes invisible."',
          },
          {
            label: 'Software operations reached the same rule.',
            text: "Google's site reliability handbook says every page should be actionable, and that alerts should track the symptoms users feel rather than every internal cause [3].",
          },
          {
            label: 'Most alerts today are noise.',
            text: 'In a 2025 Omdia study for Microsoft of 300 security teams, an estimated 46% of alerts were false positives and 42% were never investigated [4]. Google\'s SRE team describes the result: when pages come too often, people "second-guess, skim, or even ignore incoming alerts" [3].',
          },
        ],
      },
      {
        type: 'p',
        text: 'Taken together: show less, and make what you show worth acting on.',
      },
      {
        type: 'h',
        text: 'The pattern: quiet by default',
      },
      {
        type: 'lead',
        text: 'Four rules turn a passive dashboard into a working one.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'The default screen is quiet.',
            text: 'It shows a single health line, such as "214 metrics watched, 213 in range, data refreshed at 07:58", and nothing else unless something needs attention.',
          },
          {
            label: 'Every metric has a baseline.',
            text: 'The system knows what normal looks like for this hour, this weekday and this season.',
          },
          {
            label: 'Only alert on things someone would act on today.',
            text: 'Use a simple decision test: if this number moved 20% overnight, would anyone do something differently today? If not, it belongs in a weekly report, not an alert.',
          },
          {
            label: 'Every alert has one named owner.',
            text: 'An alert that everyone sees and nobody owns gets ignored.',
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/death-of-passive-dashboard/1-quiet.jpg',
        cap: 'Figure 1 · The dark cockpit applied to analytics (illustrative)',
      },
      {
        type: 'h3',
        text: 'Choosing a baseline',
      },
      {
        type: 'p',
        text: '"Normal" can mean three different things, and the right one depends on the metric.',
      },
      {
        type: 'table',
        head: ['Baseline', 'How it works', 'Good for', 'Watch out for'],
        rows: [
          [
            'Fixed threshold',
            'Alert when a value crosses a line you set',
            'Hard limits: cash below a floor, stock below the reorder point, conversions at zero',
            'Ignores seasons, and someone has to keep the number current',
          ],
          [
            'Same-period comparison',
            'Compare with the same hour or weekday in previous weeks',
            'Traffic, orders and sign-ups with a weekly rhythm',
            'Holidays and promotions still trip it',
          ],
          [
            'Learned seasonal model',
            'Software predicts an expected range from history',
            'Many metrics with complex patterns',
            "Needs history and is harder to explain. Datadog's seasonal detectors need at least three full cycles, so three weeks for a weekly pattern [5]",
          ],
        ],
      },
      {
        type: 'p',
        text: 'Start with fixed thresholds for hard limits and same-weekday comparisons for anything with a rhythm. Move to learned models once you have the history and someone who can tune them.',
      },
      {
        type: 'h',
        text: 'The exception dossier',
      },
      {
        type: 'lead',
        text: 'Most alerts stop at a red line pointing down. They tell you something moved and leave the rest to you. A useful alert arrives with five things already worked out. I call this an exception dossier.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'What moved, against what normal.',
            text: '"Checkout conversion has been 2.9% since 06:10. The normal range for a Tuesday morning is 3.8–4.2%."',
          },
          {
            label: 'The likely cause, with evidence.',
            text: '"Apple Pay verification has failed on mobile Safari since the 06:00 iOS release. Nearly all failed sessions are iOS and Safari." Some BI tools now take a first pass at this. Power BI\'s anomaly detection flags points outside an expected range and offers a plain-language explanation with the factors that contributed most [6].',
          },
          {
            label: 'The cost, in money.',
            text: 'Lost so far, and per hour. Without a number, nobody can judge whether this beats the other three problems on their desk.',
          },
          {
            label: 'The options, each with its trade-off.',
            text: "Roll back the release and lose yesterday's launch. Route payments to the backup gateway and pay a higher fee per order. Hide Apple Pay on iOS until it's fixed and offer fewer ways to pay.",
          },
          {
            label: 'An owner and a deadline.',
            text: 'Who decides, and by when, before the cost doubles.',
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/death-of-passive-dashboard/2-dossier.jpg',
        cap: 'Figure 2 · Anatomy of an exception dossier (illustrative)',
      },
      {
        type: 'p',
        text: "With the dossier in hand, the person's job becomes the trade-off itself. That is a business judgment, and it is the part people do well.",
      },
      {
        type: 'h',
        text: 'A worked example',
      },
      {
        type: 'lead',
        text: 'Picture a 14-person online shop that sells kitchenware on Shopify. The numbers here are illustrative, but the setup uses features these tools offer today.',
      },
      {
        type: 'p',
        text: "Before. Every morning the owner and her operations manager each check Shopify's analytics, Google Analytics and the bank. Between them it takes about forty minutes, and most days nothing has changed. Stock-outs are discovered when customers email to ask where their order is.",
        segs: [
          {
            t: 'Before.',
            b: true,
          },
          {
            t: " Every morning the owner and her operations manager each check Shopify's analytics, Google Analytics and the bank. Between them it takes about forty minutes, and most days nothing has changed. Stock-outs are discovered when customers email to ask where their order is.",
          },
        ],
      },
      {
        type: 'p',
        text: 'The change. In one afternoon they set up five alerts:',
        segs: [
          {
            t: 'The change.',
            b: true,
          },
          {
            t: ' In one afternoon they set up five alerts:',
          },
        ],
      },
      {
        type: 'list',
        items: [
          {
            label: '',
            text: 'Bestselling products below two weeks of stock, through a Shopify Flow email.',
          },
          {
            label: '',
            text: 'Website conversions at zero for a day, which usually means broken tracking, through a Google Analytics custom insight.',
          },
          {
            label: '',
            text: 'Sessions down by half within an hour, which usually means an outage, also through Google Analytics.',
          },
          {
            label: '',
            text: "Cash below one month of payroll, through the bank's balance alert.",
          },
          {
            label: '',
            text: 'Refunds above their normal weekly level, checked in the Friday review.',
          },
        ],
      },
      {
        type: 'p',
        text: 'After. At 06:40 on a Tuesday, an email arrives: the 28 cm frying pan has nine days of stock at the current sales pace, and the supplier\'s lead time is 21 days. Reordering by sea means a twelve-day gap. Air freight closes the gap and costs more. The owner orders half by air and half by sea, and adds a "back in stock" sign-up to the product page. The decision takes two minutes.',
        segs: [
          {
            t: 'After.',
            b: true,
          },
          {
            t: ' At 06:40 on a Tuesday, an email arrives: the 28 cm frying pan has nine days of stock at the current sales pace, and the supplier\'s lead time is 21 days. Reordering by sea means a twelve-day gap. Air freight closes the gap and costs more. The owner orders half by air and half by sea, and adds a "back in stock" sign-up to the product page. The decision takes two minutes.',
          },
        ],
      },
      {
        type: 'p',
        text: 'On Wednesday there are no alerts, and nobody opens a dashboard.',
      },
      {
        type: 'img',
        src: 'writing/death-of-passive-dashboard/3-morning.jpg',
        cap: 'Figure 3 · The same morning, before and after (illustrative)',
      },
      {
        type: 'h',
        text: 'Where it goes wrong',
      },
      {
        type: 'lead',
        text: 'A quiet screen only works if people trust what breaks the silence. These are the failures to design against.',
      },
      {
        type: 'table',
        head: ['Failure', 'What it looks like', 'Safeguard'],
        rows: [
          [
            'Wrong baselines',
            'Every public holiday is flagged as an outage',
            'Show the assumed normal range in each alert, and let owners mark known events in advance',
          ],
          [
            'Alert floods',
            'Dozens of alerts a day, and people stop reading them',
            'Track alert precision and delete rules nobody acts on [3][4]',
          ],
          [
            'Too much trust',
            'The first suggested fix gets clicked without a check',
            'Show the evidence, and ask for a reason before high-cost options [7]',
          ],
          [
            'Silent breakage',
            'The data pipeline stops at midnight and the screen stays dark',
            'Keep the health line visible, and alert on missing or stale data',
          ],
          ['No owner', 'Everyone sees the alert and nobody acts', 'One named owner per rule, with a backup for holidays'],
        ],
      },
      {
        type: 'p',
        text: 'The over-trust problem is old. Decades of research on automation show that people lean on systems that are usually right and gradually stop checking them [7]. Showing the evidence behind a suggested cause makes it easier to disagree.',
      },
      {
        type: 'h',
        text: 'When to keep the dashboard',
      },
      {
        type: 'lead',
        text: 'Exception alerts replace watching, not looking. Keep a full dashboard for:',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Exploring a question.',
            text: 'Why did customers from one campaign churn faster?',
          },
          {
            label: 'Strategy reviews.',
            text: 'Monthly and quarterly trends that no single day would flag.',
          },
          {
            label: 'New metrics.',
            text: 'Anything without enough history for a baseline.',
          },
          {
            label: 'Regulatory and board reporting.',
            text: 'Where completeness matters more than speed.',
          },
          {
            label: 'Incidents in progress.',
            text: "When the whole picture helps the team that's fixing it.",
          },
        ],
      },
      {
        type: 'p',
        text: 'A dashboard should be somewhere you go with a question, not somewhere you go to find one.',
      },
      {
        type: 'h',
        text: 'Playbook for small businesses',
      },
      {
        type: 'lead',
        text: 'The goal is to replace the morning check with about five alerts in tools you already pay for. It takes one afternoon.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Pick five numbers using the decision test.',
            text: "Typical picks are cash on hand, stock of your top sellers, yesterday's orders, website conversions and overdue invoices.",
          },
          {
            label: 'Set the alerts where your data already lives.',
            text: '',
          },
          {
            label: 'Stock in Shopify:',
            text: 'in Shopify Flow, use the trigger "Product variant inventory quantity changed", add a condition that the quantity is at or below your reorder point, and choose the action "Send internal email". Flow is free on paid Shopify plans.',
            segs: [
              {
                t: 'in ',
              },
              {
                t: 'Shopify Flow',
                url: 'https://help.shopify.com/manual/shopify-plus/flow/examples',
              },
              {
                t: ', use the trigger "Product variant inventory quantity changed", add a condition that the quantity is at or below your reorder point, and choose the action "Send internal email". Flow is free on paid Shopify plans.',
              },
            ],
            sub: true,
          },
          {
            label: 'Website traffic:',
            text: 'in Google Analytics, go to Reports, then Insights, and create custom insights. Two good starters are "conversions equal 0, checked daily" and "sessions down 50%, checked hourly". Custom insights send email only, and each property allows up to 50 (setup guide).',
            segs: [
              {
                t: 'in Google Analytics, go to Reports, then Insights, and create custom insights. Two good starters are "conversions equal 0, checked daily" and "sessions down 50%, checked hourly". Custom insights send email only, and each property allows up to 50 (',
              },
              {
                t: 'setup guide',
                url: 'https://www.metricswatch.com/blog/ga4-custom-alerts',
              },
              {
                t: ').',
              },
            ],
            sub: true,
          },
          {
            label: 'Cash:',
            text: 'turn on a low-balance alert in your bank or accounting app.',
            sub: true,
          },
          {
            label: 'Send each alert to one named person',
            text: ', not to a shared inbox.',
          },
          {
            label: 'Review every Friday for fifteen minutes.',
            text: 'Which alerts led to an action? Adjust or delete the rest.',
          },
          {
            label: 'After a month, drop the daily dashboard check.',
            text: 'Keep the dashboard for monthly reviews.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Playbook for enterprise teams',
      },
      {
        type: 'lead',
        text: 'The goal is to move one team from monitoring to deciding in six weeks, then scale what works.',
      },
      {
        type: 'table',
        head: ['Step', 'Owner', 'Output'],
        rows: [
          [
            '1. Audit dashboards: who opened each one last month, and what did they do?',
            'Analytics lead',
            'A usage list and candidates to retire',
          ],
          [
            '2. Apply the decision test to every tracked metric',
            'Business owner for each area',
            '10–20 alert-worthy metrics, each with an owner',
          ],
          ['3. Choose a baseline for each metric', 'Data team', 'Threshold, same-period comparison or learned model'],
          ['4. Standardize the dossier template', 'Design and data', 'Fields for change, cause, cost, options, owner'],
          ['5. Pilot with one team for six weeks', 'Team lead', 'An alert log with what happened after each alert'],
          ['6. Review, then scale', 'Analytics lead', 'Rules kept, tuned or deleted'],
        ],
      },
      {
        type: 'p',
        text: "Most enterprise stacks already have the parts. Power BI sends data alerts on cards, KPIs and gauges by email, and its line charts can flag anomalies with an explanation [6]. Tableau Pulse sends threshold and trend-change alerts in Slack and email digests. For operational metrics, Datadog's anomaly monitors handle daily and weekly seasonality [5].",
      },
      {
        type: 'p',
        text: "Track four numbers to show it's working:",
      },
      {
        type: 'list',
        items: [
          {
            label: 'Alert precision:',
            text: 'the share of alerts that led to an action.',
          },
          {
            label: 'Time to decision:',
            text: 'from alert to a chosen option.',
          },
          {
            label: 'Monitoring time:',
            text: 'hours a week spent on routine checks, before and after.',
          },
          {
            label: 'Dashboards retired.',
            text: '',
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/death-of-passive-dashboard/4-split.jpg',
        cap: 'Figure 4 · How the work splits between system and person',
      },
      {
        type: 'close',
        text: 'Software that makes people hunt for patterns wastes what they do best. Let the system watch, and hand people the decision.',
      },
      {
        type: 'h',
        text: 'Sources and further reading',
        top: 'clamp(72px,10vw,104px)',
      },
      {
        type: 'src',
        label: 'Cited in this essay',
        items: [
          {
            text: 'IBM, citing Gartner. A new era in BI: overcoming low adoption (2024).',
            url: 'https://www.ibm.com/think/insights/business-intelligence-adoption',
          },
          {
            text: 'Lean Enterprise Institute. The dark cockpit: what aviation can teach lean leaders.',
            url: 'https://www.lean.org/the-lean-post/articles/the-dark-cockpit-what-aviation-can-teach-lean-leaders/',
          },
          {
            text: 'Google. Monitoring Distributed Systems, in Site Reliability Engineering.',
            url: 'https://sre.google/sre-book/monitoring-distributed-systems/',
          },
          {
            text: 'Microsoft Security and Omdia. Unify now or pay later (2026).',
            url: 'https://microsoft.com/en-us/security/blog/2026/02/17/unify-now-or-pay-later-new-research-exposes-the-operational-cost-of-a-fragmented-soc',
          },
          {
            text: 'Datadog. Anomaly monitor documentation.',
            url: 'https://docs.datadoghq.com/monitors/types/anomaly/',
          },
          {
            text: 'Microsoft. Anomaly detection in Power BI.',
            url: 'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection',
          },
          {
            text: 'Lee, J. D., and See, K. A. Trust in automation: designing for appropriate reliance. Human Factors, 2004.',
            url: 'https://csel.eng.ohio-state.edu/productions/intel/research/trust/Lee%20%26%20See%20Trust%20Review.pdf',
          },
        ],
      },
    ],
  },
  'dual-audience-ui': {
    kicker: 'Essay 03',
    heading: 'Dual-audience UI',
    blocks: [
      {
        type: 'h',
        text: 'An agent tries to export the invoices',
      },
      {
        type: 'lead',
        text: "A finance manager at a design agency asks her AI agent to download March's invoices from the billing tool and file them. The agent opens the app in a browser and finds a page built from unnamed div elements. It clicks what it guesses is the export button, but a cookie banner has just slid in and pushed the layout down thirty pixels, so it lands in the wrong menu. On the second try it finds the export. The file builds in the background, and the only sign that it's ready is a spinner disappearing. The agent waits, times out and reports that the task failed.",
      },
      {
        type: 'p',
        text: "She doesn't blame the agent. She decides the billing tool is broken, and next quarter she starts looking at alternatives.",
      },
      {
        type: 'p',
        text: 'This essay is about building interfaces that work for both kinds of user, the person with a screen and the software acting on their behalf, and about the small number of changes that make the biggest difference.',
      },
      {
        type: 'h',
        text: 'What the evidence says',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Machines already outnumber people.',
            text: 'In 2024 automated traffic passed human traffic on the web for the first time in a decade, at 51% of all requests, according to Imperva [1]. Much of it is crawlers and malicious bots. A growing share is agents doing paid work for real customers.',
          },
          {
            label: 'Many agents read the accessibility tree.',
            text: "Playwright's MCP server, a common way to give a model a browser, represents each page as an accessibility snapshot: every element arrives with a role, a name and a reference the model can click [2]. OpenAI tells site owners that the agent in its Atlas browser relies on the same roles and labels screen readers use [3].",
          },
          {
            label: "The web isn't ready.",
            text: "The 2026 WebAIM Million found detectable WCAG failures on 95.9% of the top million home pages. Missing form labels appeared on 51% of pages, empty links on 46% and empty buttons on 31% [4]. Each of those is a control an agent can't identify.",
          },
          {
            label: "More ARIA isn't the fix.",
            text: "In the same data, pages that used ARIA averaged 59 detected errors, against 42 for pages that didn't [4]. Accessibility specialist Adrian Roselli warns that OpenAI's advice invites the same abuse alt text suffered from SEO, and that ARIA should be a fallback for what HTML can't express [5].",
          },
          {
            label: 'Good agents are getting blocked.',
            text: 'On July 1, 2025, Cloudflare started blocking AI crawlers by default for the sites it serves [6]. Two months later it added "signed agents": user-directed agents, such as ChatGPT\'s agent, that prove who they are with cryptographic signatures, so site owners can let them in while still blocking bad bots [7].',
          },
        ],
      },
      {
        type: 'h',
        text: 'Three ways agents get in',
      },
      {
        type: 'table',
        head: ['Route', 'How the agent works', 'What you control', 'It breaks when'],
        rows: [
          [
            'The screen',
            'Takes screenshots and clicks coordinates',
            'Clear visuals and a stable layout',
            'Layouts shift, overlays appear, targets are tiny',
          ],
          [
            'The structure',
            'Reads roles, names and states from the accessibility tree',
            'Semantic HTML, labels, status text',
            'Controls have no name, or updates happen silently',
          ],
          [
            'An API or MCP server',
            "Calls your product's functions directly",
            'Endpoints, permissions, rate limits',
            'Key actions are missing, or access relies on shared passwords',
          ],
        ],
      },
      {
        type: 'p',
        text: "Most products need the first two routes to work today, and the third for the jobs customers automate most often. MCP has become the usual way to expose actions to AI tools, with more than 20,000 public servers listed in directories. Security hasn't kept up: an analysis of 5,200 open-source MCP servers found that 53% relied on static credentials and only about 8.5% used OAuth [8].",
      },
      {
        type: 'img',
        src: 'writing/dual-audience-ui/1-two-readers.jpg',
        cap: 'Figure 1 · The same screen, as people see it and as an agent reads it (illustrative)',
      },
      {
        type: 'h',
        text: 'Four rules for the interface',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Use native elements and specific names.',
            text: 'Buttons are buttons, links are links, tables have header cells. Every control gets a label that says what it does: "Export March invoices", not "Go". Icon-only buttons need an accessible name.',
          },
          {
            label: 'Keep identifiers stable.',
            text: 'Class names generated by CSS-in-JS libraries change with every deploy. Roles, labels and, where needed, a dedicated attribute such as data-action="export-invoices" let scripts and agents find the same control next week.',
          },
          {
            label: 'Write results into the page.',
            text: 'When a background job finishes, say so in text inside a status region (role="status", which screen readers announce politely). "Export ready: 214 rows" can be read by a person, a screen reader and an agent. A spinner that vanishes can\'t.',
          },
          {
            label: 'Make destructive actions deliberate.',
            text: 'Deleting a workspace should require a typed confirmation, the pattern GitHub uses for deleting a repository, followed by an undo window. An agent trying to clear a filter should never be one click away from wiping data.',
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/dual-audience-ui/2-four-rules.jpg',
        cap: 'Figure 2 · Four rules, with examples',
      },
      {
        type: 'img',
        src: 'writing/dual-audience-ui/3-failures.jpg',
        cap: 'Figure 3 · Common agent failures and their fixes',
      },
      {
        type: 'h',
        text: 'Identity and permissions for agents',
      },
      {
        type: 'lead',
        text: "Fixing the interface lets agents use your product. You also need to decide what they're allowed to do.",
      },
      {
        type: 'list',
        items: [
          {
            label: 'Give agents their own access.',
            text: "An agent should get a scoped token that expires, not the user's password or an admin session. OAuth with narrow scopes is the common pattern.",
          },
          {
            label: 'Decide what needs a person.',
            text: 'Payments above a limit, deleting data and changing permissions should stop and ask for human confirmation, even when an agent starts them.',
          },
          {
            label: 'Label agent activity.',
            text: 'Record which actions an agent performed, so support can tell "the customer did this" from "the customer\'s agent did this".',
          },
          {
            label: "Don't block the agents you want.",
            text: 'Review your bot rules. Allow verified and signed agents, and use rate limits instead of blanket bans.',
          },
          {
            label: 'Watch your analytics.',
            text: 'Agent sessions distort funnels and conversion rates. Tag them and report them separately.',
          },
        ],
      },
      {
        type: 'p',
        text: "Nielsen Norman Group raises a harder question too: what happens when an agent's goal and your business goal split, for example when it skips the upgrade screen your growth team depends on [9]? Decide how to handle that on purpose. One option is to offer the same choice through your API, so an agent can present it to the person it works for.",
      },
      {
        type: 'h',
        text: 'A worked example',
      },
      {
        type: 'lead',
        text: "Picture a 20-person accounting firm with its own client portal. The details are illustrative, but the failures are the common ones. More of the firm's clients now send agents to download statements and upload receipts.",
      },
      {
        type: 'list',
        items: [
          {
            label: 'The audit.',
            text: "One afternoon, a developer asks an agent to complete the portal's five most common tasks: download a statement, upload a receipt, update an address, book a call and pay an invoice. It finishes two.",
          },
          {
            label: 'The failures.',
            text: 'The upload button is an icon with no name. The booking widget sits in an iframe, and its time slots are unnamed div elements. The payment dialog opens without announcing itself, and success is shown only as a green tick.',
          },
          {
            label: 'The fixes.',
            text: 'Two days of developer time: names on icon buttons, booking slots rebuilt as real buttons named by date and time, a titled dialog for payments with the result written as status text, and a typed confirmation on "close account".',
          },
          {
            label: 'The result.',
            text: 'The agent now finishes all five tasks. The same changes make the portal usable with a screen reader for the first time, which the firm had been meaning to fix for years.',
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/dual-audience-ui/4-audit.jpg',
        cap: 'Figure 4 · The client-portal audit, before and after (illustrative)',
      },
      {
        type: 'h',
        text: 'Where it goes wrong',
      },
      {
        type: 'table',
        head: ['Failure', 'What it looks like', 'Safeguard'],
        rows: [
          [
            'ARIA everywhere',
            'Roles on every div, labels that contradict the visible text',
            'Native HTML first; check with an automated tool such as axe or WAVE, then by hand',
          ],
          ['Blocking good agents', "Customers' agents are rejected as bots", 'Allow signed agents; rate-limit instead of banning'],
          [
            'Agents with too much access',
            'An agent runs inside an admin session',
            'Scoped, expiring tokens and confirmation for destructive actions',
          ],
          ['False success', "The agent reports a task as done when it wasn't", 'Explicit status text and clear error messages'],
          [
            'Testing only with people',
            'Agents fail in production on flows that pass human QA',
            'Run an agent through key workflows in every test cycle',
          ],
        ],
      },
      {
        type: 'h',
        text: 'When this matters less',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Small internal tools',
            text: 'with a handful of expert users and no automation demand. Fix labels and contrast, and skip the API work.',
          },
          {
            label: 'Visual creative tools',
            text: "such as canvas editors. An accessibility tree can't describe a drawing. Offer an API for the parts people want to automate.",
          },
          {
            label: 'Steps you deliberately keep human',
            text: ', such as legal signatures and identity checks. Make the human step explicit, and tell the agent clearly why it has to stop.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Playbook for small businesses',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Check your website.',
            text: "Run WebAIM's free WAVE checker and fix missing form labels, empty buttons and empty links first. They are the most common failures and the ones agents trip on most [4].",
          },
          {
            label: 'Try it with an agent.',
            text: 'Ask an AI agent to do the main task on your site, such as booking, buying or contacting you. Note where it stalls.',
          },
          {
            label: 'Check your bot settings.',
            text: 'If your site runs through Cloudflare, AI crawlers are blocked by default. Decide which ones to allow, and allow signed agents if your customers use them [6][7].',
          },
          {
            label: 'Ask vendors three questions',
            text: 'before buying software: does it work with a screen reader, does it have an API or MCP server, and can I give an agent limited access without sharing my password?',
          },
          {
            label: 'Keep a "people only" list',
            text: ', such as payments above a set amount and account deletion, and make sure your tools ask for confirmation on those.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Playbook for enterprise teams',
      },
      {
        type: 'table',
        head: ['Step', 'Owner', 'Output'],
        rows: [
          ['1. Run an agent through the ten most important workflows every week', 'QA lead', 'Pass rate per workflow'],
          [
            '2. Make accessibility errors a release gate',
            'Engineering lead',
            'Automated checks in the build pipeline and an error count per release',
          ],
          [
            '3. Build native semantics, stable action names and status regions into the design system',
            'Design system team',
            'Components that are agent-ready by default',
          ],
          ['4. Set up agent identity and scopes', 'Security and platform', 'OAuth scopes, expiring tokens, agent-tagged audit logs'],
          ['5. Expose the most-automated jobs through an API or MCP server', 'Product', 'Coverage of the top automated tasks'],
          ['6. Review bot policy with growth and security together', 'Security and growth', 'An allowlist that includes signed agents'],
        ],
      },
      {
        type: 'p',
        text: 'Track four numbers: agent task success rate, accessibility errors per release, the share of agent activity that comes through the API rather than the interface, and support tickets that mention automation.',
      },
      {
        type: 'close',
        text: "The products that win the next few years won't be the prettiest in a portfolio. They'll be the ones a script can run ten thousand times without an error, and a screen reader user can run once without help.",
      },
      {
        type: 'h',
        text: 'Sources and further reading',
        top: 'clamp(72px,10vw,104px)',
      },
      {
        type: 'src',
        label: 'Cited in this essay',
        items: [
          {
            text: 'Imperva (Thales). 2025 Bad Bot Report, summary (2025).',
            url: 'https://www.intelligentcio.com/me/2025/04/20/ai-fuels-hard-to-detect-bots-that-generate-half-of-internet-traffic-says-imperva/',
          },
          {
            text: 'Microsoft Playwright. MCP accessibility snapshots.',
            url: 'https://playwright.dev/mcp/snapshots',
          },
          {
            text: 'OpenAI. ChatGPT Atlas developer FAQ.',
            url: 'https://help.openai.com/en/articles/12627856',
          },
          {
            text: 'WebAIM. The WebAIM Million (2026).',
            url: 'https://webaim.org/projects/million/',
          },
          {
            text: 'Roselli, A. OpenAI, ARIA, and SEO: making the web worse (2025).',
            url: 'https://adrianroselli.com/2025/10/openai-aria-and-seo-making-the-web-worse.html',
          },
          {
            text: 'MIT Technology Review. Cloudflare will now block AI bots by default (2025).',
            url: 'https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/',
          },
          {
            text: 'Cloudflare. Signed agents (2025).',
            url: 'https://blog.cloudflare.com/zh-tw/signed-agents',
          },
          {
            text: 'Nordic APIs. 10 interesting MCP statistics, citing Astrix Security (2026).',
            url: 'https://nordicapis.com/10-interesting-mcp-statistics/',
          },
          {
            text: 'Nielsen Norman Group. AI agents as users.',
            url: 'https://nngroup.com/articles/ai-agents-as-users',
          },
        ],
      },
    ],
  },
  'death-of-double-diamond': {
    kicker: 'Essay 04',
    heading: 'The death of the Double Diamond',
    blocks: [
      {
        type: 'h',
        text: 'Six weeks for a two-day question',
      },
      {
        type: 'lead',
        text: 'A product team at a logistics software company is asked to add AI route suggestions for dispatchers. The plan follows the usual shape: two weeks of interviews, a week of affinity mapping, a week of journeys and personas, a week of wireframes. In week six, an engineer finally looks at the model the feature depends on. Each suggestion takes eight to twelve seconds, and the API allows ten requests a minute per customer account.',
      },
      {
        type: 'p',
        text: 'The wireframes show a suggestion on every one of the forty routes a dispatcher plans at six in the morning, appearing instantly. Six weeks of careful work rest on an assumption that one afternoon with engineering would have broken.',
      },
      {
        type: 'p',
        text: 'The example is illustrative, but most teams building AI features will recognize it. This essay is about getting to that afternoon first.',
      },
      {
        type: 'h',
        text: 'What the evidence says',
      },
      {
        type: 'list',
        items: [
          {
            label: 'The Double Diamond was never a calendar.',
            text: 'The Design Council drew it in 2003 and began presenting it in 2004. Its authors describe the work as codifying what good teams already did: going wide, narrowing down, going wide again and narrowing again [1]. Nothing in the diagram says six weeks.',
          },
          {
            label: 'Building got cheap.',
            text: "In the Spring 2026 UX Tools survey of nearly 1,500 designers, 59% said they had built their own tool or app with AI in the past six months, and 44% said AI-generated code made up more than half their building time [2]. The sample is the survey's own audience, so treat it as a direction rather than a census.",
          },
          {
            label: 'Mockups answer some questions well and others badly.',
            text: "A MeasuringU review of eleven studies found that low-fidelity prototypes surface most major usability problems. They are poor at predicting how long tasks take and miss problems that only appear with real interaction [3]. Layout questions survive the move to Figma. Timing questions don't, and AI features live or die on timing.",
          },
          {
            label: 'Waiting has hard limits.',
            text: "Nielsen's research puts about one second as the limit for keeping someone's flow of thought, and about ten seconds as the limit for holding their attention [4].",
          },
          {
            label: 'Working prototypes get better feedback.',
            text: 'A 2025 case study of a team prototyping a traffic-data tool with AI code generators found that people gave more detailed feedback on working prototypes shared by link than on sketches, which they treated as unfinished [5]. The same study reports the costs: generated code needed debugging, results drifted between sessions, and the tools pulled designs toward familiar patterns.',
          },
          {
            label: "Generated code isn't safe by default.",
            text: 'Veracode tested more than 100 language models on 80 coding tasks and found security flaws in 45% of the generated samples [6].',
          },
        ],
      },
      {
        type: 'h',
        text: 'What static mockups hide',
      },
      {
        type: 'lead',
        text: 'Figma is good at layout. It is bad at the conditions that break real products.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Waiting.',
            text: 'In a mockup, every screen appears instantly. In production a model call can take eight seconds or more.',
          },
          {
            label: 'Messy data.',
            text: 'Customers import files with missing fields, sixty-character company names and three date formats. Mock data always fits the twelve-column grid.',
          },
          {
            label: 'Limits and errors.',
            text: 'Rate limits, timeouts, partial results, empty accounts and costs per call.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Mockups also make meetings too easy. Everyone nods, because the sample data looks tidy.',
      },
      {
        type: 'img',
        src: 'writing/death-of-double-diamond/1-mockup-vs-code.jpg',
        cap: 'Figure 1 · The same screen as a mockup and as working code (illustrative)',
      },
      {
        type: 'h',
        text: 'The 72-hour loop',
      },
      {
        type: 'lead',
        text: 'Instead of six weeks of workshops before any code, run a 72-hour loop on the riskiest part of the idea. Each day ends with something specific.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Day 1: find the limits.',
            text: 'Sit down with engineering and write a one-page limits sheet: API rate limits, typical and slow response times, cost per call, which data exists and which fields are often empty.',
          },
          {
            label: 'Day 2: pick the riskiest screen.',
            text: 'Skip login and settings. Find the one screen where the user makes a high-stakes decision while waiting on the system, and write the question it has to answer. For example: will dispatchers wait ten seconds for a suggestion, or ignore it?',
          },
          {
            label: 'Day 3: build it in code and test it.',
            text: 'Use real components, realistic data and the real API, with its real delay. Put it in front of three to five people in thirty-minute sessions and watch what they do while they wait.',
          },
        ],
      },
      {
        type: 'p',
        text: 'If the interaction feels broken in code on Wednesday afternoon, no amount of polish in Figma will fix it by Friday.',
      },
      {
        type: 'img',
        src: 'writing/death-of-double-diamond/2-72-hours.jpg',
        cap: 'Figure 2 · Six weeks of discovery compared with a 72-hour loop',
      },
      {
        type: 'h',
        text: 'How to test a code prototype with users',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Use real tasks.',
            text: '"Plan tomorrow\'s routes", not "look around and tell me what you think".',
          },
          {
            label: 'Keep the real delay.',
            text: 'If production will take eight seconds, the prototype takes eight seconds. Mocking it away removes the thing you most need to learn.',
          },
          {
            label: 'Watch the waits.',
            text: 'Do people wait, click again, switch tabs or give up?',
          },
          {
            label: 'Run small rounds.',
            text: 'Three to five sessions, fix what you saw, test again the next day.',
          },
          {
            label: "Say it's a prototype.",
            text: 'Tell people things will break, so they report problems instead of apologizing for them.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Keep real customer data out of prototypes',
      },
      {
        type: 'lead',
        text: "Prototypes built in a day tend to get whatever data is nearest, and that is often a copy of production. European data protection guidance is clear that test and development environments need the same protection as production. The EDPS recommends avoiding real personal data in testing and using artificially created data instead, and Spain's regulator points to free generators such as Faker [7].",
      },
      {
        type: 'p',
        text: 'In practice, build a synthetic dataset that copies the shape of real data, including its missing fields, long names and odd formats, without containing real people. Treat prototype code as disposable. Anything moving toward production gets rebuilt, reviewed and security-scanned, given how often generated code contains flaws [6].',
      },
      {
        type: 'h',
        text: 'A worked example',
      },
      {
        type: 'lead',
        text: 'Back to the logistics team. This time they run the loop before any wireframes.',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Day 1.',
            text: 'The limits sheet shows eight to twelve seconds per suggestion and ten requests a minute per account. Forty routes would take at least four minutes to fill.',
          },
          {
            label: 'Day 2.',
            text: 'The riskiest screen is the 6:00 planning board, and the question is whether dispatchers will wait for suggestions.',
          },
          {
            label: 'Day 3.',
            text: 'In five sessions with a coded prototype on synthetic routes, dispatchers stop waiting after about three seconds and assign routes by hand.',
          },
          {
            label: 'The redesign.',
            text: "Suggestions are computed overnight for the next day's routes and are ready when the board opens. The model only runs live when a route changes during the day. The team has a different, better design after one week instead of six.",
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/death-of-double-diamond/3-worked-example.jpg',
        cap: 'Figure 3 · What three days of code changed (illustrative)',
      },
      {
        type: 'h',
        text: 'Where it goes wrong',
      },
      {
        type: 'table',
        head: ['Failure', 'What it looks like', 'Safeguard'],
        rows: [
          [
            'The prototype becomes the product',
            'Throwaway code ships because it "already works"',
            'Label prototypes clearly; rebuild and security-review before production',
          ],
          [
            'Skipping whether the problem matters',
            'A polished answer to a question nobody asked',
            'Keep short customer research before the loop',
          ],
          ['Clean fake data', 'The prototype works on tidy samples and fails on real files', 'Synthetic data that copies real messiness'],
          ['Real data in a demo tool', 'Customer records end up in a third-party prototyping service', 'Synthetic or anonymized data only'],
          ['Generic design', "The AI tool's default patterns replace your own", 'Review against your design system before testing'],
          [
            'Designers sidelined',
            'Engineers prototype alone and the UX questions go untested',
            'The designer owns the day-2 question and runs the sessions',
          ],
        ],
      },
      {
        type: 'h',
        text: 'When longer discovery is still right',
      },
      {
        type: 'list',
        items: [
          {
            label: "New markets or problems you don't understand yet.",
            text: "If you don't know who has the problem, code won't tell you.",
          },
          {
            label: 'Regulated or safety-critical work',
            text: 'in health, finance or aviation, where research is required and mistakes are expensive.',
          },
          {
            label: 'Hardware and anything costly to change',
            text: 'after launch.',
          },
          {
            label: 'Services that span many teams or organizations,',
            text: 'where the problem is coordination between people rather than screens.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Even then, run a 72-hour loop inside discovery on the riskiest technical assumption. It costs three days and often changes the questions the rest of the research should ask.',
      },
      {
        type: 'p',
        text: 'The Double Diamond already allows for this. Its stages were drawn as cycles, not a fixed schedule [1]. What changes is the material: the second diamond can now start in code instead of a mockup tool.',
      },
      {
        type: 'img',
        src: 'writing/death-of-double-diamond/4-diamonds.jpg',
        cap: 'Figure 4 · The Double Diamond with a code-first second half',
      },
      {
        type: 'h',
        text: 'Playbook for small businesses',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Write down the three tasks',
            text: 'the new tool must do well before you look at any vendor.',
          },
          {
            label: 'Ask for a working trial, not a demo.',
            text: 'Load a cleaned copy of your own data and try the three tasks yourself.',
          },
          {
            label: 'Time each task, waits included.',
            text: 'A tool that looks fast in a demo can be slow on your data.',
          },
          {
            label: 'Prototype small tools yourself.',
            text: 'AI app builders such as v0 or Bolt can produce a rough internal tool in an afternoon. Treat it as a test of the idea, not a finished system.',
          },
          {
            label: 'Never paste real customer lists into a prototype tool.',
            text: 'Make a fake copy with the same columns and some realistic mess.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Playbook for enterprise teams',
      },
      {
        type: 'table',
        head: ['Step', 'Owner', 'Output'],
        rows: [
          ['1. Cap discovery for AI features at two weeks', 'Product manager', 'A ranked list of the riskiest assumptions'],
          [
            '2. Require a limits sheet before the first design review',
            'Engineering lead',
            'Rate limits, latency, cost per call, data gaps',
          ],
          ['3. Provide safe data for prototypes', 'Data or platform team', 'Synthetic datasets and staging access with guardrails'],
          ['4. Set a prototype standard', 'Design lead', 'Real latency, realistic data, three to five sessions a round'],
          ['5. Separate prototypes from production', 'Security', 'A rebuild-and-scan rule for anything that ships'],
          ['6. Keep Figma for what it does well', 'Design team', 'Layout, design system and polish after the interaction works'],
        ],
      },
      {
        type: 'p',
        text: 'Track three numbers: time from kickoff to the first real-user test, assumptions disproved per week, and rework needed after launch.',
      },
      {
        type: 'close',
        text: "Stop using discovery as a reason not to build. Build to find out, and keep asking whether it's worth building at all.",
      },
      {
        type: 'h',
        text: 'Sources and further reading',
        top: 'clamp(72px,10vw,104px)',
      },
      {
        type: 'src',
        label: 'Cited in this essay',
        items: [
          {
            text: 'Design Council. History of the Double Diamond.',
            url: 'https://www.designcouncil.org.uk/our-resources/the-double-diamond/history-of-the-double-diamond/',
          },
          {
            text: 'UX Tools. State of Prototyping, Spring 2026 (n = 1,478).',
            url: 'https://www.uxtools.co/survey/2026/state-of-prototyping',
          },
          {
            text: 'MeasuringU. Does the fidelity of a prototype affect results?',
            url: 'https://measuringu.com/prototype-fidelity/',
          },
          {
            text: 'Nielsen, J. Response times: the 3 important limits. Nielsen Norman Group.',
            url: 'https://www.nngroup.com/articles/response-times-3-important-limits/',
          },
          {
            text: 'Li, T., Maheshwari, T., and Voelker, A. User-centered design with AI in the loop. ACM Collective Intelligence, 2025.',
            url: 'https://arxiv.org/abs/2507.21012',
          },
          {
            text: 'Veracode. 2025 GenAI Code Security Report (2025).',
            url: 'https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/',
          },
          {
            text: 'AEPD (Spanish Data Protection Agency). Personal data breaches: development and pre-production environments.',
            url: 'https://www.aepd.es/en/prensa-y-comunicacion/blog/data-breaches-development-and-pre-production-enviroments',
          },
        ],
      },
    ],
  },
  'chatbots-fail-enterprise': {
    kicker: 'Essay 05',
    heading: 'Why chatbots fail enterprise software',
    blocks: [
      {
        type: 'h',
        text: 'A Tuesday with the chat drawer',
      },
      {
        type: 'lead',
        text: 'An inventory manager at a distributor with twelve warehouses has a promotion starting on Friday. She opens the assistant panel in her inventory system and types a request to rebalance stock ahead of it. Three paragraphs come back. She asks two follow-up questions. Then the assistant says, "I\'ve created the transfer orders for you."',
      },
      {
        type: 'p',
        text: "She can't see which ones. She opens the transfer list, filters it by date, and checks fourteen orders one at a time against the stock levels on another screen. Twenty-five minutes later she trusts the result. (The example is illustrative, but most operations teams will recognize the shape of it.)",
      },
      {
        type: 'p',
        text: 'The AI did the calculation well. The interface around it made her do the checking the slow way. This essay is about moving AI out of the side panel and into the work.',
      },
      {
        type: 'h',
        text: 'What the evidence says',
      },
      {
        type: 'list',
        items: [
          {
            label: "Returns haven't followed the chat drawers.",
            text: "MIT's Project NANDA estimated in 2025 that about 95% of organizations saw no measurable business return on their generative AI spending. The report blamed tools that don't fit into workflows or learn from them, and found that workers who liked general chat tools for drafting turned them down for high-stakes work [1].",
          },
          {
            label: 'In-place beats the side panel.',
            text: 'In a 2026 study, an assistant that changed the live interface in place beat a side-panel chat assistant on task time, about 182 seconds against 242 on average, and reached 100% accuracy against 92% [2].',
          },
          {
            label: "Conversation isn't automatically easier.",
            text: 'When people updated a knowledge base by conversation or through a graphical interface, they rated the graphical interface easier, it was faster on average, and accuracy was similar [3].',
          },
          {
            label: 'Typing costs more than clicking.',
            text: 'The keystroke-level model, a long-standing way to estimate task time, gives about 1.1 seconds to point with a mouse, about 1.35 seconds to decide on an action, and a little over a quarter of a second per keystroke for an average typist [4]. Two filter clicks come to about 5 seconds. Typing "show only the West region for the last 30 days" takes about 15, before the model has even started.',
          },
          {
            label: 'People need to see why, and fix it fast.',
            text: "Microsoft Research's guidelines for human-AI interaction ask products to make clear why the system did what it did and to support efficient correction [5]. A chat transcript does neither well.",
          },
          {
            label: 'A text box hides what the tool can do.',
            text: 'As Amelia Wattenberger puts it in her essay on chatbots, "Good tools make it clear how they should be used" [6].',
          },
        ],
      },
      {
        type: 'h',
        text: 'Three reasons chat struggles here',
      },
      {
        type: 'p',
        text: "Dense data doesn't fit in a column. Twelve warehouses with capacity percentages read in a second as a grid. As three generated paragraphs, the one warehouse that's out of stock ends up in the last sentence.",
        segs: [
          {
            t: "Dense data doesn't fit in a column.",
            b: true,
          },
          {
            t: " Twelve warehouses with capacity percentages read in a second as a grid. As three generated paragraphs, the one warehouse that's out of stock ends up in the last sentence.",
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/chatbots-fail-enterprise/1-grid-vs-chat.jpg',
        cap: 'Figure 1 · The same answer as chat and as a grid (illustrative)',
      },
      {
        type: 'p',
        text: 'Typing is slow for routine actions. Typing wins for unusual requests that no button covers. For the filters and actions people use every day, it loses badly.',
        segs: [
          {
            t: 'Typing is slow for routine actions.',
            b: true,
          },
          {
            t: ' Typing wins for unusual requests that no button covers. For the filters and actions people use every day, it loses badly.',
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/chatbots-fail-enterprise/2-click-vs-type.jpg',
        cap: 'Figure 2 · Clicking versus typing the same request, estimated',
      },
      {
        type: 'p',
        text: "There's no proof. If you're moving a two-million-dollar budget or changing access on a production system, you need to see exactly what will change before it commits. \"I've updated those permissions\" is a claim. Undoing it means typing another request and hoping.",
        segs: [
          {
            t: "There's no proof.",
            b: true,
          },
          {
            t: ' If you\'re moving a two-million-dollar budget or changing access on a production system, you need to see exactly what will change before it commits. "I\'ve updated those permissions" is a claim. Undoing it means typing another request and hoping.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Patterns that put AI in the canvas',
      },
      {
        type: 'lead',
        text: 'Software developers already work this way. Tools such as Copilot Edits show AI-proposed changes as inline diffs in the code, with an accept or discard control on each change and an undo [7]. Business software can borrow the same idea, and a few related patterns.',
      },
      {
        type: 'table',
        head: ['Pattern', 'What it does', 'Good for'],
        rows: [
          [
            'Inline proposal',
            'Highlights the rows the AI wants to change, with before and after, accept per row',
            'Bulk edits, budgets, permissions, transfers',
          ],
          ['Inline suggestion', 'Shows a suggested value in the field, accepted with one key', 'Data entry, categorizing, tagging'],
          [
            'Bulk preview',
            'Summarizes "this will change 60 records, total unchanged" before applying',
            'Mass updates with many small changes',
          ],
          ['Explain this', 'A button beside a number opens the reason behind it', 'Metrics, anomalies, forecasts'],
          ['Command bar', 'Type an action and get the right form, filled in', "Rare actions people can't find"],
          ['Chat panel', 'Open questions, explanations, drafts', 'Research, help, writing'],
        ],
      },
      {
        type: 'p',
        text: 'The rule that connects them: when the AI proposes a change, show the change where the data lives, let the person edit it, and confirm once with an undo available afterwards.',
      },
      {
        type: 'img',
        src: 'writing/chatbots-fail-enterprise/3-inline-diff.jpg',
        cap: 'Figure 3 · An AI proposal shown as a diff inside the grid (illustrative)',
      },
      {
        type: 'h',
        text: 'A worked example',
      },
      {
        type: 'lead',
        text: 'Back to the inventory manager. The same request, redesigned.',
      },
      {
        type: 'p',
        text: 'On the promotion planning screen she clicks "Suggest transfers". The grid highlights fourteen proposed transfers, each showing the source warehouse, the destination and the quantity, with the stock level before and after. A summary line says the plan covers the forecast demand in every region. She changes two quantities because she knows a truck is already on its way to Denver, rejects one transfer and clicks Apply. Undo stays available for the rest of the day.',
      },
      {
        type: 'p',
        text: 'It takes four minutes. The checking still happens, but on the proposal, before anything changes, instead of afterwards in another screen.',
      },
      {
        type: 'img',
        src: 'writing/chatbots-fail-enterprise/4-worked-example.jpg',
        cap: 'Figure 4 · The same task in chat and in the canvas (illustrative)',
      },
      {
        type: 'h',
        text: 'Moving an existing chat feature into the canvas',
      },
      {
        type: 'lead',
        text: "If you already ship a chat drawer, you don't need to remove it. Use it as research.",
      },
      {
        type: 'list',
        items: [
          {
            label: 'Pull the logs',
            text: 'and group the requests into clusters.',
          },
          {
            label: 'Sort each cluster.',
            text: 'Is it a question (keep it in chat), an action on data the user can see (move it into the canvas), or a navigation request (send it to a command bar)?',
          },
          {
            label: 'Build the three most common actions',
            text: 'as in-canvas proposals.',
          },
          {
            label: 'Change what chat does with actions.',
            text: 'When the chat proposes a change, render the diff in the main screen instead of describing it in text.',
          },
          {
            label: 'Measure before and after',
            text: 'with the numbers in the enterprise playbook below.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Where it goes wrong',
      },
      {
        type: 'table',
        head: ['Failure', 'What it looks like', 'Safeguard'],
        rows: [
          ['Diff overload', '600 highlighted rows that nobody reads', 'Group and summarize, and require review only of high-impact rows'],
          ['Rubber-stamping', 'Apply gets clicked without a look', 'Show impact totals, and ask for a reason above a set threshold'],
          [
            'Hidden scope',
            "The AI changes records that aren't on screen",
            'List every affected record; nothing changes outside the preview',
          ],
          ["Undo that doesn't undo", 'Emails or orders already went out', 'Hold side effects until the confirmation window has passed'],
          ['Chat removed entirely', 'No place for open questions', 'Keep chat for questions, explanations and drafts'],
        ],
      },
      {
        type: 'h',
        text: 'When chat is the right tool',
      },
      {
        type: 'lead',
        text: "Chat earns its place for open-ended questions, explaining where a number came from, drafting text, finding something nobody can locate, onboarding help and one-off requests no button covers. Keep it for those. Just don't make it the only way in, and never let it commit a change the user can't see.",
      },
      {
        type: 'h',
        text: 'Playbook for small businesses',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Ask two questions of any AI feature',
            text: 'in the tools you use: before it changes my data, can I see exactly what will change, and can I undo it? If either answer is no, use that feature for drafting only.',
          },
          {
            label: 'Prefer suggestions you accept in bulk.',
            text: 'In bookkeeping, for example, AI-suggested categories that you review and accept in a list are safer than an assistant that "fixes" your books in the background.',
          },
          {
            label: 'Do the analysis in chat, the change in the app.',
            text: "Ask a general assistant to explain or summarize, then make the actual change in the tool's own screens, where you can see it.",
          },
          {
            label: 'Use this checklist when buying software:',
            text: 'a preview before changes, per-item accept or reject, undo, an activity history, and AI that respects the same permissions as your staff.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Playbook for enterprise teams',
      },
      {
        type: 'table',
        head: ['Step', 'Owner', 'Output'],
        rows: [
          ['1. List every action the AI can take that writes data', 'Product manager', 'An inventory of AI write actions'],
          ['2. Require a visible preview and undo for each one', 'Design lead', 'A design-system pattern for AI proposals'],
          ['3. Cluster chat logs into questions, actions and navigation', 'Research', 'The top actions to move into the canvas'],
          ['4. Build the top three actions as in-canvas proposals', 'Product and engineering', 'Shipped proposals inside the main screens'],
          ['5. Hold side effects until confirmation', 'Engineering', 'Delayed emails, orders and notifications'],
          ['6. Review and expand', 'Product manager', 'The next set of actions to move'],
        ],
      },
      {
        type: 'p',
        text: "Track four numbers. Time to a correct result is the headline. Edit rate shows how often people change the AI's proposed values, and if it's near zero, check for rubber-stamping. Undo rate shows how often applied changes get reversed. The last is the share of AI writes that go through a preview, and the goal is all of them.",
      },
      {
        type: 'close',
        text: 'Let the AI do the heavy calculation in the background. Keep the controls, and the proof, where the work happens.',
      },
      {
        type: 'h',
        text: 'Sources and further reading',
        top: 'clamp(72px,10vw,104px)',
      },
      {
        type: 'src',
        label: 'Cited in this essay',
        items: [
          {
            text: 'MIT Project NANDA. The GenAI Divide: State of AI in Business 2025, as reported by Virtualization Review (2025).',
            url: 'https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide',
          },
          {
            text: 'Beyond chat and clicks: GUI agents for in-situ assistance via live interface transformation. arXiv, 2026.',
            url: 'https://arxiv.org/pdf/2604.14668',
          },
          {
            text: 'Voice CMS: updating the knowledge base of a digital assistant through conversation. arXiv, 2025.',
            url: 'https://arxiv.org/pdf/2505.22303',
          },
          {
            text: 'Card, S., Moran, T., and Newell, A. The keystroke-level model (1980), summary.',
            url: 'https://en.wikipedia.org/wiki/KLM-GOMS',
          },
          {
            text: 'Amershi, S., et al. Guidelines for human-AI interaction. CHI 2019.',
            url: 'https://dl.acm.org/doi/10.1145/3290605.3300233',
          },
          {
            text: 'Wattenberger, A. Why chatbots are not the future.',
            url: 'https://wattenberger.com/thoughts/boo-chatbots',
          },
          {
            text: 'Visual Studio Code. Introducing Copilot Edits (2024).',
            url: 'https://code.visualstudio.com/blogs/2024/11/12/introducing-copilot-edits',
          },
        ],
      },
    ],
  },
  'non-deterministic-state-design': {
    kicker: 'Essay 06',
    heading: 'Designing for non-deterministic states',
    blocks: [
      {
        type: 'h',
        text: 'Forty invoices and a green tick',
      },
      {
        type: 'lead',
        text: "An accounts-payable clerk uploads forty supplier invoices to her company's new AI capture feature. A spinner turns for twenty-five seconds with no explanation, so she clicks upload again and creates forty duplicates. When the results arrive, every invoice shows the same green tick. Two of them have the wrong amount, and nothing on the screen says which ones the model found hard to read. She finds them at month end, when the books don't balance.",
      },
      {
        type: 'p',
        text: 'The example is illustrative, but each part of it is common. The model did most of the work well. The interface treated a slow, uncertain process as if it were a fast, certain one.',
      },
      {
        type: 'p',
        text: "Design systems were built for certainty. A button is blue, so you can click it. Click it and a request comes back with a 200 or a 500. Every state has a component: default, loading, success, error. Generative models don't work that way. The same request can return in 400 milliseconds or after a six-second reasoning chain, and the answer can be right or wrong in a way that reads exactly like right. This essay covers the three things a design system needs for that: a plan for the wait, a plan for being unsure, and a plan for being wrong.",
      },
      {
        type: 'h',
        text: 'What the evidence says',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Waiting has hard limits.',
            text: "Jakob Nielsen's three response-time limits say about 0.1 second feels instant, about 1 second keeps a person's train of thought intact, and about 10 seconds is as long as attention holds. He calls a spinner a last resort, because it shows activity without showing progress [1].",
          },
          {
            label: 'Models are poor judges of their own confidence.',
            text: 'Asked how sure they are, language models mostly answer between 80% and 100%. A study presented at ICLR 2024 found that LLMs "tend to be highly overconfident when verbalizing their confidence". Sampling several answers and checking whether they agree helped somewhat, but no method was reliable on its own [2].',
          },
          {
            label: 'Citations can end checking instead of supporting it.',
            text: 'In a 2026 study of how people use integrated AI assistants, citations raised trust and often ended any further checking, even when some of the cited sources were irrelevant or misleading [3].',
          },
          {
            label: 'Failure should be ordinary.',
            text: 'Google\'s People + AI Guidebook advises explaining why a result couldn\'t be given, offering a path forward, and letting people take over when the AI fails. Its aim is to make failure "safe, boring, and a natural part of the product" [4].',
          },
          {
            label: 'Confidence displays need a purpose.',
            text: 'The same guidebook says to show confidence only when it changes what the person should do, and to prefer plain categories tied to an action over raw percentages [5].',
          },
        ],
      },
      {
        type: 'h',
        text: 'Part one: the wait',
      },
      {
        type: 'lead',
        text: "Design the wait in stages, using Nielsen's limits as the boundaries.",
      },
      {
        type: 'list',
        items: [
          {
            label: 'Under 0.1 second: acknowledge.',
            text: "The click registers at once. The button changes state and can't be pressed again, which prevents the duplicate upload.",
          },
          {
            label: 'Up to about 1 second: hold the space.',
            text: "A skeleton of the result reserves room, so the layout doesn't jump when the answer arrives.",
          },
          {
            label: 'From 1 to 10 seconds: show the work.',
            text: "Name what the system is actually doing: reading the invoices, checking 12 of 40, matching suppliers. If the output is text, stream it so the first words arrive quickly. If it's a list, show items as they finish.",
          },
          {
            label: 'Past 10 seconds: let go.',
            text: "Move the job to a visible queue, offer cancel, and tell the person when it's done, so they can work on something else.",
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/non-deterministic-state-design/1-latency.jpg',
        cap: 'Figure 1 · A latency budget for AI features',
      },
      {
        type: 'h',
        text: 'Part two: being unsure',
      },
      {
        type: 'lead',
        text: "Not every answer deserves the same treatment. A useful pattern is confidence tiers: act automatically when the system is very likely right, ask when it might not be, and hand back to manual input when it probably isn't.",
      },
      {
        type: 'list',
        items: [
          {
            label: 'High: act, and leave a trail.',
            text: 'Apply the result automatically, record it in an audit log, and keep undo in view.',
          },
          {
            label: 'Medium: ask, and point.',
            text: 'Show a confirmation card that highlights only the fields the model is unsure about, so the person checks two fields instead of twenty.',
          },
          {
            label: 'Low: hand back control.',
            text: "Don't guess. Show the standard form, ideally with the source beside it, and let the person enter the data.",
          },
        ],
      },
      {
        type: 'img',
        src: 'writing/non-deterministic-state-design/2-tiers.jpg',
        cap: 'Figure 2 · Three confidence tiers, with example screens',
      },
      {
        type: 'p',
        text: "The tiers only work if the scores mean something, and a model's opinion of itself doesn't [2]. Set the cutoffs from your own measurements. Run the feature on a labeled sample of real cases, check how often it's right at each score, and choose the cutoffs by what a mistake costs. A reasonable starting point is to auto-apply above 85% measured accuracy and ask between 50% and 85%, then tighten for anything involving money, access or legal commitments. A suggested tag can go automatic long before an invoice amount should. Measure again every time the model changes.",
      },
      {
        type: 'img',
        src: 'writing/non-deterministic-state-design/3-calibrate.jpg',
        cap: 'Figure 3 · How to set confidence thresholds',
      },
      {
        type: 'h',
        text: 'Part three: being wrong',
      },
      {
        type: 'lead',
        text: "Calibrated tiers reduce mistakes. They don't remove them. Design for the answer that is wrong but looks right.",
      },
      {
        type: 'list',
        items: [
          {
            label: 'Make sources checkable, not decorative.',
            text: 'Link a citation to the exact passage, cell or field it came from. A badge that says "3 sources" invites trust without checking [3].',
          },
          {
            label: 'Make correction cheap.',
            text: 'Let people fix a value where they see it, and feed corrections back into your measurements.',
          },
          {
            label: 'Support retry, and say results can differ.',
            text: 'Keep the previous answer so people can compare. For high-stakes extraction, running the task twice and flagging disagreements is a practical check [2].',
          },
          {
            label: 'Explain the failure and offer the next step.',
            text: '"This scan is too blurry to read. Enter the amount below, or upload a clearer copy" beats a generic error [4].',
          },
          {
            label: 'Never hide automatic actions.',
            text: 'Send a short daily summary of what the system did on its own, with a way to undo each item.',
          },
        ],
      },
      {
        type: 'h',
        text: 'A component spec for AI states',
      },
      {
        type: 'lead',
        text: 'These are the states a design system needs on top of the usual default, loading, success and error.',
      },
      {
        type: 'table',
        head: ['State', 'When it appears', 'What the person sees', 'Must include'],
        rows: [
          ['Pending', 'First 0.1 second', 'The control changes and the item is marked pending', 'Protection against submitting twice'],
          ['Working', '1 to 10 seconds', 'Named steps and partial results', 'Step labels and a cancel option'],
          ['Queued', 'Past 10 seconds', 'The job in a visible queue', 'A notification and a link back'],
          ['Streaming', 'Text is arriving', "Text appearing as it's generated", 'A stop button'],
          ['Needs review', 'Medium confidence', 'The result with uncertain fields highlighted', 'Accept or edit for each field'],
          ['Applied automatically', 'High confidence', 'A quiet confirmation', 'An undo and an audit entry'],
          ['Handed back', 'Low confidence', 'The standard form, with the source beside it', 'A short reason why'],
          [
            'Failed',
            "The model couldn't produce a result",
            'A plain-language reason',
            'A next step: retry, upload again or enter manually',
          ],
        ],
      },
      {
        type: 'h',
        text: 'A worked example',
      },
      {
        type: 'lead',
        text: 'Back to the clerk. The same forty invoices, redesigned with those states.',
      },
      {
        type: 'p',
        text: 'She uploads them, and the button changes to "Reading 40 invoices" and can\'t be pressed again. A progress line counts them off: 12 of 40, 27 of 40. After a minute and forty seconds the results are sorted into three groups. The team set the tiers from accuracy measured on 500 past invoices.',
      },
      {
        type: 'list',
        items: [
          {
            label: '31 filed automatically',
            text: ', each logged with an undo and listed in the daily summary.',
          },
          {
            label: '7 need review',
            text: ', with the uncertain amounts and due dates highlighted. She checks them in about six minutes.',
          },
          {
            label: '2 handed back.',
            text: 'They were blurry scans, shown as the standard form with the image beside it.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Month end balances on the first try.',
      },
      {
        type: 'img',
        src: 'writing/non-deterministic-state-design/4-worked-example.jpg',
        cap: 'Figure 4 · Forty invoices sorted into tiers (illustrative)',
      },
      {
        type: 'h',
        text: 'Where it goes wrong',
      },
      {
        type: 'table',
        head: ['Failure', 'What it looks like', 'Safeguard'],
        rows: [
          [
            'Uncalibrated thresholds',
            'The model says 95% and is wrong one time in five',
            'Measure accuracy on a labeled sample before setting tiers',
          ],
          [
            'Drift after an update',
            'Accuracy changes quietly with a new model version',
            'Re-measure on every update, and watch how often people edit results',
          ],
          [
            'Review fatigue',
            'So many medium items that people approve them without looking',
            'Tune the cutoffs, and batch reviews by field',
          ],
          ['Citation theater', 'A source badge is trusted and never opened', 'Link to the exact source, and spot-check regularly'],
          ['Double submission', 'Duplicates created during a long wait', 'Disable the control, and make jobs safe to repeat'],
          ['Invisible automation', 'Changes applied that nobody knew about', 'A daily summary with an undo for each item'],
        ],
      },
      {
        type: 'h',
        text: 'When not to automate',
      },
      {
        type: 'lead',
        text: "Keep a person making the decision, whatever the confidence score, for legal commitments, payments above a set limit, anything that can't be undone, and decisions about people, such as hiring, credit or access to services. In those cases the AI can prepare and explain. It shouldn't apply.",
      },
      {
        type: 'h',
        text: 'Playbook for small businesses',
      },
      {
        type: 'list',
        items: [
          {
            label: 'Check how a tool handles doubt.',
            text: "When an app reads receipts, sorts bookkeeping categories or fills in contacts, does it show which fields it's unsure about, and can you undo what it did? If not, treat everything it produces as a draft.",
          },
          {
            label: 'Review high-stakes fields for the first month.',
            text: "Amounts, dates and bank details first. After a month you'll know where the tool is reliable.",
          },
          {
            label: "Don't click twice during a long wait.",
            text: 'If a tool gives no sign of progress, wait or check its history before trying again, and tell the vendor.',
          },
          {
            label: 'Keep a list of what stays manual',
            text: ', such as payments above a limit and anything sent to a customer.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Playbook for enterprise teams',
      },
      {
        type: 'table',
        head: ['Step', 'Owner', 'Output'],
        rows: [
          ['1. Add the AI states to the design system', 'Design system team', 'Components for each state in the spec above'],
          [
            '2. Give every AI feature a latency budget',
            'Product and engineering',
            'Targets for typical and slow responses, tested at the slow end',
          ],
          ['3. Build a labeled evaluation set for each feature', 'Data team', 'A few hundred real cases with known answers'],
          ['4. Set tiers from measured accuracy, weighted by stakes', 'Product, risk and data', 'Documented cutoffs per field'],
          ['5. Re-measure on every model update', 'Data team', 'Updated accuracy per tier before release'],
          ['6. Log every automatic action with an undo', 'Engineering', 'An audit trail and daily summaries'],
        ],
      },
      {
        type: 'p',
        text: 'Track five numbers: how often people edit results in each tier, the undo rate on automatic actions, slow-end response time, how many people abandon during waits, and the gap between predicted and measured accuracy.',
      },
      {
        type: 'close',
        text: 'Clean screens are the easy part now. The real work is making software feel dependable when the engine underneath is not.',
      },
      {
        type: 'h',
        text: 'Sources and further reading',
        top: 'clamp(72px,10vw,104px)',
      },
      {
        type: 'src',
        label: 'Cited in this essay',
        items: [
          {
            text: 'Nielsen, J. Response times: the 3 important limits. Nielsen Norman Group.',
            url: 'https://www.nngroup.com/articles/response-times-3-important-limits/',
          },
          {
            text: 'Xiong, M., et al. Can LLMs express their uncertainty? ICLR 2024.',
            url: 'https://arxiv.org/abs/2306.13063',
          },
          {
            text: 'Seymour, W., Jenkins, A., Coté, M., and Such, J. Beliefs and misconceptions around integrated conversational AI. CUI 2026.',
            url: 'https://arxiv.org/pdf/2605.14849',
          },
          {
            text: 'Google PAIR. People + AI Guidebook: Errors + Graceful Failure.',
            url: 'https://pair.withgoogle.com/chapter/errors-failing/',
          },
          {
            text: 'Google PAIR. People + AI Guidebook: Explainability + Trust.',
            url: 'https://pair.withgoogle.com/chapter/explainability-trust/',
          },
        ],
      },
    ],
  },
};
