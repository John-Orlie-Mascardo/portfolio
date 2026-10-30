import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = resolve('out');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

createServer(async (request, response) => {
  const url = new URL(request.url, 'http://localhost:3000');
  if (url.pathname === '/') {
    response.writeHead(302, { Location: '/portfolio/' }).end();
    return;
  }
  const relative = decodeURIComponent(url.pathname).replace(/^\/portfolio\/?/, '');
  const file = resolve(root, relative || 'index.html');
  if (!url.pathname.startsWith('/portfolio/') || (file !== root && !file.startsWith(root + sep))) {
    response.writeHead(404).end('Not found');
    return;
  }
  try {
    const info = await stat(file);
    const target = info.isDirectory() ? resolve(file, 'index.html') : file;
    response.writeHead(200, { 'Content-Type': types[extname(target)] || 'application/octet-stream' });
    response.end(await readFile(target));
  } catch {
    response.writeHead(404).end('Not found');
  }
}).listen(3000, () => console.log('Portfolio: http://localhost:3000/portfolio/'));
