import test from 'node:test';
import assert from 'node:assert/strict';

const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';

test('homepage exposes accessible navigation, QA positioning and honest project context', async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Aspiring QA/);
  assert.match(html, /John Orlie Mascardo/);
  assert.match(html, /AI-assisted/);
  assert.match(html, /In development/);
  for (const section of ['home', 'about', 'project', 'skills', 'certificates', 'contact']) {
    assert.match(html, new RegExp(`id="${section}"`));
  }
  assert.match(html, /href="#main"/);
  assert.match(html, /https:\/\/github.com\/John-Orlie-Mascardo/);
  assert.match(html, /https:\/\/www.linkedin.com\/in\/john-orlie-mascardo/);
  assert.doesNotMatch(html, /Postman|Express|mailto:|Download resume/);
});

test('old portfolio URLs preserve their destinations', async () => {
  for (const [source, destination] of Object.entries({
    '/index.html': '/', '/about.html': '/#about', '/techstack.html': '/#skills', '/contact.html': '/#contact',
  })) {
    const response = await fetch(base + source, { redirect: 'manual' });
    assert.equal(response.status, 308, source);
    assert.equal(new URL(response.headers.get('location'), base).href, new URL(destination, base).href);
  }
});

test('all displayed local images and certificate PDFs are served', async () => {
  const html = await (await fetch(base)).text();
  const paths = new Set([...html.matchAll(/href="(\/certificates\/[^"?]+\.pdf)"/g)].map(match => match[1]));
  assert.equal(paths.size, 5);
  const imagePaths = [...html.matchAll(/(?:src|srcSet)="([^"<>]+)"/g)]
    .flatMap(match => match[1].split(',').map(value => value.trim().split(' ')[0]))
    .filter(value => value.startsWith('/_next/image') || value.startsWith('/images/'));
  assert.ok(imagePaths.length >= 4);
  for (const path of [...paths, ...new Set(imagePaths)]) {
    const response = await fetch(base + path.replaceAll('&amp;', '&'));
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type'), path.endsWith('.pdf') ? /application\/pdf/ : /image\//);
    assert.ok((await response.arrayBuffer()).byteLength > 0, `Downloaded asset is empty: ${path}`);
  }
});

test('project images and certificates can be previewed without leaving the portfolio', async () => {
  const html = await (await fetch(base)).text();
  const previews = [...html.matchAll(/src="(\/certificates\/[^"?]+\.(?:png|webp)(?:\?[^"<>]*)?)"/g)].map(match => match[1].replaceAll('&amp;', '&'));
  assert.equal(new Set(previews).size, 5, 'All five certificates need visible preview images');
  assert.equal([...html.matchAll(/aria-haspopup="dialog"/g)].length, 9, 'Each project image and certificate needs an in-page viewer');
  for (const path of new Set(previews)) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type'), /image\//);
    assert.ok((await response.arrayBuffer()).byteLength > 0);
  }
});

test('Halo background dependencies are available from the same site', async () => {
  for (const file of ['three.r134.min.js', 'vanta.halo.0.5.24.min.js']) {
    const response = await fetch(`${base}/vendor/${file}`);
    assert.equal(response.status, 200, file);
    assert.match(response.headers.get('content-type'), /javascript/);
    assert.ok((await response.arrayBuffer()).byteLength > 10000, `Incomplete script: ${file}`);
  }
});
