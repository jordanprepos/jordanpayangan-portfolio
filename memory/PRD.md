# PRD — Christopher Jordan CV / Profile Landing Page

## Original Problem Statement
"Build a landing page: as a profile page for my CV." (CV attached as PDF for content reference.)

## User Choices
- Prepare ALL 3 visual themes, switchable: Modern Minimal, Bold & Dark, Professional Corporate
- Functional contact form (stores messages)
- "Download CV (PDF)" button using the attached file
- Accent palette: blue / black / white

## Architecture
- **Frontend**: React (CRA + craco) single page at `/`, Tailwind CSS, framer-motion animations, lucide-react icons, sonner toasts. Theme system via `ThemeContext` setting `data-theme` on `<html>` + CSS variables (`--t-*`).
- **Backend**: FastAPI, `/api/contact` (POST store, GET list) backed by MongoDB collection `contact_messages`.
- **Data**: CV content in `/app/frontend/src/data/cv.js`.

## User Persona
- Christopher Jordan Timothy Payangan — Hybrid QA Engineer (Open Banking / fintech), Jakarta. Site visitors: recruiters, hiring managers.

## Core Requirements (static)
- Single-page CV with hero, about, skills, experience timeline, education/certs, contact, footer
- 3 switchable themes constrained to blue/black/white
- Working contact form + CV PDF download

## Implemented (2026-06-09)
- ✅ Hero with name/title, stats (4+, 545+, 250+, 70+), theme-swapping background, dual CTAs
- ✅ About, Skills (4 grouped cards), Experience timeline (3 roles), Education & Certifications (4 items)
- ✅ Theme switcher (Minimal / Dark / Corporate) with persisted preference
- ✅ Functional contact form → MongoDB, success/error toasts, client-side validation
- ✅ Download CV (PDF) buttons in header, hero, footer
- ✅ Backend + frontend tested: 100% pass (iteration_1)

## Backlog
- P1: Email notification on new contact message (Resend/SendGrid) so messages reach inbox
- P2: Spam protection (honeypot / rate limit) on contact endpoint
- P2: Admin view to read submitted messages
- P2: SEO meta tags / Open Graph, favicon, custom domain

## Next Tasks
- Await user feedback; offer email-notification integration for the contact form.
