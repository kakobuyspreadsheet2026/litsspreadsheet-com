import { siteDomain } from '../consts';
import { decodeHtmlEntities } from './htmlText';
import { englishAltFragment } from './productImageAlt';

const BRAND = 'LitBuy Spreadsheet';

function cleanFragment(text: string): string {
  return englishAltFragment(decodeHtmlEntities(text));
}

export function spreadsheetLogoAlt(): string {
  return `${BRAND} logo — ${siteDomain} home`;
}

export function spreadsheetHeroAlt(): string {
  return `${BRAND} hero banner — ${siteDomain}`;
}

export function spreadsheetPromoStripAlt(): string {
  return `${BRAND} promo strip — opens Litrepstar catalogue`;
}

export function spreadsheetPromoBannerAlt(eventLabel: string): string {
  return `${BRAND} — ${eventLabel} · homepage promo banner`;
}

export function spreadsheetRedditSnooAlt(): string {
  return `Reddit Snoo — ${BRAND} community`;
}

/** Trending grid / Litrepstar-synced picks */
export function spreadsheetProductPickAlt(title: string, categoryLabel?: string): string {
  const name = cleanFragment(title);
  if (categoryLabel) {
    return `${name} — ${BRAND} ${categoryLabel} pick`;
  }
  return `${name} — ${BRAND} trending pick`;
}

/** Category catalogue cards */
export function spreadsheetCatalogProductAlt(title: string, categoryName: string): string {
  const name = cleanFragment(title);
  return `${name} — ${BRAND} ${categoryName} find`;
}

/** Product detail main gallery */
export function spreadsheetProductDetailAlt(brand: string, title: string): string {
  return `${cleanFragment(brand)} ${cleanFragment(title)} — ${BRAND} product photo`;
}

/** Related picks on product detail */
export function spreadsheetRelatedProductAlt(
  brand: string,
  title: string,
  categoryName: string,
): string {
  return `${cleanFragment(brand)} ${cleanFragment(title)} — ${BRAND} related ${categoryName} pick`;
}
