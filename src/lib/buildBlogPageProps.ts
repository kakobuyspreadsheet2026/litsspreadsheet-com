import type { Site } from 'astro';

import { getRelativeLocaleUrl } from 'astro:i18n';
import blogPosts from '../data/blogPosts.json';
import { siteStructuredDataIds, siteOrigin } from '../consts';
import { HTML_LANG_BY_ROUTE, type RouteLocale } from '../i18n/config';
import { getBlogCopy } from '../i18n/copy/blogPage';
import { absoluteCanonicalUrl } from './canonicalPath';
import { breadcrumbListLd } from './breadcrumbSchema';
import {
  blogListingCanonicalPath,
  formatBlogListingPageTitle,
  getBlogListingForPage,
  getBlogPaginationRelUrls,
} from './blogPagination';

export function buildBlogPageProps(locale: RouteLocale, site: Site | undefined, page = 1) {
  const localePrefix = locale === 'en' ? ('' as const) : (`/${locale}` as const);
  const { posts, totalPages, currentPage } = getBlogListingForPage(blogPosts, page);
  const canonicalPath = blogListingCanonicalPath(localePrefix, currentPage);
  const copy = getBlogCopy(locale);
  const layoutTitle = formatBlogListingPageTitle(
    copy.title,
    currentPage,
    copy.paginationTitleAffixBeforePipeTemplate,
  );
  const homeHref = getRelativeLocaleUrl(locale, '');

  const origin = site?.origin ?? siteOrigin;
  const { websiteId } = siteStructuredDataIds(origin);
  const pageUrl = absoluteCanonicalUrl(canonicalPath, site);
  const homeAbs = new URL(homeHref, site).href;

  const { prevUrl, nextUrl } = getBlogPaginationRelUrls(
    origin,
    localePrefix,
    currentPage,
    totalPages,
  );

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${pageUrl}#webpage`,
    name: layoutTitle,
    url: pageUrl,
    description: copy.description,
    inLanguage: HTML_LANG_BY_ROUTE[locale],
    isPartOf: { '@id': websiteId },
  };

  const breadcrumbLd = breadcrumbListLd([
    { name: copy.breadcrumbHomeLabel, url: homeAbs },
    { name: copy.h1, url: pageUrl },
  ]);

  return {
    locale,
    canonicalPath,
    copy,
    layoutTitle,
    homeHref,
    listingPosts: posts,
    totalPages,
    currentPage,
    prevUrl,
    nextUrl,
    jsonLd: [webPageLd, breadcrumbLd],
  };
}
