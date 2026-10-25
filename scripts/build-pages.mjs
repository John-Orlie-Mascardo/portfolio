import { spawnSync } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const basePath = '/portfolio';
const build = spawnSync(process.execPath, [resolve('node_modules/next/dist/bin/next'), 'build'], {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true', NEXT_PUBLIC_BASE_PATH: basePath },
});
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status || 1);

await writeFile('out/.nojekyll', '');
for (const [file, section] of Object.entries({ 'about.html': 'about', 'techstack.html': 'skills', 'contact.html': 'contact' })) {
  const target = `${basePath}/#${section}`;
  await writeFile(`out/${file}`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0;url=${target}"><title>John Orlie Mascardo</title></head><body><a href="${target}">Continue to the portfolio</a></body></html>`);
}
