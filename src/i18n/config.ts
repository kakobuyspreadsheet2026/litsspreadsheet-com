/** Astro `i18n.locales` path segments (same order as astro.config.mjs). */
export const ROUTE_LOCALES = ['en', 'de', 'pt', 'es', 'fr', 'it', 'pl'] as const;

export type RouteLocale = (typeof ROUTE_LOCALES)[number];

export const DEFAULT_LOCALE = 'en' satisfies RouteLocale;

/** Open Graph `og:locale` tags use underscore region codes. */
export const OG_LOCALE_BY_ROUTE: Record<RouteLocale, string> = {
  en: 'en_US',
  de: 'de_DE',
  pt: 'pt_BR',
  es: 'es_ES',
  fr: 'fr_FR',
  it: 'it_IT',
  pl: 'pl_PL',
};

/** `hreflang` attributes (recommended simple language-region where helpful). */
export const HREFLANG_BY_ROUTE: Record<RouteLocale, string> = {
  en: 'en',
  de: 'de',
  pt: 'pt-BR',
  es: 'es',
  fr: 'fr',
  it: 'it',
  pl: 'pl',
};

/** Schema.org / HTML `lang` attribute (avoid region subtag in `lang` unless needed). */
export const HTML_LANG_BY_ROUTE: Record<RouteLocale, string> = {
  en: 'en',
  de: 'de',
  pt: 'pt',
  es: 'es',
  fr: 'fr',
  it: 'it',
  pl: 'pl',
};

/** Logical route segment passed to `getAbsoluteLocaleUrlList(...)` (no leading slash). */
export type I18nRouteSegment =
  | ''
  | 'about'
  | 'how-to-buy'
  | 'news'
  | 'blog'
  | 'spreadsheet';

export function normalizeRouteLocale(lc: string | undefined): RouteLocale {
  if (lc && (ROUTE_LOCALES as readonly string[]).includes(lc)) return lc as RouteLocale;
  return DEFAULT_LOCALE;
}
