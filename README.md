# John Orlie Mascardo — portfolio

A Next.js App Router portfolio focused on QA, hands-on IoT work, and the LitterSense team capstone. Uses React, TypeScript, and plain CSS; no backend services or secrets are required.

## Development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Content is in `app/page.tsx` and `app/content.ts`. Styling is in `app/globals.css`. Local photographs and certificate PDFs live under `public/`. The original static website is preserved under `legacy/`.

## Verification

```sh
npm run lint
npm run typecheck
npm run build
npm start
# In another terminal, while the server is running:
npm test
```

The HTTP tests check the actual homepage, old-page redirects, images, and five certificate downloads. To check a deployment instead, set `PORTFOLIO_URL` to its URL before running `npm test`.

## Vercel

Import this repository into Vercel with the Next.js framework preset, root directory `.`, and the default build command. No environment variables are needed. Alternatively, use the official Vercel CLI while signed in. Production URL: https://john-orlie-portfolio.vercel.app

Vercel project: `john-orlie-mascardos-projects/john-orlie-portfolio`. The separate existing Vite portfolio project remains available. This project is linked locally through the ignored `.vercel/` directory. Automatic Git deployments are not configured; deploy reviewed changes with `npx vercel deploy --prod`.

## Content notes

The original portrait is used without generated alterations. LitterSense screenshots include empty-data states, described in their captions. The project is a team capstone in development, with AI-assisted contributions stated explicitly. There is no résumé or invented contact address. GitHub and LinkedIn retain their existing URLs.

## Tooling compatibility

ESLint is pinned to 9.39.5 because the React/accessibility/import plugins bundled with the Next.js ESLint configuration do not yet accept ESLint 10. npm emits an upstream deprecation warning for ESLint 9; it is development-only tooling. Upgrade when the bundled plugins support ESLint 10.
