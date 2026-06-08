import productSizes from '../data/api/product-sizes.json';

export function getProductAvailableSizes(slug: string): string[] {
  const sizes = (productSizes as Record<string, string[] | undefined>)[slug];
  return Array.isArray(sizes) ? sizes.filter(Boolean) : [];
}

export function isSizeRelevantCategory(uiCategorySlug: string): boolean {
  return !['electronics', 'perfume', 'bags', 'accessories'].includes(uiCategorySlug);
}
