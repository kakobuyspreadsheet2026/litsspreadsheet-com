/**
 * Ensures homepage featured-products.json items have spreadsheet PDP routes by
 * merging them into category-products.json and caching Litrepstar page meta.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isRenderableProduct } from './lib/catalogDiversify.mjs';
import {
  litrepstarProductPageUrl,
  parseLitrepstarAvailableSizes,
  parseLitrepstarSourceUrl,
} from './lib/parseLitrepstarPage.mjs';

const DATA_DIR = './src/data/api';
const SOURCE_URLS_FILE = path.join(DATA_DIR, 'product-source-urls.json');
const PRODUCT_SIZES_FILE = path.join(DATA_DIR, 'product-sizes.json');
const SOURCE_URL_CONCURRENCY = 20;

/** Litrepstar pool key mapping for featured merge. */
const FEATURED_CATEGORY_TO_POOL = {
  sneakers: 'sneakers',
  'hoodies-sweatshirts': 'hoodies-sweatshirts',
  't-shirts': 't-shirts',
  'trousers-pants': 'trousers-pants',
  jeans: 'trousers-pants',
  shorts: 'trousers-pants',
  'sweaters-knits': 'hoodies-sweatshirts',
  'shirts-blouses': 't-shirts',
  jackets: 'jackets',
  headwear: 'headwear',
  'bags-backpacks': 'bags-backpacks',
  accessories: 'accessories',
  electronics: 'electronics',
  perfume: 'perfume',
  jersey: 'jersey',
  clothing: 'clothing',
};

async function readJson(fileName, fallback) {
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, fileName), 'utf8'));
  } catch {
    return fallback;
  }
}

export function mergeFeaturedIntoCategoryProducts(featured, catProducts) {
  const merged = Object.fromEntries(
    Object.entries(catProducts).map(([key, items]) => [key, [...(items || [])]]),
  );

  let added = 0;
  let moved = 0;

  for (const product of featured.filter(isRenderableProduct)) {
    const poolKey = FEATURED_CATEGORY_TO_POOL[product.category] ?? 'clothing';
    if (!merged[poolKey]) merged[poolKey] = [];

    const existingIndex = merged[poolKey].findIndex((item) => item.slug === product.slug);
    if (existingIndex >= 0) {
      merged[poolKey].splice(existingIndex, 1);
      moved += 1;
    } else {
      added += 1;
    }

    merged[poolKey].unshift(product);
  }

  return { merged, added, moved, featuredCount: featured.filter(isRenderableProduct).length };
}

async function cacheFeaturedPageMeta(slugs) {
  let sourceUrls = await readJson(path.basename(SOURCE_URLS_FILE), {});
  let productSizes = await readJson(path.basename(PRODUCT_SIZES_FILE), {});

  const missing = slugs.filter(
    (slug) => !sourceUrls[slug] || !Array.isArray(productSizes[slug]),
  );

  if (missing.length === 0) {
    console.log(`Featured PDP meta: all ${slugs.length} slugs already cached.`);
    return;
  }

  console.log(
    `Featured PDP meta: fetching ${missing.length} of ${slugs.length} slugs from Litrepstar…`,
  );

  async function fetchPageMeta(slug, attempt = 1) {
    try {
      const res = await fetch(litrepstarProductPageUrl(slug), {
        signal: AbortSignal.timeout(60000),
      });
      if (!res.ok) {
        if (attempt < 2) {
          await new Promise((resolve) => setTimeout(resolve, 400));
          return fetchPageMeta(slug, attempt + 1);
        }
        console.log(`  Missing page meta for ${slug} (${res.status})`);
        return;
      }

      const html = await res.text();
      const sourceUrl = parseLitrepstarSourceUrl(html);
      if (sourceUrl) sourceUrls[slug] = sourceUrl;
      productSizes[slug] = parseLitrepstarAvailableSizes(html);
    } catch (error) {
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        return fetchPageMeta(slug, attempt + 1);
      }
      console.log(`  Failed page meta for ${slug}: ${error.message}`);
    }
  }

  for (let i = 0; i < missing.length; i += SOURCE_URL_CONCURRENCY) {
    const batch = missing.slice(i, i + SOURCE_URL_CONCURRENCY);
    await Promise.all(batch.map(fetchPageMeta));
    console.log(
      `  Meta progress: ${Math.min(i + batch.length, missing.length)}/${missing.length}`,
    );
  }

  await fs.writeFile(SOURCE_URLS_FILE, JSON.stringify(sourceUrls, null, 2));
  await fs.writeFile(PRODUCT_SIZES_FILE, JSON.stringify(productSizes, null, 2));

  const withSource = slugs.filter((slug) => Boolean(sourceUrls[slug])).length;
  console.log(`  Cached source URLs for ${withSource}/${slugs.length} featured slugs.`);
}

export async function mergeFeaturedPdpData() {
  const featured = await readJson('featured-products.json', []);
  const catProducts = await readJson('category-products.json', {});

  if (featured.length === 0) {
    console.log('merge-featured-pdp: no featured products — skipping.');
    return;
  }

  const { merged, added, moved, featuredCount } = mergeFeaturedIntoCategoryProducts(
    featured,
    catProducts,
  );

  await fs.writeFile(
    path.join(DATA_DIR, 'category-products.json'),
    JSON.stringify(merged, null, 2),
  );

  console.log(
    `merge-featured-pdp: merged ${featuredCount} featured items (${added} new, ${moved} re-prioritized).`,
  );

  const slugs = featured.filter(isRenderableProduct).map((product) => product.slug);
  await cacheFeaturedPageMeta(slugs);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  mergeFeaturedPdpData().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
