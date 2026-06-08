import type { CatalogProduct } from './catalogProducts';

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Deterministic related picks: each product slug gets a different subset at build time. */
export function pickRelatedProducts<T extends CatalogProduct>(
  pool: T[],
  currentSlug: string,
  count = 4,
): T[] {
  const candidates = pool.filter((item) => item.slug !== currentSlug);
  if (candidates.length <= count) return candidates;

  return candidates
    .map((product) => ({
      product,
      score: hashString(`${currentSlug}:${product.slug}`),
    }))
    .sort((a, b) => a.score - b.score || a.product.slug.localeCompare(b.product.slug))
    .slice(0, count)
    .map(({ product }) => product);
}
