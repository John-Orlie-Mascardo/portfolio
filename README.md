# John Orlie Mascardo — portfolio

A Next.js App Router portfolio focused on QA, hands-on IoT work, and the LitterSense team capstone. Built with React, TypeScript and plain CSS. No backend services or secrets are required.

- GitHub Pages: https://john-orlie-mascardo.github.io/portfolio/
- Vercel: https://john-orlie-portfolio.vercel.app

## Development

Use Node.js 22 (matching CI):

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Content lives in `app/page.tsx` and `app/content.ts`; styling lives in `app/globals.css`. Original photos, certificate PDFs and rendered previews live in `public/`. `MediaPreview` supplies the in-page image and certificate dialogs.

## GitHub Pages publishing

Repository Settings → Pages → Source must be **GitHub Actions**. The workflow in `.github/workflows/deploy-pages.yml` builds and tests pull requests. Every push to `main` builds and publishes **only the generated `out/` artifact**. A manual run is also available in the Actions tab.

```sh
npm run lint
npm run build:pages
npm run test:export
```

The Pages command enables static export, disables server-side image optimization and sets `/portfolio` as the build-time base path. Public image URLs and PDF downloads use the same prefix. The export check verifies the current portfolio, all referenced local files, five PDFs, viewer triggers and compatibility pages for old URLs. Do not commit `out/` or publish the raw repository root.

## Vercel publishing

Use the Next.js preset, root directory `.`, and `npm run build`. No environment variables are required. The default build keeps Vercel's root URLs, image optimization and HTTP redirects; the Pages-specific flags are set only by `npm run build:pages`.

```sh
npm run build
npm start
# In another terminal while the server is running:
npm test
```

The HTTP tests check homepage content, old-page redirects, image delivery, certificate downloads and viewer assets. To test the Vercel deployment, set `PORTFOLIO_URL=https://john-orlie-portfolio.vercel.app` before running `npm test`. Pages output is tested separately with `npm run test:export`.

The locally linked Vercel project is `john-orlie-mascardos-projects/john-orlie-portfolio`. Deploy it with the Vercel CLI or connect this repository in Vercel. GitHub Pages updates automatically through the included Actions workflow.

## Original website

The previous HTML/CSS/JS portfolio and its image assets are preserved under `legacy/`. Byte-identical duplicates were removed from the root so an outdated `index.html` cannot be mistaken for the current application. Git history also retains all original files.

## Content and tooling notes

The original portrait is unaltered. LitterSense is identified as a team capstone with AI-assisted contributions and captions explaining empty-data screenshots. Certificate previews are rendered from the original one-page PDFs; the PDFs remain downloadable. There is no invented contact address or résumé.

Next.js and its ESLint configuration are pinned to 16.4.3. ESLint remains on 9.39.5 for compatibility with bundled plugins.

The hero uses self-hosted Vanta Halo 0.5.24 and Three.js r134 from public/vendor/, with their license notices. The client component respects reduced-motion preferences and provides a pause control. The portrait is cropped through CSS; the original image file is unchanged.

Achievements include two Dean’s List certificates, the historical TOEIC result (validity ended April 13, 2026), ongoing DBP RISE scholarship coverage confirmed by the student, and the BSIT 3A team Quiz Bee award with confirmed personal participation. The student explicitly authorized publication of the original TOEIC score-report image and DBP RISE signing-invitation image. These appear alongside the three award images. TOEIC remains labelled historical with its validity date; the DBP image is identified as a signing invitation, not a named scholarship award.

The Seminars & Conferences section includes five attendance certificates with rendered WebP previews and unchanged original PDF downloads. Attendance is distinguished from professional certification and research presentation.
