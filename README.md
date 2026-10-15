# olgasirenko.com — About page

Production build of `project/Olga Sirenko About.dc.html` (Claude Design handoff). Plain HTML and CSS with no framework or build step, so the files are deployed exactly as they are here.

```
site/
├── index.html        page markup, SEO/JSON-LD, ~10 lines of JS for the theme toggle
├── css/styles.css    design tokens (light + dark), layout, components
├── fonts/            self-hosted WOFF2: Fraunces, IBM Plex Sans, IBM Plex Mono
├── images/           portrait-about.jpg (900×900)
└── favicon.svg       "OS" monogram
```

## Run locally
```
python3 -m http.server -d site 8000   # or: npx serve site
```

## Deploy
Upload the contents of `site/` as the web root on any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages or S3). There's no build command, and the output directory is `site`.

## Behaviour
- Theme: dark by default. The toggle sets `data-theme` on `<html>` and saves the choice to `localStorage` under the key `os-site:theme`. An inline script in `<head>` applies the saved theme before first paint.
- Motion uses the design system's spring easing and is turned off under `prefers-reduced-motion`.
- The page makes no network calls beyond its own files: icons are inline SVGs copied from Material Symbols paths, and the fonts are self-hosted.

## Before launch
- Point DNS for `olgasirenko.com` at the host and enable HTTPS.
- Confirm that the `hello@olgasirenko.com` mailbox receives mail.
- Optional: add a 1200×630 Open Graph image and reference it with `og:image`.
