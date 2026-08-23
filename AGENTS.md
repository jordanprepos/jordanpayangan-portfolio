# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for Christopher Jordan Timothy Payangan (QA Engineer, Fintech & OpenAPI
Banking). It is a **single self-contained static HTML page** — no build step, no backend, no
package.json, no dependencies to install. Hosted on GitHub Pages from `main` (root); any push to
`main` republishes the live site at https://jordanprepos.github.io/jordanpayangan-portfolio/.

## Running locally

No tooling required. Either open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8777
# then open http://127.0.0.1:8777
```

There is no build, lint, or test command — there is no toolchain in this repo. Validate changes by
opening the page in a browser (or the `run` skill) and checking each of the 3 themes.

## Architecture

Everything lives in **`index.html`** (~850 lines), split into three parts in this order:

1. **`<style>` (lines ~30-235)** — all CSS. Theming is done entirely through CSS custom properties
   scoped by `[data-theme="..."]` selectors (`minimal`, `dark`, `corporate`), each defining
   `--t-bg`, `--t-fg`, `--t-primary`, `--t-secondary`, `--t-accent`, `--t-border`, `--t-surface`,
   `--t-muted`, `--font-heading`, `--t-radius`. Every themed element reads these vars — there are no
   hardcoded per-theme style blocks elsewhere. To add/adjust a theme, edit the `:root`/`[data-theme=...]`
   variable block only.
2. **Static markup (lines ~238-486)** — the page skeleton (header/nav, hero, section containers).
   Content-bearing containers (e.g. `#statGrid`, `#skillGrid`, `#timeline`, `#eduGrid`,
   `#projectGrid`, `#navDesktop`) are empty in the HTML and are populated by JS at runtime.
3. **`<script>` (lines ~487-853)**, one IIFE, no framework, no modules:
   - **Data arrays near the top** (`navLinks`, `stats`, `aboutCards`, `skillGroups`, `experience`,
     `education`, `projects`, `heroImages`, `overlays`) are the single source of truth for all page
     content. **To update site content (a new job, project, skill, cert), edit these arrays** —
     there is no CMS or separate data file.
   - **`render*()` functions** turn each data array into HTML via string templates and `esc()` for
     escaping, then inject with `innerHTML`. All are called once at the bottom of the IIFE.
   - **Theme switching** (`applyTheme`) sets `data-theme` on `#root`, swaps the hero background image
     per theme (`heroImages`), and persists the choice to `localStorage` under key `cv-theme`.
   - **Contact form**: posts to Web3Forms (`https://api.web3forms.com/submit`) using
     `WEB3FORMS_KEY`. If that key still has the placeholder prefix `REPLACE_WITH_`, the form falls
     back to opening the visitor's mail client via a `mailto:` link instead of failing silently —
     preserve that fallback if touching this code.
   - **Scroll-reveal** uses `IntersectionObserver` on `[data-reveal]` elements, added by the
     `render*()` functions; degrades gracefully (no-op) if unsupported.

`assets/` holds the downloadable CV PDF; `uploads/` holds the hero images (per theme) and
certificate images referenced from the `education` array's `href` fields.

## Notes

- No React/JS framework, no bundler, no npm scripts — do not introduce build tooling for small
  content or style changes.
- A previous **React + FastAPI + MongoDB** version of this site (via Emergent) is preserved on the
  `react-fullstack` branch, not on `main`. Don't mix patterns from that stack into `index.html`.
- Keep new content changes inside the existing data-array + render-function pattern rather than
  hand-writing new HTML into the static markup section.
