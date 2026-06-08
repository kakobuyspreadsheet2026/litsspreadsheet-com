export type CatalogProduct = {
  priceUsdEstimate?: [number, number] | null;
  images?: string[] | null;
};

export function isRenderableCatalogProduct(p: CatalogProduct): boolean {
  return (
    Array.isArray(p.priceUsdEstimate) &&
    typeof p.priceUsdEstimate[0] === 'number' &&
    Boolean(p.images?.[0])
  );
}

export function filterRenderableCatalogProducts<T extends CatalogProduct>(products: T[]): T[] {
  return products.filter(isRenderableCatalogProduct);
}
