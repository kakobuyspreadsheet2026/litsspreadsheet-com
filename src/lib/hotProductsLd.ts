import litrepstarHome from '../data/litrepstarHomePicks.json';
import { decodeHtmlEntities } from './htmlText';
import { spreadsheetProductPickAlt } from './spreadsheetImageAlt';

type LitrepstarPick = (typeof litrepstarHome.products)[number];

const BRAND_DISPLAY: Record<string, string> = {
  'a-bathing-ape': 'A Bathing Ape',
  'acne-studios': 'Acne Studios',
  'adidas-originals': 'Adidas Originals',
  'air-jordan': 'Air Jordan',
  'louis-vuitton': 'Louis Vuitton',
  'new-balance': 'New Balance',
  'off-white': 'Off-White',
  'palm-angels': 'Palm Angels',
  'polo-ralph-lauren': 'Polo Ralph Lauren',
  'purple-brand': 'Purple Brand',
  'saint-laurent': 'Saint Laurent',
  'the-north-face': 'The North Face',
  'under-armour': 'Under Armour',
};

function formatBrandName(brandKey: string): string {
  if (BRAND_DISPLAY[brandKey]) return BRAND_DISPLAY[brandKey];
  return brandKey
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function absoluteImageUrl(origin: string, pick: LitrepstarPick): string {
  if (pick.imageLocal?.startsWith('/')) {
    return `${origin.replace(/\/$/, '')}${pick.imageLocal}`;
  }
  return pick.imageRemote ?? `${origin}/og-default.png`;
}

export function homeTrendingPicksListId(pageUrl: string): string {
  const base = pageUrl.replace(/\/$/, '') || pageUrl;
  return `${base}#trending-picks`;
}

function productLdNode(origin: string, pick: LitrepstarPick) {
  const name = decodeHtmlEntities(pick.title);
  const image = absoluteImageUrl(origin, pick);

  return {
    '@type': 'Product',
    '@id': `${pick.href}#product`,
    name,
    description: spreadsheetProductPickAlt(pick.title, pick.categoryLabel),
    image: [image],
    sku: pick.slug,
    category: pick.categoryLabel ?? pick.category,
    brand: {
      '@type': 'Brand',
      name: formatBrandName(pick.brand),
    },
    url: pick.href,
    offers: {
      '@type': 'Offer',
      url: pick.href,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      ...(typeof pick.priceUsd === 'number' && Number.isFinite(pick.priceUsd)
        ? { price: pick.priceUsd.toFixed(2) }
        : {}),
      seller: {
        '@type': 'Organization',
        name: 'Litrepstar',
        url: 'https://litrepstar.com/en',
      },
    },
  };
}

/** ItemList + Product JSON-LD for homepage trending grid (matches `litrepstarHomePicks.json`). */
export function getHotProductsLd(origin: string, pageUrl: string) {
  const picks = litrepstarHome.products;
  const listId = homeTrendingPicksListId(pageUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': listId,
    name: 'LitBuy Spreadsheet Trending Picks',
    description:
      'Curated LitBuy Spreadsheet product picks by brand and category, synced from Litrepstar.',
    numberOfItems: picks.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: picks.map((pick, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: pick.href,
      item: productLdNode(origin, pick),
    })),
  };
}
