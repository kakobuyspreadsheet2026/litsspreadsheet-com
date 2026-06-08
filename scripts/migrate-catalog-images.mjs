/**
 * Replaces cdn.maisonlooks.com image URLs in pinned catalog JSON with Litrepstar
 * product preview images (og:image from litrepstar.com/en/products/{slug}).
 *
 * Run: npm run sync:catalog-images
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { litrepstarProductPageUrl } from './lib/parseLitrepstarPage.mjs';

const DATA_DIR = './src/data/api';
const FILES = ['category-products.json', 'featured-products.json', 'category-products-raw.json'];
const CONCURRENCY = 24;
const OG_IMAGE_RE = /property="og:image" content="([^"]+)"/;

function needsMigration(url) {
  return typeof url === 'string' && url.includes('maisonlooks');
}

function collectSlugs(data, fileName) {
  const slugs = new Set();
  if (fileName === 'featured-products.json' && Array.isArray(data)) {
    for (const p of data) {
      if (p.slug && p.images?.some(needsMigration)) slugs.add(p.slug);
    }
    return slugs;
  }
  for (const items of Object.values(data)) {
    if (!Array.isArray(items)) continue;
    for (const p of items) {
      if (p.slug && p.images?.some(needsMigration)) slugs.add(p.slug);
    }
  }
  return slugs;
}

function patchProductImages(product, imageBySlug) {
  if (!product?.slug || !product.images?.some(needsMigration)) return false;
  const remote = imageBySlug.get(product.slug);
  if (!remote) return false;
  product.images = [remote];
  return true;
}

function patchFile(data, fileName, imageBySlug) {
  let patched = 0;
  let unresolved = 0;

  if (fileName === 'featured-products.json' && Array.isArray(data)) {
    for (const p of data) {
      if (patchProductImages(p, imageBySlug)) patched += 1;
      else if (p.images?.some(needsMigration)) unresolved += 1;
    }
    return { data, patched, unresolved };
  }

  for (const items of Object.values(data)) {
    if (!Array.isArray(items)) continue;
    for (const p of items) {
      if (patchProductImages(p, imageBySlug)) patched += 1;
      else if (p.images?.some(needsMigration)) unresolved += 1;
    }
  }
  return { data, patched, unresolved };
}

async function fetchOgImage(slug, attempt = 1) {
  try {
    const res = await fetch(litrepstarProductPageUrl(slug), {
      signal: AbortSignal.timeout(45000),
    });
    if (!res.ok) {
      if (attempt < 2) {
        await new Promise((r) => setTimeout(r, 300));
        return fetchOgImage(slug, attempt + 1);
      }
      return null;
    }
    const html = await res.text();
    const match = html.match(OG_IMAGE_RE);
    return match?.[1] ?? null;
  } catch {
    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 300));
      return fetchOgImage(slug, attempt + 1);
    }
    return null;
  }
}

async function buildImageMap(slugs) {
  const list = [...slugs];
  const imageBySlug = new Map();

  for (let i = 0; i < list.length; i += CONCURRENCY) {
    const batch = list.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map(async (slug) => {
        const image = await fetchOgImage(slug);
        return [slug, image];
      }),
    );
    for (const [slug, image] of results) {
      if (image) imageBySlug.set(slug, image);
    }
    console.log(
      `  PDP progress: ${Math.min(i + batch.length, list.length)}/${list.length} — resolved ${imageBySlug.size}`,
    );
  }

  return imageBySlug;
}

async function main() {
  const payloads = [];
  const allSlugs = new Set();

  for (const fileName of FILES) {
    const filePath = path.join(DATA_DIR, fileName);
    const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
    const slugs = collectSlugs(data, fileName);
    slugs.forEach((s) => allSlugs.add(s));
    payloads.push({ fileName, filePath, data });
  }

  console.log(`Slugs needing image migration: ${allSlugs.size}`);
  if (allSlugs.size === 0) {
    console.log('No cdn.maisonlooks URLs found — nothing to do.');
    return;
  }

  const imageBySlug = await buildImageMap(allSlugs);
  console.log(`Resolved ${imageBySlug.size} product images from Litrepstar PDPs.`);

  let totalPatched = 0;
  let totalUnresolved = 0;

  for (const { fileName, filePath, data } of payloads) {
    const { data: patched, patched: count, unresolved } = patchFile(data, fileName, imageBySlug);
    await fs.writeFile(filePath, JSON.stringify(patched, null, 2));
    console.log(`${fileName}: ${count} updated, ${unresolved} unresolved`);
    totalPatched += count;
    totalUnresolved += unresolved;
  }

  console.log(`Done — ${totalPatched} products migrated, ${totalUnresolved} unresolved.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
