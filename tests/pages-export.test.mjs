import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('out');
const prefix = '/portfolio';

test('Pages artifact contains the current portfolio and working subpath assets', async () => {
  const html = await readFile(resolve(output, 'index.html'), 'utf8');
  assert.match(html, /Aspiring QA/);
  assert.equal([...html.matchAll(/aria-haspopup="dialog"/g)].length, 9);
  assert.doesNotMatch(html, /\/_next\/image\?/);
  const urls = new Set([...html.matchAll(/(?:src|href)="([^"<>]+)"/g)].map(match => match[1].replaceAll('&amp;', '&')));
  let images = 0;
  let pdfs = 0;
  let scripts = 0;
  for (const url of urls) {
    if (!url.startsWith('/')) continue;
    assert.ok(url.startsWith(prefix + '/'), `Asset escapes the project subpath: ${url}`);
    const relative = decodeURIComponent(url.slice(prefix.length + 1).split(/[?#]/)[0]);
    assert.ok((await stat(resolve(output, relative))).size > 0, `Missing exported file: ${url}`);
    if (/\.(png|jpg|webp)$/.test(relative)) images++;
    if (relative.endsWith('.pdf')) pdfs++;
    if (relative.endsWith('.js')) scripts++;
  }
  assert.ok(images >= 10, 'Portrait, project images and certificate previews must be exported');
  assert.equal(pdfs, 5);
  assert.ok(scripts > 0, 'Interactive viewers need exported JavaScript');
  await stat(resolve(output, '.nojekyll'));
});

test('old static page URLs return visitors to the corresponding current sections', async () => {
  for (const [file, section] of Object.entries({ 'about.html': 'about', 'techstack.html': 'skills', 'contact.html': 'contact' })) {
    const html = await readFile(resolve(output, file), 'utf8');
    assert.ok(html.includes(`/portfolio/#${section}`), file);
    assert.match(html, /http-equiv="refresh"/);
  }
});
