# Olga Sirenko · Work page

Standalone export of the Work (home) page from the Site v2 design.

## Run
Open `index.html` in a browser, or serve the folder (`npx serve .`) so fonts load reliably.

## Structure
- `index.html` — the page markup (hero, strengths, Selected work bands, contact, footer) plus the lock dialog.
- `css/page.css` — page-level styles: dark-theme overrides, card hover, lock dialog.
- `ds/` — the Olga Sirenko design system: `styles.css` imports the tokens (colors, type, spacing, effects, base) and the Material Symbols icon font; `fonts/` holds Fraunces and IBM Plex.
- `js/main.js` — theme toggle (saved per visitor) and the access-code gate for locked case studies.
- `assets/case/` — card images at full resolution.

## Behaviour
- Theme: starts dark; the header button switches light/dark.
- Cards: Vividly and Quantum Metric (except Interactions & Visible) ask for the access code first. Code: `ACCESS2026` (set in `js/main.js`). It is checked in the browser, so it keeps casual visitors out but is not real security.
- Links still to build: `about.html`, `writing.html`, `advisory.html`, and `case-studies/*.html` (vividly-hub, auto-pii, visible, distributed-platforms).
- Styles are mostly inline on the elements, as exported from the design; move them into classes as you develop.
