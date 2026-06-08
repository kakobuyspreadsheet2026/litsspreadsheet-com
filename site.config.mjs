/**
 * Domain map — keep roles separate; do not swap hub vs LitBuy vs catalogue.
 *
 * | Role              | Domain              | Used for |
 * |-------------------|---------------------|----------|
 * | This site (hub)   | litsspreadsheet.com | Canonical URLs, sitemap, OG, JSON-LD |
 * | LitBuy official   | www.litbuy.com      | Checkout, help, notices (outbound) |
 * | Litrepstar browse | litrepstar.com/en   | Category/product catalogue (outbound) |
 */

/** Canonical production domain for this Astro site — sync with DNS / hosting. */
export const siteDomain = 'litsspreadsheet.com';
export const siteOrigin = `https://${siteDomain}`;

/** Official LitBuy site — checkout, help, notices (outbound only). */
export const litbuyOfficialOrigin = 'https://www.litbuy.com';

/** Checkout/login CTAs — same as {@link litbuyOfficialOrigin}. */
export const litbuyCheckoutOrigin = litbuyOfficialOrigin;

/** Litrepstar spreadsheet catalogue — outbound browse bridge. */
export const litrepstarCatalogRoot = 'https://litrepstar.com/en';
