import { LITREPSTAR_CATALOG_ROOT } from './categorySlugMapping';

/** External Litrepstar product pages — no on-site PDP. */
export function litrepstarProductUrl(slug: string): string {
  return `${LITREPSTAR_CATALOG_ROOT}/products/${slug}`;
}

/** Opens the matching Litrepstar listing (category slug ignored). */
export function productDetailHref(
  _locale: string,
  _categorySlug: string,
  slug: string,
): string {
  return litrepstarProductUrl(slug);
}

export function productDetailAbsoluteUrl(
  _locale: string,
  _categorySlug: string,
  slug: string,
  _site?: URL | string | undefined,
): string {
  return litrepstarProductUrl(slug);
}
