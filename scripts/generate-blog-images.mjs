/**
 * Generates template OG PNGs (1200×630) for every blog slug.
 * Run: npm run generate:blog-images
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const posts = JSON.parse(
  fs.readFileSync(path.join(root, 'src/data/blogPosts.json'), 'utf8'),
);

const clusters = [
  { id: 'eu-customs', title: 'EU customs & landed cost', slugs: [] },
  { id: 'sale-logistics', title: '618 & logistics', slugs: [] },
  { id: 'qc-warehouse', title: 'QC & warehouse', slugs: [] },
  { id: 'shipping-freight', title: 'Shipping & freight', slugs: [] },
  { id: 'spreadsheet-lanes', title: 'Spreadsheet lanes', slugs: [] },
  { id: 'safety-trust', title: 'Safety & trust', slugs: [] },
  { id: 'budget-tools', title: 'Budget & tools', slugs: [] },
  { id: 'community-calendar', title: 'Community', slugs: [] },
];

const clusterSource = fs.readFileSync(
  path.join(root, 'src/lib/blogTopicClusters.ts'),
  'utf8',
);
for (const c of clusters) {
  const re = new RegExp(`id: '${c.id}'[\\s\\S]*?slugs: \\[([\\s\\S]*?)\\],`, 'm');
  const m = clusterSource.match(re);
  if (m) {
    c.slugs = [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
  }
}

const slugToTopic = new Map();
for (const c of clusters) {
  for (const slug of c.slugs) {
    if (!slugToTopic.has(slug)) slugToTopic.set(slug, c.title);
  }
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapTitle(title, maxChars = 38, maxLines = 4) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, maxLines);
}

function buildOgSvg({ title, topic, published }) {
  const lines = wrapTitle(title);
  const lineEls = lines
    .map(
      (ln, i) =>
        `<tspan x="72" dy="${i === 0 ? 0 : 46}">${escapeXml(ln)}</tspan>`,
    )
    .join('');
  const dateLabel = published
    ? new Date(`${published}T12:00:00`).toLocaleDateString('en-GB', {
        month: 'short',
        year: 'numeric',
      })
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b3d3a"/>
      <stop offset="55%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#134e4a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff1e6f"/>
      <stop offset="100%" stop-color="#ff6b9d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="url(#accent)"/>
  <rect x="72" y="56" rx="999" ry="999" width="${Math.min(720, topic.length * 11 + 48)}" height="42" fill="rgba(255,255,255,0.12)"/>
  <text x="96" y="84" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="22" font-weight="700">${escapeXml(topic)}</text>
  <text x="72" y="250" fill="#ffffff" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="44" font-weight="800" letter-spacing="-0.02em">${lineEls}</text>
  <text x="72" y="560" fill="rgba(255,255,255,0.82)" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="24" font-weight="600">litsspreadsheet.com · LitBuy Spreadsheet editorial</text>
  ${dateLabel ? `<text x="1128" y="560" text-anchor="end" fill="rgba(255,255,255,0.65)" font-family="system-ui, sans-serif" font-size="22" font-weight="600">${escapeXml(dateLabel)}</text>` : ''}
</svg>`;
}

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error(
      'Missing sharp. Run: npm install --save-dev sharp\nThen re-run: npm run generate:blog-images',
    );
    process.exit(1);
  }

  const outDir = path.join(root, 'public/blog/og');
  fs.mkdirSync(outDir, { recursive: true });

  let count = 0;
  for (const post of posts) {
    const topic = slugToTopic.get(post.slug) ?? 'LitBuy Spreadsheet';
    const svg = buildOgSvg({
      title: post.title,
      topic,
      published: post.published,
    });
    const outPath = path.join(outDir, `${post.slug}.png`);
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
    count++;
  }

  console.log(`Generated ${count} OG images in public/blog/og/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
