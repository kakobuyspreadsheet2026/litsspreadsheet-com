import homeCategoryBannersData from '../data/homeCategoryBanners.json';
import { litbuyPromotions } from '../data/litbuyOfficialNews';

export type HomeCategoryBannerRow = (typeof homeCategoryBannersData)[number] & { href?: string };

/** Six tap URLs for the homepage / News banner strip — keep `NewsPageBody` card CTAs in lockstep. */
export function homeCategoryBannerTapUrls(_locale: string) {
  return litbuyPromotions.map((p) => p.sourceUrl) as [
    string,
    string,
    string,
    string,
    string,
    string,
  ];
}

/**
 * Homepage / News promo strip: pairs each banner asset with its tap target.
 * Index 2 is the May 2026 promotions detail page (EN hub mirror).
 */
export function homeCategoryBannersWithHrefs(locale: string): HomeCategoryBannerRow[] {
  const hrefs = homeCategoryBannerTapUrls(locale);

  return homeCategoryBannersData.map((b, i) => ({
    ...b,
    ...(hrefs[i] ? { href: hrefs[i]! } : {}),
  }));
}
