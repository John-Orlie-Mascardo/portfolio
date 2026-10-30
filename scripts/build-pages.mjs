import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const root = process.cwd();
const output = resolve(root, 'out');
if (output !== resolve(root, 'out') || !output.startsWith(root + sep)) {
  throw new Error('Unexpected output path');
}
const base = '/portfolio';

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, 'public'), output, { recursive: true });

const source = await readFile(resolve(root, 'styles/site.css'), 'utf8');
const result = await postcss([tailwindcss()]).process(source, {
  from: resolve(root, 'styles/site.css'),
  to: resolve(output, 'site.css'),
});
await writeFile(resolve(output, 'site.css'), result.css);
await writeFile(resolve(output, 'site.js'), await readFile(resolve(root, 'site.js')));
await writeFile(
  resolve(output, 'index.html'),
  (await readFile(resolve(root, 'index.html'), 'utf8')).replaceAll('__BASE__', base),
);
await writeFile(resolve(output, '.nojekyll'), '');

for (const [file, section] of Object.entries({
  'about.html': 'about',
  'techstack.html': 'skills',
  'contact.html': 'contact',
})) {
  const target = `${base}/#${section}`;
  await writeFile(
    resolve(output, file),
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0;url=${target}"><title>John Orlie Mascardo</title></head><body><a href="${target}">Continue to the portfolio</a></body></html>`,
  );
}
console.log('Built static portfolio in out/');
