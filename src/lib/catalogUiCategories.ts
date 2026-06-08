import categoryProducts from '../data/api/category-products.json';
import { filterRenderableCatalogProducts, type CatalogProduct } from './catalogProducts';
import { UI_TO_API_CATEGORY } from './categorySlugMapping';

type CategoryProduct = CatalogProduct & {
  slug: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  priceCny?: string;
  priceUsdEstimate: [number, number];
  images: string[];
  qcPhotoCount: number;
};

export type UiCategoryProductEntry = {
  product: CategoryProduct;
  uiCategorySlug: string;
};

/** Renderable products for one UI silo (e.g. shoes → sneakers pool). */
export function getUiCategoryProductPool(
  uiCategorySlug: string,
  productsByCategory: Record<string, CategoryProduct[]> = categoryProducts,
): CategoryProduct[] {
  const apiSlug = UI_TO_API_CATEGORY[uiCategorySlug];
  if (!apiSlug) return [];
  return filterRenderableCatalogProducts(productsByCategory[apiSlug] || []) as CategoryProduct[];
}

/** Products listed in each of the 12 UI category silos, with silo slug for routing. */
export function collectUiCategoryProductEntries(
  productsByCategory: Record<string, CategoryProduct[]> = categoryProducts,
): UiCategoryProductEntry[] {
  const entries: UiCategoryProductEntry[] = [];

  for (const [uiCategorySlug, apiSlug] of Object.entries(UI_TO_API_CATEGORY)) {
    for (const product of filterRenderableCatalogProducts(productsByCategory[apiSlug] || [])) {
      entries.push({ product: product as CategoryProduct, uiCategorySlug });
    }
  }

  return entries;
}

export function buildProductUiCategoryIndex(
  productsByCategory: Record<string, CategoryProduct[]> = categoryProducts,
): Map<string, string> {
  const index = new Map<string, string>();

  for (const { product, uiCategorySlug } of collectUiCategoryProductEntries(productsByCategory)) {
    if (!index.has(product.slug)) {
      index.set(product.slug, uiCategorySlug);
    }
  }

  return index;
}

/** Unique products shown across the 12 homepage category silos (max ~360). */
export function collectUiCategoryProducts(
  productsByCategory: Record<string, CategoryProduct[]> = categoryProducts,
): CategoryProduct[] {
  const unique = new Map<string, CategoryProduct>();

  for (const { product } of collectUiCategoryProductEntries(productsByCategory)) {
    unique.set(product.slug, product);
  }

  return [...unique.values()];
}

export function getUiCategoryProductSlugs(
  productsByCategory: Record<string, CategoryProduct[]> = categoryProducts,
): string[] {
  return collectUiCategoryProducts(productsByCategory).map((p) => p.slug);
}
