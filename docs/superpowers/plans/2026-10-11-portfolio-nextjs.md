# Portfolio Next.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Migrate John Orlie Mascardo's portfolio to a modern dark, QA-focused Next.js scrolling page and deploy it to Vercel.

**Architecture:** App Router with mostly server-rendered sections, local media and certificates, and responsive CSS. Keep the legacy source recoverable and use client components only if interaction needs them.

**Tech Stack:** Next.js, React, TypeScript, CSS, Vercel.

**Spec:** ../specs/2026-10-11-portfolio-nextjs-design.md

## Global Constraints
- Work in D:/portfolio; obtain sandbox escalation for writes as required.
- Preserve user files and existing Git history. Never overwrite unrelated work.
- Keep original portrait appearance and background; no generated portrait.
- Remove Express and Postman from displayed skills; add Next.js, React, Vercel and Supabase; retain Firebase.
- No resume, invented email, proficiency scores, automated-testing claims, or sole-authorship claims.
- Use existing GitHub and LinkedIn URLs. Link LitterSense with a sign-in-required note.
- No database, authentication, contact backend or animation library for the portfolio.
- Respect keyboard access and reduced motion. Label screenshots' empty-data states honestly.

## Review Focus
- Narrow screens: headings, navigation and media fit at 375px without horizontal overflow.
- Keyboard-only visitors: every link has visible focus and sensible section navigation.
- Direct old-page URLs: map index.html, about.html, techstack.html and contact.html to new destinations.
- Missing or large assets: all local images and certificate URLs return successfully; optimize dimensions and loading.
- Deployment: production behavior matches the local preview; never expose credentials in files or logs.

## File structure (relative to D:/portfolio)
- app/layout.tsx: document metadata and root layout.
- app/page.tsx: hero, about, project, skills, certificates and contact sections.
- app/globals.css: palette, typography, responsive layout, focus and reduced-motion styles.
- app/content.ts: typed repeated skills, gallery and certificate records if needed.
- public/images/: original portrait, selected hardware photos, supplied dashboard and supporting screenshots.
- public/certificates/: five PDF copies with stable URL-safe filenames.
- package.json, package-lock.json, tsconfig.json, next-env.d.ts, next.config.ts, eslint.config.mjs, .gitignore: runtime and checks.
- legacy/: recoverable original HTML/CSS/JavaScript and original assets as needed.
- README.md: development, validation and Vercel deployment instructions.

### Task 1: Next.js foundation and recoverable migration
**Consumes:** clean legacy repository and approved design.
**Produces:** runnable Next.js homepage, preserved originals and imported assets.
- [x] Recheck Git status and repository instructions before editing; preserve any new user changes.
- [x] Verify supported Next.js/React versions and Node requirements using official documentation; inspect available Node/npm.
- [x] Preserve the static source under legacy/ without deleting existing assets; copy approved design and plan into repository docs.
- [x] Create minimal App Router TypeScript configuration and package scripts: dev, build, start, lint, typecheck.
- [x] Copy original photo, selected hardware and website screenshots and five certificate PDFs into public/ using stable names. Inspect certificate issuers visually if text extraction is incomplete.
- [x] Install dependencies, lock versions, and run build and typecheck. Expected: exit 0 and rendered homepage.
- [x] Review diff for unrelated changes; record a focused checkpoint commit when permitted by the repository workflow.

### Task 2: Complete portfolio content and responsive design
**Consumes:** Task 1 application and public assets.
**Produces:** complete page with section IDs home, about, project, skills, certificates, contact.
- [x] Implement all six sections using the approved spec and verified content; add manual-testing and AI-assisted contribution wording.
- [x] Use original portrait with CSS upper-body framing; feature dashboard plus hardware photo 4 and supporting gallery.
- [x] Build grouped skills and five certificate cards with PDF links and verified titles/dates; retain existing contact URLs.
- [x] Implement responsive dark blue styling, oversized headings, subtle native CSS effects, keyboard focus and reduced-motion handling.
- [x] Use next/image with verified dimensions and responsive sizes; prioritize only hero imagery.
- [x] Configure old-page redirects in next.config.ts, preserving correct section anchors.
- [x] Run build, lint and typecheck. Expected: all exit 0.
- [x] Browser check at desktop and 375px: no horizontal overflow, readable text, intact portrait, usable navigation and images. Check keyboard focus and reduced motion.
- [x] Check all certificate/image HTTP responses and old routes. Expected: media return 200; old routes land at appropriate new sections.
- [x] Review final copy and screenshot captions against actual supplied evidence; save preview screenshots and summarize any limitations.

### Task 3: Preview review and Vercel deployment
**Consumes:** Task 2 validated build.
**Produces:** verified deployed URL and concise setup documentation.
- [x] Show the working local preview and representative desktop/mobile screenshots for user review; resolve requested adjustments.
- [x] Identify available Vercel account/project integration or CLI, read applicable deployment guidance, and use supported flow. Ask for user sign-in only when actually needed; do not invent a project ID or credentials.
- [x] Deploy the reviewed portfolio to Vercel under the user's existing authorization. If account access blocks deployment, complete local delivery and explain exactly what user action remains.
- [x] Verify deployed homepage, image/PDF delivery, anchor navigation and legacy redirects. Expected: intended content loads and no missing assets.
- [x] Update README with exact run/check commands and resulting deployment URL; inspect Git diff and report validation results and outstanding limitations.

## Self-review
All approved sections, migration preservation, media/certificates, contact links, accessibility, redirects and deployment are covered. No custom application logic is planned; build/type checks and browser/HTTP checks provide relevant proof. Add a focused regression test if custom interactive logic becomes necessary.

## Execution status
Plan approved and executed inline. Implementation complete. Local and public production checks pass. Deployed at https://john-orlie-portfolio.vercel.app.

