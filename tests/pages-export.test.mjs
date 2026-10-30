import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve("out");
const prefix = "/portfolio";

test("Pages artifact contains the current portfolio and working subpath assets", async () => {
  const html = await readFile(resolve(output, "index.html"), "utf8");
  assert.match(html, /Aspiring QA/);
  assert.equal([...html.matchAll(/aria-haspopup="dialog"/g)].length, 19);
  assert.doesNotMatch(html, /\/_next\/image\?/);
  const urls = new Set(
    [...html.matchAll(/(?:src|href)="([^"<>]+)"/g)].map((match) =>
      match[1].replaceAll("&amp;", "&"),
    ),
  );
  let images = 0;
  let pdfs = 0;
  let scripts = 0;
  for (const url of urls) {
    if (!url.startsWith("/")) continue;
    assert.ok(
      url.startsWith(prefix + "/"),
      `Asset escapes the project subpath: ${url}`,
    );
    const relative = decodeURIComponent(
      url.slice(prefix.length + 1).split(/[?#]/)[0],
    );
    assert.ok(
      (await stat(resolve(output, relative))).size > 0,
      `Missing exported file: ${url}`,
    );
    if (/\.(png|jpg|webp)$/.test(relative)) images++;
    if (relative.endsWith(".pdf")) pdfs++;
    if (relative.endsWith(".js")) scripts++;
  }
  assert.ok(
    images >= 10,
    "Portrait, project images and certificate previews must be exported",
  );
  assert.equal(pdfs, 10);
  assert.ok(scripts > 0, "Interactive viewers need exported JavaScript");
  await stat(resolve(output, ".nojekyll"));
});

test("old static page URLs return visitors to the corresponding current sections", async () => {
  for (const [file, section] of Object.entries({
    "about.html": "about",
    "techstack.html": "skills",
    "contact.html": "contact",
  })) {
    const html = await readFile(resolve(output, file), "utf8");
    assert.ok(html.includes(`/portfolio/#${section}`), file);
    assert.match(html, /http-equiv="refresh"/);
  }
});

test("static export includes the pinned background scripts", async () => {
  for (const file of ["three.r134.min.js", "vanta.halo.0.5.24.min.js"]) {
    const script = await readFile(resolve(output, "vendor", file), "utf8");
    assert.ok(script.length > 10000, file);
    const { Script } = await import("node:vm");
    new Script(script, { filename: file });
  }
});
test("achievements retain verified details and authorized supporting images", async () => {
  const html = await readFile(resolve(output, "index.html"), "utf8");
  for (const text of [
    'id="achievements"',
    "91.89",
    "94.49",
    "795/990",
    "April 13, 2026",
    "DBP RISE Scholar",
    "Second Runner-up",
    "BSIT 3A",
  ])
    assert.ok(html.includes(text), text);
  for (const file of [
    "dbp-rise-signing-invitation.jpg",
    "deans-list-2024-2025.jpg",
    "deans-list-2025-2026.jpg",
    "it-quiz-bee-2026.jpg",
    "toeic-score-report.jpg",
  ])
    assert.ok((await stat(resolve(output, "achievements", file))).size > 0);
  const { readdir } = await import("node:fs/promises");
  assert.deepEqual((await readdir(resolve(output, "achievements"))).sort(), [
    "dbp-rise-signing-invitation.jpg",
    "deans-list-2024-2025.jpg",
    "deans-list-2025-2026.jpg",
    "it-quiz-bee-2026.jpg",
    "toeic-score-report.jpg",
  ]);
});

test("seminars show dated attendance evidence and original PDF downloads", async () => {
  const html = await readFile(resolve(output, "index.html"), "utf8");
  for (const text of [
    'id="seminars"',
    "Psychological First Aid",
    "October 24, 2025",
    "April 24, 2025",
    "May 25, 2024",
    "May 22, 2024",
    "May 21, 2024",
    "Webinar attendance",
    "Conference attendance",
    "Session attendance",
  ])
    assert.ok(html.includes(text), text);
  for (const name of [
    "psychological-first-aid",
    "sdca-imrc-2025",
    "global-classroom-day-3",
    "sdca-imrc-2024",
    "global-classroom-day-1",
  ]) {
    assert.ok(html.includes("/portfolio/certificates/" + name + ".pdf"));
    assert.ok(
      (await readFile(resolve(output, "certificates", name + ".pdf")))
        .subarray(0, 5)
        .equals(Buffer.from("%PDF-")),
    );
  }
});

test("capstone identifies team contributions and separates objectives from pending results", async () => {
  const html = await readFile(resolve(output, "index.html"), "utf8");
  for (const text of [
    "Ashton James Caspe",
    "Joshua Austria",
    "Mac Laurenz Cultura",
    "John Orlie Mascardo",
    "IoT Integration",
    "Manual QA",
    "Project objectives",
    "React PWA",
    "MQ-136",
    "Formal evaluation results are still pending.",
  ])
    assert.ok(html.includes(text), text);
  assert.ok(!html.includes("preparing for IT expert evaluation"));
});

test("course projects retain accurate years, contributions and private repository labels", async () => {
  const html = await readFile(resolve(output, "index.html"), "utf8");
  const section = html.split('id="course-projects"')[1]?.split("</section>")[0];
  assert.ok(section, "Course projects section must be exported");
  for (const text of [
    "CCONNECT",
    "Third year",
    "SIA1",
    "BYTES",
    "Second year",
    "Mobile Development",
    "frontend development and project documentation",
    "Android user interface and project documentation",
    "authorized GitHub access",
  ])
    assert.ok(section.includes(text), text);
  for (const repo of [
    "John-Orlie-Mascardo/cconnect-frontend",
    "John-Orlie-Mascardo/cconnect-backend",
    "Kscopee/Bytes-Cookbook-Midterm-Project",
  ])
    assert.ok(section.includes("https://github.com/" + repo), repo);
  assert.equal((section.match(/repository · Private/g) || []).length, 3);
  assert.ok(!section.includes("<img"), "No invented project screenshots");
});

test("published artifact contains no framework runtime or private source files", async () => {
  const html = await readFile(resolve(output, "index.html"), "utf8");
  assert.doesNotMatch(html, /_next\/|__NEXT_DATA__|TURBOPACK|__BASE__/);
  assert.match(html, /src="\/portfolio\/site\.js"/);
  assert.match(html, /href="\/portfolio\/site\.css"/);
  for (const privateFile of [
    ".env.local", ".env", "AGENTS.md", "README.md", "package.json", "next.config.ts"
  ]) {
    await assert.rejects(stat(resolve(output, privateFile)), { code: "ENOENT" });
  }
  await assert.rejects(stat(resolve(output, "_next")), { code: "ENOENT" });
  const script = await readFile(resolve(output, "site.js"), "utf8");
  assert.match(script, /showModal\(\)/);
  assert.match(script, /prefers-reduced-motion/);
  assert.doesNotMatch(script, /\bReact\b|\bNext\b/);
});
