# Handoff: Advisory page

## Task for Claude Code
Implement the **Advisory** page in `Lanova/olgasirenko-site` (Vite + React + TS, branch `main`) as a `/advisory` route, then commit and push (branch `advisory-page` unless told otherwise).

`Advisory.dc.html` is a **hi-fi HTML design reference** (open via any static server; needs `support.js` + `_ds/`). Recreate it in the repo's React stack using existing `src/styles.css` tokens and `public/fonts/`. All copy lives in the constants at the top of the file's logic script (`DELIVERABLES`, `CHURN`, `EVALUATE`, `STEPS`, `FAQS`, and `tracks` in `renderVals`) — move to `src/data/advisory.ts` **verbatim**.

Fidelity: high. Match type, color, spacing, motion. Light + dark themes both required (toggle persists in localStorage, defaults to OS).

## Sections (top → bottom, 1px `--line` hairline between sections, section padding `clamp(80px,11vw,160px)` vertical, container 1152px, side padding `clamp(20px,5vw,48px)`)
1. **Hero** — Kicker with dot · H1 Fraunces 600 `clamp(2.2rem,4.4vw,3.1rem)/1.08`, italic 400 cyan accent "latency and state transitions." · sub 17/1.6 muted, max 660px · primary pill button "Request an Audit ↓" → opens Audit modal.
2. **The Architectural Gap** — 2-col flex (heading left, body right 1.4×). Body + "Churn happens when" mono label + numbered list (mono violet 01–04, 40px col, hairlines between rows, numbers vertically centered) + closing paragraph muted.
3. **Deliverables** — 3 cards (DS `Card`): italic violet Fraunces 40px number, H3 title, 2 bullets with 5px cyan dots.
4. **What We Evaluate** — 4-col auto-fit grid, each item: hairline top, 18px/600 title, muted body. No cards.
5. **Two tracks** (`#intake`) — 2 equal-height cards: cyan kicker "Track A: Fixed Sprint" / "Track B: Ongoing & Fractional", H2 title, mono sub, 3 check rows with hairlines, button pinned to bottom. A = primary "Request 48-Hr Audit →" (opens Audit modal). B = secondary "Book 30-Min Discovery Call →" (opens Call modal).
6. **How It Works** — 3 steps, hairline top, italic violet number + mono uppercase timing, title, body.
7. **Founder FAQ** — heading left, accordion right (5 items, +/− icon, one open at a time, first open by default).
8. **Closing card** — centered: kicker, H1, muted body, text link "Email: hello@olgasirenko.com →" → `mailto:hello@olgasirenko.com?subject=Advisory%20Question` (violet, 35% underline → solid on hover).

## Modals
Shared: fixed overlay, scrim `color-mix(var(--night) 45%, transparent)` + `backdrop-filter: blur(8px)`; dialog `--card` bg, 1px `--line`, radius 20px, `--shadow-2`; enter = translateY(16px) scale(.98) → none, 450ms `cubic-bezier(0.16,1,0.3,1)`; closes on ×, scrim click, Esc; locks body scroll; returns focus to trigger; `role="dialog" aria-modal`.

**Audit modal (max 600px):** title "Request 48-Hour Architecture Audit", sub, 3 required inputs (Work email · Product name & live/staging URL · Primary bottleneck / drop-off point), NDA checkbox default checked, full-width primary "Submit Audit Request →", mono micro-copy. Validation error under field 3. Success state: check badge, "Request received.", Done + Edit request. Wire submit to a backend/form service (Formspree, Tally API, serverless fn) — not wired in the design.

**Call modal (max 880px, height min(760px, 100vh−32px)):** header "30-Min Architecture & Advisory Consultation" + sub, then full-bleed iframe of **Google Calendar appointment schedule** (`https://calendar.google.com/calendar/appointments/schedules/<ID>?gv=true`). Put the URL in an env/config constant. Intake questions are configured inside Google Calendar's booking form.

## Tokens
See `_ds/.../tokens/colors.css` (light `:root`, dark `[data-theme="dark"]`). Fonts: Fraunces (display), IBM Plex Sans (body), IBM Plex Mono (kickers, numbers, labels). Radii 12 / 20 / full. Buttons 44px pills.
