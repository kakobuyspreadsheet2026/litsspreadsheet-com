/** Litrepstar public catalogue API — used when REFRESH_CATALOG=1. */
export const LITREPSTAR_API = 'https://litrepstar.com/api';

const CNY_TO_USD = 7.2;

/** Pool key in category-products.json → Litrepstar `categories` query slug. */
export const POOL_TO_LITREPSTAR_CATEGORY = {
  sneakers: 'sneakers',
  't-shirts': 'tops',
  'trousers-pants': 'bottoms',
  accessories: 'jewelry',
  'bags-backpacks': 'backpacks',
  electronics: 'earphones',
  jackets: 'outerwear',
  'hoodies-sweatshirts': 'tops',
  headwear: 'hats',
  jersey: 'tops',
  perfume: 'perfume',
  clothing: 'tops',
  audio: 'earphones',
};

export function normalizeBrand(brand) {
  if (brand && typeof brand === 'object') return brand.name || 'Other';
  const value = (brand || 'Other').trim();
  if (!value || value.toLowerCase() === 'unknown') return 'Other';
  return value;
}

export function normalizeLitrepstarProduct(raw, poolCategory) {
  const priceCny = parseFloat(raw.priceMin || raw.priceMax || '0') || 0;
  const priceUsd = priceCny > 0 ? +(priceCny / CNY_TO_USD).toFixed(2) : 0;
  const images = Array.isArray(raw.images) ? raw.images.filter(Boolean) : [];

  return {
    slug: raw.slug,
    title: raw.title || '',
    description: raw.description || '',
    category: poolCategory,
    brand: normalizeBrand(raw.brand),
    priceCnyRange: [priceCny, priceCny],
    priceCny: priceCny.toFixed(2),
    priceUsdEstimate: [priceUsd, priceUsd],
    images,
    qcPhotoCount: 0,
    hasTryOn: false,
    updatedAt: raw.updatedAt || new Date().toISOString(),
  };
}

export async function fetchLitrepstarProducts(litrepstarCategory, limit = 100) {
  const url = `${LITREPSTAR_API}/products?categories=${encodeURIComponent(litrepstarCategory)}&limit=${limit}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}
