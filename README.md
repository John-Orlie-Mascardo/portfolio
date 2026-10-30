# John Orlie Mascardo — portfolio

A static portfolio focused on manual QA, academic projects, and hands-on IoT work. Built with HTML, JavaScript, and Tailwind CSS. The published site uses no Next.js or React runtime.

The page uses a sticky introduction and section navigation beside a scrolling content column on desktop. On smaller screens, the introduction and all section links stack above the content.

**Live site:** [GitHub Pages](https://john-orlie-mascardo.github.io/portfolio/)

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

Open <http://localhost:3000/portfolio/>. After changing the HTML, CSS, or JavaScript, stop the server and run `npm run dev` again to rebuild.

## Project files

- `index.html` — page content and layout.
- `styles/site.css` — Tailwind source, theme, and component styles.
- `site.js` — image viewers and the particle background.
- `public/` — photos, PDF certificates, previews, and licensed background scripts.
- `scripts/build-pages.mjs` — builds the static GitHub Pages site in `out/`.
- `scripts/serve.mjs` — serves that build locally at `/portfolio/`.
- `tests/pages-export.test.mjs` — verifies content, links, assets, and private-file exclusion.

Tailwind uses its PostCSS plugin at build time. No framework JavaScript is sent to visitors. `node_modules/` and `out/` are generated locally and are ignored by Git.

## Verify and publish

```sh
npm run lint
npm run build
npm test
```

Repository Settings → Pages should use **GitHub Actions**. The workflow builds and tests pull requests, and publishes only `out/` after a push to `main`. The generated site uses `/portfolio` as its base path. Old `about.html`, `techstack.html`, and `contact.html` URLs lead to their current sections.

`.env.local` and all `.env*` files are ignored by Git and excluded from `out/`. This site does not require an environment file. Never place secrets in `public/`, `index.html`, or `site.js` because those files are published.

## Content notes

LitterSense is a team capstone; personal contributions and ongoing evaluation are identified separately. CCONNECT and BYTES link to private repositories. Seminar certificates represent attendance. The original portrait is unchanged; CSS controls its crop.

The original TOEIC score report and DBP RISE signing invitation are displayed with the student's authorization. The TOEIC validity end date is shown, and the DBP supporting document is identified as an invitation.

particles.js 2.0.0 is self-hosted in `public/vendor/` with its MIT license. The background uses `particles-config.json` and respects reduced-motion settings.
