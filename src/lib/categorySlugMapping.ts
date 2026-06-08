/** Maps category grid UI slugs to API category keys in cached JSON. */
export const UI_TO_API_CATEGORY = {
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
} as const satisfies Record<string, string>;

export type CategoryUiSlug = keyof typeof UI_TO_API_CATEGORY;

export const CATEGORY_UI_SLUGS = Object.keys(UI_TO_API_CATEGORY) as CategoryUiSlug[];

const API_TO_UI_CATEGORY = Object.fromEntries(
  Object.entries(UI_TO_API_CATEGORY).map(([ui, api]) => [api, ui]),
) as Record<string, string>;

/** Cached catalogue API keys → Litrepstar homepage category query slugs. */
const API_TO_LITREPSTAR_CATEGORY: Record<string, string> = {
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
};

import { litrepstarCatalogRoot } from '../../site.config.mjs';

export const LITREPSTAR_CATALOG_ROOT = litrepstarCatalogRoot;

export function getCategoryUiSlug(apiSlug: string): string {
  return API_TO_UI_CATEGORY[apiSlug] ?? apiSlug;
}

export function getCategoryUiLabel(apiSlug: string): string {
  const ui = getCategoryUiSlug(apiSlug);
  return ui.charAt(0).toUpperCase() + ui.slice(1).replace('-', ' ');
}

/** External Litrepstar category catalogue — no on-site `/category/` route. */
export function litrepstarCategoryUrl(uiCategorySlug: string): string {
  const apiSlug = UI_TO_API_CATEGORY[uiCategorySlug] ?? uiCategorySlug;
  const litrepstarCat = API_TO_LITREPSTAR_CATEGORY[apiSlug] ?? apiSlug;
  return `${LITREPSTAR_CATALOG_ROOT}/products?categories=${litrepstarCat}`;
}
