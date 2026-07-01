import type { Site } from 'astro';

import { getRelativeLocaleUrl } from 'astro:i18n';
import { ml, siteStructuredDataIds, siteOrigin } from '../consts';
import howToBuyDesktopNewsExcerpts from '../data/howToBuyDesktopNewsExcerpts.json';
import { HTML_LANG_BY_ROUTE, type RouteLocale } from '../i18n/config';
import { getHowToBuyCopy, hydrateHowToBuyCopy } from '../i18n/copy/howToBuy';
import { getSpreadsheetPageCopy, hydrateSpreadsheetCopy } from '../i18n/copy/spreadsheetPage';
import { absoluteCanonicalUrl } from './canonicalPath';
import { spreadsheetHowToLd } from './spreadsheetHowToLd';

export function buildHowToBuyPageProps(locale: RouteLocale, site: Site | undefined) {
  const canonicalPath = locale === 'en' ? '/how-to-buy' : `/${locale}/how-to-buy`;
  const sheetUrl = import.meta.env.PUBLIC_LITBUY_SPREADSHEET_URL?.trim() || ml;

  const homeHref = getRelativeLocaleUrl(locale, '');
  const howToHref = getRelativeLocaleUrl(locale, 'how-to-buy');
  const newsHref = getRelativeLocaleUrl(locale, 'news');
  const aboutHref = getRelativeLocaleUrl(locale, 'about');

  const copy = hydrateHowToBuyCopy(getHowToBuyCopy(locale), ml, howToBuyDesktopNewsExcerpts.length);
  const spreadsheetCopy = hydrateSpreadsheetCopy(
    getSpreadsheetPageCopy(locale),
    ml,
    howToHref,
    newsHref,
    aboutHref,
  );

  const origin = site?.origin ?? siteOrigin;
  const { websiteId } = siteStructuredDataIds(origin);
  const pageUrl = absoluteCanonicalUrl(canonicalPath, site);
  const spreadsheetGuideUrl = `${pageUrl}#spreadsheet-guide`;

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: copy.title,
    url: pageUrl,
    description: copy.description,
    inLanguage: HTML_LANG_BY_ROUTE[locale],
    isPartOf: { '@id': websiteId },
    keywords: copy.keywords,
  };

  const spreadsheetGuideLd = spreadsheetHowToLd(
    spreadsheetGuideUrl,
    spreadsheetCopy.h1,
    spreadsheetCopy.description,
    spreadsheetCopy.howSteps,
    locale,
  );

  return {
    locale,
    canonicalPath,
    copy,
    spreadsheetCopy,
    homeHref,
    newsHref,
    sheetUrl,
    excerpts: howToBuyDesktopNewsExcerpts,
    jsonLd: [webPageLd, spreadsheetGuideLd],
  };
}
