import fs from 'node:fs/promises';
import path from 'node:path';
import {
  CATEGORY_PRODUCT_LIMIT,
  diversifyByBrand,
  aggregateVirtualCategory,
  isRenderableProduct,
  normalizeBrand,
} from './lib/catalogDiversify.mjs';

const DATA_DIR = './src/data/api';

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

async function loadJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function buildPools(rawPools, catProducts) {
  if (Object.keys(rawPools).length > 0) return rawPools;

  const pools = {};
  for (const [slug, items] of Object.entries(catProducts)) {
    pools[slug] = (items || []).filter(isRenderableProduct);
  }
  return pools;
}

function logUiDistribution(catProducts) {
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
}

async function rediversifyCategories() {
  const categories = await loadJson(path.join(DATA_DIR, 'categories.json'), []);
  let catProducts = await loadJson(path.join(DATA_DIR, 'category-products.json'), {});
  const rawPools = buildPools(
    await loadJson(path.join(DATA_DIR, 'category-products-raw.json'), {}),
    catProducts,
  );

  for (const slug of Object.keys(rawPools)) {
    catProducts[slug] = diversifyByBrand(rawPools[slug], CATEGORY_PRODUCT_LIMIT);
  }

  const accessoriesExcludedChildren = new Set(['bags-backpacks', 'headwear']);
  const accessoriesChildren = categories
    .filter((c) => c.parentSlug === 'accessories' && !accessoriesExcludedChildren.has(c.slug))
    .map((c) => c.slug);
  catProducts.accessories = aggregateVirtualCategory(rawPools, accessoriesChildren, CATEGORY_PRODUCT_LIMIT);

  const electronicsChildren = categories.filter((c) => c.parentSlug === 'electronics').map((c) => c.slug);
  catProducts.electronics = aggregateVirtualCategory(rawPools, electronicsChildren, CATEGORY_PRODUCT_LIMIT);

  const clothingChildren = categories.filter((c) => c.parentSlug === 'clothing').map((c) => c.slug);
  catProducts.clothing = aggregateVirtualCategory(rawPools, clothingChildren, CATEGORY_PRODUCT_LIMIT);

  const jerseyCandidates = [];
  const seenJersey = new Set();
  for (const items of Object.values(rawPools)) {
    for (const item of items || []) {
      if (!item.title?.toLowerCase().includes('jersey')) continue;
      if (seenJersey.has(item.slug)) continue;
      seenJersey.add(item.slug);
      jerseyCandidates.push(item);
    }
  }
  if (jerseyCandidates.length > 0) {
    catProducts.jersey = diversifyByBrand(jerseyCandidates, CATEGORY_PRODUCT_LIMIT);
  }

  const shoesChildren = categories.filter((c) => c.parentSlug === 'shoes').map((c) => c.slug);
  const shoesPool = aggregateVirtualCategory(rawPools, shoesChildren, CATEGORY_PRODUCT_LIMIT);
  if (shoesPool.length > 0) {
    catProducts.sneakers = shoesPool;
    console.log(`  Shoes virtual pool: ${shoesPool.length} items from [${shoesChildren.join(', ')}]`);
  }

  await fs.writeFile(path.join(DATA_DIR, 'category-products.json'), JSON.stringify(catProducts, null, 2));
  console.log('Re-diversified category products:');
  logUiDistribution(catProducts);
}

rediversifyCategories().catch((error) => {
  console.error('Re-diversify failed:', error.message);
  process.exit(1);
});
