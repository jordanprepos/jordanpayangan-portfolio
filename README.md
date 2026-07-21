# Christopher Jordan — QA Engineer · Portfolio

Personal portfolio site for **Christopher Jordan Timothy Payangan**, a QA Engineer specializing in
Fintech & OpenAPI Banking.

🔗 **Live:** https://jordanprepos.github.io/jordanpayangan-portfolio/

---

## Tech

A single self-contained static page — **no build step, no backend, no dependencies to install**.

| | |
|---|---|
| Markup / styling | Hand-written HTML + CSS (CSS custom properties for theming) |
| Behaviour | Vanilla JavaScript (no framework) |
| Contact form | [Web3Forms](https://web3forms.com) (serverless form endpoint) |
| Hosting | GitHub Pages |

## Features

- Single-page layout — Hero, About, Skills, Experience, Education & Certifications, Projects, Contact.
- **3 switchable themes** (Minimal / Dark / Corporate), persisted in `localStorage`.
- Responsive down to mobile, with a collapsible nav.
- Scroll-reveal animations via `IntersectionObserver` (degrades gracefully without JS support).
- Downloadable CV (PDF) and viewable certificates — all assets self-hosted.

## Structure

```
index.html    # the entire site: markup, styles, data and behaviour
assets/       # CV PDF
uploads/      # portrait, certificates, hero background images
```

All content (skills, experience, education, projects) lives in plain JS arrays near the bottom of
`index.html` — edit those to update the site.

## Running locally

No tooling required. Either open `index.html` directly, or serve it:

```bash
python3 -m http.server 8777
# then open http://127.0.0.1:8777
```

## Contact form setup

The form posts to Web3Forms. To enable it, get a free access key at
[web3forms.com](https://web3forms.com) and replace the placeholder in `index.html`:

```js
var WEB3FORMS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";
```

Until a real key is set, the form tells visitors to email directly instead.

## Deploying

Hosted on **GitHub Pages** from the `main` branch (root). Any push to `main` republishes the site.

---

## Previous full-stack version

This site was originally built as a **React + FastAPI + MongoDB** application (generated with
[Emergent](https://emergent.sh)). That version is preserved on the
[`react-fullstack`](https://github.com/jordanprepos/jordanpayangan-portfolio/tree/react-fullstack)
branch — React 19 (CRA + CRACO), Tailwind, Framer Motion, shadcn/ui, plus a FastAPI backend with a
MongoDB-backed `/api/contact` endpoint.

It was replaced on `main` by this static build so the site can be hosted for free on a CDN with no
server, database, or build pipeline to maintain.
