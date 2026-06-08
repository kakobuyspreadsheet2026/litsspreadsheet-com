import fs from 'node:fs/promises';
import path from 'node:path';
import categoryProducts from '../src/data/api/category-products.json' with { type: 'json' };
import { isRenderableProduct } from './lib/catalogDiversify.mjs';
import {
  litrepstarProductPageUrl,
  parseLitrepstarAvailableSizes,
  parseLitrepstarSourceUrl,
} from './lib/parseLitrepstarPage.mjs';

const DATA_DIR = './src/data/api';
const SOURCE_URLS_FILE = path.join(DATA_DIR, 'product-source-urls.json');
const PRODUCT_SIZES_FILE = path.join(DATA_DIR, 'product-sizes.json');
const CONCURRENCY = 20;

const slugs = new Set();
for (const products of Object.values(categoryProducts)) {
  for (const product of products) {
    if (isRenderableProduct(product)) slugs.add(product.slug);
  }
}

let sourceUrls = {};
let productSizes = {};
try {
  sourceUrls = JSON.parse(await fs.readFile(SOURCE_URLS_FILE, 'utf8'));
} catch {
  // optional
}
try {
  productSizes = JSON.parse(await fs.readFile(PRODUCT_SIZES_FILE, 'utf8'));
} catch {
  // optional
}

const toFetch = [...slugs].filter(
  (slug) => !Array.isArray(productSizes[slug]) || productSizes[slug].length === 0,
);
console.log(`Caching sizes for ${toFetch.length}/${slugs.size} UI products...`);

async function fetchPageMeta(slug, attempt = 1) {
  try {
    const res = await fetch(litrepstarProductPageUrl(slug));
    if (!res.ok) {
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        return fetchPageMeta(slug, attempt + 1);
      }
      productSizes[slug] = [];
      return;
    }
    const html = await res.text();
    const sourceUrl = parseLitrepstarSourceUrl(html);
    if (sourceUrl) sourceUrls[slug] = sourceUrl;
    const sizes = parseLitrepstarAvailableSizes(html);
    if (sizes.length === 0 && attempt < 2) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return fetchPageMeta(slug, attempt + 1);
    }
    productSizes[slug] = sizes;
  } catch {
    if (attempt < 2) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return fetchPageMeta(slug, attempt + 1);
    }
    productSizes[slug] = [];
  }
}

for (let i = 0; i < toFetch.length; i += CONCURRENCY) {
  const batch = toFetch.slice(i, i + CONCURRENCY);
  await Promise.all(batch.map(fetchPageMeta));
  console.log(`  Progress: ${Math.min(i + batch.length, toFetch.length)}/${toFetch.length}`);
}

await fs.writeFile(PRODUCT_SIZES_FILE, JSON.stringify(productSizes, null, 2));
if (Object.keys(sourceUrls).length > 0) {
  await fs.writeFile(SOURCE_URLS_FILE, JSON.stringify(sourceUrls, null, 2));
}

const withSizes = Object.entries(productSizes).filter(([, sizes]) => sizes.length > 0).length;
console.log(`Done. ${withSizes} products have size options.`);
