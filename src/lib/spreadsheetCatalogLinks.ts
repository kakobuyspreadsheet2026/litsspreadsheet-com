import categoryProducts from '../data/api/category-products.json';
import { filterRenderableCatalogProducts } from './catalogProducts';
import { UI_TO_API_CATEGORY } from './categorySlugMapping';

export type SpreadsheetBrowseCategory = {
  slug: string;
  label: string;
  productCount: number;
  sampleSlug?: string;
  sampleTitle?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  shoes: 'Shoes',
  't-shirts': 'T-shirts',
  pants: 'Pants',
  accessories: 'Accessories',
  bags: 'Bags',
  electronics: 'Electronics',
  jackets: 'Jackets',
  hoodies: 'Hoodies',
  headwear: 'Headwear',
  jersey: 'Jersey',
  perfume: 'Perfume',
  other: 'Other',
};

/** UI category lanes with optional first product for internal cross-links. */
export function getSpreadsheetBrowseCategories(): SpreadsheetBrowseCategory[] {
  return Object.entries(UI_TO_API_CATEGORY).map(([slug, apiSlug]) => {
    const products = filterRenderableCatalogProducts(
      categoryProducts[apiSlug as keyof typeof categoryProducts] || [],
    );
    const sample = products[0];

    return {
      slug,
      label: CATEGORY_LABELS[slug] ?? slug,
      productCount: products.length,
      sampleSlug: sample?.slug,
      sampleTitle: sample?.title,
    };
  });
}

export const PREVIEW_CARD_CATEGORY_SLUG: Record<string, string> = {
  Shoes: 'shoes',
  'T-shirts': 't-shirts',
  'Hoodies / sweaters': 'hoodies',
  'Bags & slings': 'bags',
  Bags: 'bags',
  Jersey: 'jersey',
  Electronics: 'electronics',
};
