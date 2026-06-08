export const CATEGORY_PRODUCT_LIMIT = 30;
export const MAX_PER_BRAND = 2;
export const MAX_RELAXED_PER_BRAND = 3;

export function isRenderableProduct(item) {
  return (
    Array.isArray(item?.priceUsdEstimate) &&
    typeof item.priceUsdEstimate[0] === 'number' &&
    Boolean(item.images?.[0])
  );
}

export function normalizeBrand(brand) {
  const value = (brand || 'Other').trim();
  if (!value || value.toLowerCase() === 'unknown') return 'Other';
  return value;
}

function isExcludedBrand(brand) {
  const lower = brand.toLowerCase();
  return lower === 'other' || lower === 'unknown';
}

/** Pick up to `limit` products with a hard cap per brand (round-robin across brands). */
export function diversifyByBrand(
  products,
  limit = CATEGORY_PRODUCT_LIMIT,
  maxPerBrand = MAX_PER_BRAND,
  maxRelaxedPerBrand = MAX_RELAXED_PER_BRAND,
) {
  const seen = new Set();
  const unique = [];

  for (const item of products.filter(isRenderableProduct)) {
    if (seen.has(item.slug)) continue;
    seen.add(item.slug);
    unique.push(item);
  }

  const brandGroups = new Map();
  for (const item of unique) {
    const brand = normalizeBrand(item.brand);
    if (!brandGroups.has(brand)) brandGroups.set(brand, []);
    brandGroups.get(brand).push(item);
  }

  const brandOrder = [
    ...[...brandGroups.keys()].filter((brand) => !isExcludedBrand(brand)).sort(),
    ...[...brandGroups.keys()].filter((brand) => isExcludedBrand(brand)),
  ];

  const result = [];
  const counts = new Map();

  function fillWithCap(cap) {
    let progressed = true;
    while (result.length < limit && progressed) {
      progressed = false;
      for (const brand of brandOrder) {
        const used = counts.get(brand) || 0;
        if (used >= cap) continue;
        const pool = brandGroups.get(brand) || [];
        if (used >= pool.length) continue;
        result.push(pool[used]);
        counts.set(brand, used + 1);
        progressed = true;
        if (result.length >= limit) break;
      }
    }
  }

  let cap = maxPerBrand;
  fillWithCap(cap);
  if (result.length < limit && maxRelaxedPerBrand > maxPerBrand) {
    fillWithCap(maxRelaxedPerBrand);
  }

  return result.slice(0, limit);
}

/** Merge child category pools, then diversify brands for virtual UI silos. */
export function aggregateVirtualCategory(rawPools, childSlugs, limit = CATEGORY_PRODUCT_LIMIT) {
  const merged = [];
  const seen = new Set();

  for (const slug of childSlugs) {
    for (const item of rawPools[slug] || []) {
      if (seen.has(item.slug)) continue;
      seen.add(item.slug);
      merged.push(item);
    }
  }

  return diversifyByBrand(merged, limit);
}
