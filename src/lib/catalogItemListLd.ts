/** Minimal Product fields for catalogue ItemList JSON-LD (HTML weight). */
export type CatalogProductLdInput = {
  slug: string;
  title: string;
  brand: string;
  images: string[];
  priceUsdEstimate: [number, number];
};

/** Slim Product node — omits long descriptions and boilerplate shipping/return blocks. */
export function catalogProductLdItem(product: CatalogProductLdInput, offerUrl: string) {
  return {
    '@type': 'Product',
    name: product.title,
    url: offerUrl,
    image: product.images[0],
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      price: product.priceUsdEstimate[0],
      priceCurrency: 'USD',
      url: offerUrl,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function catalogItemListLd(
  name: string,
  products: CatalogProductLdInput[],
  offerUrlForProduct: (product: CatalogProductLdInput) => string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: catalogProductLdItem(p, offerUrlForProduct(p)),
    })),
  };
}
