# olgasirenko.com — React Application

Personal portfolio and about page for Olga Sirenko — Product Design Leader & AI Systems Architect.

Rewritten as a modular React application using Vite and TypeScript, faithfully preserving the Calm Editorial design system, typography, dark/light theme persistence, responsive layouts, and SEO structured metadata.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Custom CSS design tokens with support for dark & light themes, fluid typography (`clamp`), spring motion easing, and glassmorphism.
- **Typography:** Self-hosted Fraunces, IBM Plex Sans, and IBM Plex Mono webfonts.

## Project Structure
```
├── public/
│   ├── favicon.svg          # "OS" monogram SVG icon
│   ├── fonts/               # Self-hosted WOFF2 fonts (Fraunces, IBM Plex Sans/Mono)
│   ├── images/              # Portrait photo (portrait-about.jpg)
│   └── writing/<slug>/      # Essay figure images
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Sticky blur header: monogram, About/Writing nav, theme toggle, reading progress
│   │   ├── Hero.tsx         # Hero section with headline, lede, and portrait with duotone glow
│   │   ├── Principles.tsx   # 4 core operating principles & leadership cards
│   │   ├── Career.tsx       # Career trajectory & impact timeline
│   │   ├── Contact.tsx      # Contact CTA card with email and LinkedIn links
│   │   ├── Footer.tsx       # Footer with square monogram and location info
│   │   └── writing/
│   │       ├── EssayBlocks.tsx  # Renders an essay's content blocks (paragraphs, lists, tables, figures…)
│   │       ├── Figures.tsx      # Hand-built figures for "The Death of Hierarchical Navigation"
│   │       └── icons.tsx        # Inline Material Symbols arrows
│   ├── pages/
│   │   ├── AboutPage.tsx    # About (home)
│   │   ├── WritingPage.tsx  # Writing list
│   │   └── ArticlePage.tsx  # Single essay
│   ├── data/
│   │   ├── portfolioData.ts # About page content
│   │   └── essays.ts        # Writing: article list + essay content
│   ├── hooks/
│   │   ├── useTheme.ts      # Theme management hook with localStorage sync (`os-site:theme`)
│   │   └── useRoute.ts      # Hash routes: #/ (About), #/writing, #/writing/<slug>
│   ├── types.ts             # TypeScript definitions
│   ├── styles.css           # Design tokens, themes, layouts, and components
│   ├── App.tsx              # Main application shell
│   └── main.tsx             # React DOM entry point
├── index.html               # HTML shell, pre-paint theme script, and Person JSON-LD
├── package.json             # NPM scripts and dependencies
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite server configuration (port 3000)
```

## Features
- **Theme Toggle:** Supports Dark (default) and Light mode, persisting preference to `localStorage` under `os-site:theme` with zero flash of unstyled theme on initial load.
- **Accessible & Responsive:** Semantic HTML (`main`, `header`, `section`, `article`, `figure`, `footer`), skip-to-content anchor, high-contrast focus rings, and responsive typography.
- **SEO & Structured Data:** OpenGraph, Twitter card tags, and Schema.org `Person` JSON-LD data.

## Writing
- Routes use the URL hash (`#/writing`, `#/writing/<slug>`) so they work on GitHub Pages without server rewrites.
- **Add an essay:** add its entry to `articles` in `src/data/essays.ts` (newest first; `t1`/`t2`/`t3` split the page title), add its content under the same slug in `essays`, and put images in `public/writing/<slug>/`. Block types are listed in `EssayBlock` in `src/types.ts`.
- Each article has a reading-progress bar, "Download PDF" (prints a light-theme copy), "Discuss on LinkedIn" and a "Next article" card that slides to the next essay.

## Scripts
- `npm run dev`: Starts local Vite development server on port 3000.
- `npm run build`: Type-checks with TypeScript and compiles production bundle to `dist/`.
- `npm run preview`: Previews the production build locally.
