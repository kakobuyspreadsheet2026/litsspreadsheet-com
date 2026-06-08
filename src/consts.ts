import {
  litbuyCheckoutOrigin,
  litbuyOfficialOrigin,
  litrepstarCatalogRoot,
  siteDomain,
  siteOrigin,
} from '../site.config.mjs';

export { litbuyCheckoutOrigin, litbuyOfficialOrigin, litrepstarCatalogRoot, siteDomain, siteOrigin };

/** Litrepstar catalogue root — same as {@link litrepstarCatalogRoot}. */
export const ml = litrepstarCatalogRoot;

/** LitBuy checkout home — same as {@link litbuyCheckoutOrigin}. */
export const litbuyCheckoutUrl = litbuyCheckoutOrigin;

/** LitBuy spreadsheet catalog root — outbound CTAs use this URL (not `/spreadsheet/litbuy`). */
export const mlSpreadsheetLitbuyspreadsheet = ml;

/** Site branding (aligned with `<meta property="og:site_name">` and JSON-LD). */
export const siteName = 'LitBuy Spreadsheet Hub';

/** TOP promo strip image (wide banner). Swap for a LitBuy-hosted asset before launch. */
export const litbuyspreadsheetTopBannerImageUrl = '/images/top-banner.png';

/** Centered strip inner max width (CSS px); full-bleed black rail wraps this. */
export const litbuyspreadsheetTopBannerInnerMaxPx = 1920;

/** Homepage hero background (self-hosted; not synced from litrepstar). */
export const litbuyspreadsheetHomeHeroBannerUrl = '/images/hero-banner.jpg';

/** Lightweight mobile-only homepage hero background (see `LitBuyHomeHero.astro`). */
export const litbuyspreadsheetHomeHeroMobileBannerUrl = '/images/hero-banner-mobile.jpg';

/** Self-hosted Inter variable font (latin + latin-ext). */
export const interLatinFontUrl = '/fonts/inter-latin-wght-normal.woff2';

/** Thin homepage promo strip above nav (max-height 40px in CSS). */
export const litbuyspreadsheetHomeTopStripBannerUrl = '/images/top-banner.png';

/** Default Discord invite (TOP banner `/join/discord` redirect + floating dock). */
export const defaultLitbuyspreadsheetDiscordUrl = 'https://discord.com/invite/litbuyspreadsheet';

/** Community subreddit referenced across the hub. */
export const defaultCommunityRedditUrl = 'https://www.reddit.com/r/litbuyspreadsheet/';

/** Default WhatsApp deep link for floating dock. */
export const defaultFloatingWhatsappUrl = 'https://wa.me/your-whatsapp-number';

/** Default floating-dock intro MP4 (self-hosted). */
export const defaultFloatingIntroVideoUrl = '/videos/intro.mp4';

/**
 * Default Open Graph / Twitter preview image (public path, resolved with `Astro.site`).
 * Standard 1200×630 for large social link previews.
 */
export const defaultOgImagePath = '/og-default.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Logo for JSON-LD `Organization` (min ~112×112 recommended; we use 512×512 PNG). */
export const structuredDataLogoPath = '/logo-512.png';
export const structuredDataLogoWidth = 512;
export const structuredDataLogoHeight = 512;

/** Stable JSON-LD `@id`s — must stay in sync with `src/layouts/Layout.astro`. */
export function siteStructuredDataIds(siteOrigin: string) {
  const o = siteOrigin.replace(/\/$/, '');
  return {
    organizationId: `${o}/#organization`,
    websiteId: `${o}/#website`,
  } as const;
}
