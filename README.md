# John Orlie Mascardo — portfolio

A Next.js portfolio focused on manual QA, academic projects, and hands-on IoT work. Built with React, TypeScript, and Tailwind CSS.

**Live site:** [GitHub Pages](https://john-orlie-mascardo.github.io/portfolio/)

## Run locally

Use Node.js 22 or newer (GitHub Actions uses Node.js 22).

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Save changes to update the preview; press Ctrl+C to stop.

## Project structure

- `app/page.tsx`: portfolio sections and Tailwind layout utilities.
- `app/content.ts`: skills, certificates, achievements, and seminar data.
- `app/globals.css`: Tailwind theme, shared components, and custom portrait/Halo/dialog styles.
- `app/MediaPreview.tsx`: accessible in-page image viewers with close, zoom, and optional PDF downloads.
- `app/HaloBackground.tsx`: decorative Halo background with pause and reduced-motion support.
- `public/`: original photos, evidence, certificate PDFs/previews, and licensed background scripts.
- `scripts/build-pages.mjs`: GitHub Pages static export and old-URL compatibility pages.
- `tests/`: exported asset/content checks and local Next.js server checks.

Tailwind uses the official PostCSS integration. Theme and utility layers are imported without Preflight to preserve the existing browser baseline. Shared component styles use `@apply`; section layouts use utilities in JSX. No extra Tailwind plugins are needed.

## Verify and publish

```sh
npm run lint
npm run build:pages
npm run test:export
```

In repository Settings → Pages, select **GitHub Actions**. The included workflow verifies pull requests and publishes the compiled `out/` directory on pushes to `main`. Do not commit build output or publish the repository root.

The Pages build sets `/portfolio` as its base path. Images, scripts, and certificate downloads use `assetPath()` for that prefix. Old `about.html`, `techstack.html`, and `contact.html` links return to the corresponding sections.

For local production-server checks, run `npm run build`, `npm start`, and then `npm test` in another terminal. These HTTP checks target a local Next.js server; the static Pages output is checked by `test:export`.

## Content and assets

LitterSense is a team capstone; personal contributions and ongoing evaluation are identified separately. CCONNECT and BYTES link to private repositories. Seminar certificates represent attendance, not professional certification or research presentation.

The original portrait is unchanged; its crop is CSS. Certificate previews are rendered from the original PDFs. The student authorized the original TOEIC score report and DBP RISE signing invitation for public display. TOEIC's expired validity is shown; the DBP document is identified as an invitation.

Self-hosted Vanta Halo 0.5.24 and Three.js r134 are required by the background. Their licenses are included in `public/vendor/`.

The former HTML website and historical development plans were removed from the current tree during cleanup and remain recoverable in Git history. Deployment is maintained for GitHub Pages only.
