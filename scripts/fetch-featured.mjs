import fs from 'node:fs/promises';
import path from 'node:path';
import {
  CATEGORY_PRODUCT_LIMIT,
  diversifyByBrand,
  isRenderableProduct,
  normalizeBrand,
} from './lib/catalogDiversify.mjs';
import {
  litrepstarProductPageUrl,
  parseLitrepstarAvailableSizes,
  parseLitrepstarSourceUrl,
} from './lib/parseLitrepstarPage.mjs';
import {
  LITREPSTAR_API,
  POOL_TO_LITREPSTAR_CATEGORY,
  fetchLitrepstarProducts,
  normalizeLitrepstarProduct,
} from './lib/litrepstarCatalogApi.mjs';
import { mergeFeaturedIntoCategoryProducts, mergeFeaturedPdpData } from './merge-featured-pdp.mjs';
const DATA_DIR = './src/data/api';
const CATEGORY_FETCH_POOL = 100;
const SOURCE_URLS_FILE = path.join(DATA_DIR, 'product-source-urls.json');
const PRODUCT_SIZES_FILE = path.join(DATA_DIR, 'product-sizes.json');
const SOURCE_URL_CONCURRENCY = 20;

const REFRESH_CATALOG =
  process.env.REFRESH_CATALOG === '1' || process.env.REFRESH_CATALOG === 'true';
/** When unset/false, keep committed `featured-products.json` (homepage Editor's Pick grid). */
const REFRESH_FEATURED =
  REFRESH_CATALOG ||
  process.env.REFRESH_FEATURED === '1' ||
  process.env.REFRESH_FEATURED === 'true';
/** When unset/false, keep committed `category-products.json` (category grids + spreadsheet PDP pool). */
const REFRESH_CATEGORIES =
  REFRESH_CATALOG ||
  process.env.REFRESH_CATEGORIES === '1' ||
  process.env.REFRESH_CATEGORIES === 'true';

const UI_TO_API_CATEGORY = {
  shoes: 'sneakers',
  't-shirts': 't-shirts',
  pants: 'trousers-pants',
  accessories: 'accessories',
  bags: 'bags-backpacks',
  electronics: 'electronics',
  jackets: 'jackets',
  hoodies: 'hoodies-sweatshirts',
  headwear: 'headwear',
  jersey: 'jersey',
  perfume: 'perfume',
  other: 'clothing',
};

const API_TIMEOUT_MS = 60000;

async function apiFetch(url, timeoutMs = API_TIMEOUT_MS) {
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      return await fetch(url, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      if (attempt === 2) {
        console.log(`  Request failed: ${url} (${error.message})`);
        return null;
      }
      console.log(`  Retry ${attempt}/2: ${url}`);
    }
  }
  return null;
}

async function readJsonFile(fileName, fallback = null) {
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, fileName), 'utf8'));
  } catch {
    return fallback;
  }
}

function countUiGridProducts(catProducts) {
  const slugs = new Set();
  for (const apiSlug of Object.values(UI_TO_API_CATEGORY)) {
    for (const product of catProducts[apiSlug] || []) {
      if (isRenderableProduct(product)) slugs.add(product.slug);
    }
  }
  return slugs.size;
}

async function logPinnedCatalog() {
  const featured = await readJsonFile('featured-products.json', []);
  const catProducts = await readJsonFile('category-products.json', {});
  console.log(
    `  Homepage featured: ${featured.length} items in featured-products.json`,
  );
  console.log(
    `  Category / PDP pool: ${countUiGridProducts(catProducts)} unique UI products in category-products.json`,
  );
}

async function cacheProductPageMeta(catProducts) {
  const slugs = new Set();
  for (const apiSlug of Object.values(UI_TO_API_CATEGORY)) {
    for (const product of catProducts[apiSlug] || []) {
      if (isRenderableProduct(product)) slugs.add(product.slug);
    }
  }

  let sourceUrls = {};
  let productSizes = {};
  try {
    sourceUrls = JSON.parse(await fs.readFile(SOURCE_URLS_FILE, 'utf8'));
  } catch {
    // start fresh when cache file does not exist yet
  }
  try {
    productSizes = JSON.parse(await fs.readFile(PRODUCT_SIZES_FILE, 'utf8'));
  } catch {
    // start fresh when cache file does not exist yet
  }

  const missing = [...slugs].filter(
    (slug) => !sourceUrls[slug] || !Array.isArray(productSizes[slug]),
  );
  console.log(
    `Caching marketplace page meta: ${missing.length} to fetch, ${slugs.size - missing.length} cached (${slugs.size} UI products).`,
  );

  async function fetchPageMeta(slug, attempt = 1) {
    try {
      const res = await fetch(litrepstarProductPageUrl(slug));
      if (!res.ok) {
        if (attempt < 2) {
          await new Promise((resolve) => setTimeout(resolve, 400));
          return fetchPageMeta(slug, attempt + 1);
        }
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
    }
  }

  for (let i = 0; i < missing.length; i += SOURCE_URL_CONCURRENCY) {
    const batch = missing.slice(i, i + SOURCE_URL_CONCURRENCY);
    await Promise.all(batch.map(fetchPageMeta));
    console.log(`  Page meta progress: ${Math.min(i + batch.length, missing.length)}/${missing.length}`);
  }

  if (Object.keys(sourceUrls).length > 0) {
    await fs.writeFile(SOURCE_URLS_FILE, JSON.stringify(sourceUrls, null, 2));
  } else {
    console.log('No source URLs cached, skipping product-source-urls.json write.');
  }

  if (Object.keys(productSizes).length > 0) {
    await fs.writeFile(PRODUCT_SIZES_FILE, JSON.stringify(productSizes, null, 2));
    const withSizes = Object.values(productSizes).filter((sizes) => sizes.length > 0).length;
    console.log(`  Saved product sizes for ${Object.keys(productSizes).length} slugs (${withSizes} with options).`);
  } else {
    console.log('No product sizes cached, skipping product-sizes.json write.');
  }
}

async function fetchAllData() {
  console.log('Starting catalog prebuild...');

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    if (!REFRESH_FEATURED && !REFRESH_CATEGORIES) {
      console.log(
        'Catalog data pinned — skipping Litrepstar product API (set REFRESH_CATALOG=1 to refresh all).',
      );
      await logPinnedCatalog();
      await mergeFeaturedPdpData();
      return;
    }

    console.log('Starting Litrepstar API fetch with brand diversity...');

    const catRes = await apiFetch(`${LITREPSTAR_API}/categories`);
    if (catRes?.ok) {
      const categories = await catRes.json();
      await fs.writeFile(path.join(DATA_DIR, 'categories.json'), JSON.stringify(categories, null, 2));
    }

    if (!REFRESH_FEATURED) {
      const pinned = await readJsonFile('featured-products.json', []);
      console.log(
        `Featured products pinned: keeping ${pinned.length} items from featured-products.json (set REFRESH_FEATURED=1 to refresh from API).`,
      );
    } else {
      console.log('Fetching featured products (REFRESH_FEATURED=1)...');
      const listRes = await apiFetch(`${LITREPSTAR_API}/products?limit=100&page=1`);
      const featuredProducts = [];
      if (listRes?.ok) {
        const json = await listRes.json();
        for (const raw of json.data || []) {
          if (!raw.isFeatured) continue;
          const prod = normalizeLitrepstarProduct(raw, raw.category || 'clothing');
          if (isRenderableProduct(prod)) featuredProducts.push(prod);
          if (featuredProducts.length >= 60) break;
        }
      }
      if (featuredProducts.length > 0) {
        console.log(`Successfully prepared ${featuredProducts.length} featured products.`);
        await fs.writeFile(
          path.join(DATA_DIR, 'featured-products.json'),
          JSON.stringify(featuredProducts, null, 2),
        );
      } else {
        console.log('No featured products fetched — keeping existing featured-products.json.');
      }
    }

    if (!REFRESH_CATEGORIES) {
      const pinned = await readJsonFile('category-products.json', {});
      console.log(
        `Category products pinned: keeping ${countUiGridProducts(pinned)} UI products from category-products.json (set REFRESH_CATEGORIES=1 to refresh from API).`,
      );
      console.log('Catalog prebuild finished (category pools pinned).');
      return;
    }

    console.log('Fetching UI category pools from Litrepstar (diversifying brands)...');
    let catProducts = (await readJsonFile('category-products.json')) || {};
    const allFetchedProducts = [];
    const rawCategoryPools = {};

    for (const [uiSlug, poolKey] of Object.entries(UI_TO_API_CATEGORY)) {
      const litrepstarCat = POOL_TO_LITREPSTAR_CATEGORY[poolKey] ?? poolKey;
      console.log(`  UI ${uiSlug} → pool ${poolKey} (Litrepstar categories=${litrepstarCat})…`);

      const rawRows = await fetchLitrepstarProducts(litrepstarCat, CATEGORY_FETCH_POOL);
      const normalized = rawRows.map((row) => normalizeLitrepstarProduct(row, poolKey));
      allFetchedProducts.push(...normalized);
      rawCategoryPools[poolKey] = normalized.filter(isRenderableProduct);
      catProducts[poolKey] = diversifyByBrand(normalized, CATEGORY_PRODUCT_LIMIT);
    }

    const jerseyPool = diversifyByBrand(
      allFetchedProducts.filter((p) => p.title.toLowerCase().includes('jersey')),
      CATEGORY_PRODUCT_LIMIT,
    );
    if (jerseyPool.length > 0) {
      catProducts['jersey'] = jerseyPool;
    }

    const featuredPinned = await readJsonFile('featured-products.json', []);
    if (featuredPinned.length > 0) {
      const mergeResult = mergeFeaturedIntoCategoryProducts(featuredPinned, catProducts);
      catProducts = mergeResult.merged;
      console.log(
        `merge-featured-pdp: merged ${mergeResult.featuredCount} featured items (${mergeResult.added} new, ${mergeResult.moved} re-prioritized).`,
      );
    }

    await cacheProductPageMeta(catProducts);

    for (const [uiSlug, apiSlug] of Object.entries(UI_TO_API_CATEGORY)) {
      const items = catProducts[apiSlug] || [];
      const brandCounts = {};
      for (const item of items) {
        const brand = normalizeBrand(item.brand);
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
      }
      const top = Object.entries(brandCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([brand, count]) => `${brand}(${count})`)
        .join(', ');
      console.log(`  UI ${uiSlug}: ${items.length} items, ${Object.keys(brandCounts).length} brands — ${top}`);
    }

    if (Object.keys(catProducts).length > 0) {
      await fs.writeFile(path.join(DATA_DIR, 'category-products.json'), JSON.stringify(catProducts, null, 2));
      await fs.writeFile(
        path.join(DATA_DIR, 'category-products-raw.json'),
        JSON.stringify(rawCategoryPools, null, 2),
      );
    } else {
      console.log('No category products found, skipping file write to preserve existing data.');
    }

    console.log('Full diversified data fetch completed successfully.');
  } catch (error) {
    console.error('Data fetch failed:', error.message);
    process.exit(1);
  }
}

fetchAllData();
