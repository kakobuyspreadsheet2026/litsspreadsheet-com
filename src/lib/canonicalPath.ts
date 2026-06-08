/**
 * Normalizes public paths to match `trailingSlash: 'always'` and `@astrojs/sitemap` URLs.
 */
export function canonicalPathWithTrailingSlash(path: string): string {
  const t = path.trim();
  if (t === '' || t === '/') return '/';
  return `${t.replace(/\/+$/, '')}/`;
}

export function absoluteCanonicalUrl(path: string, site: URL | string | undefined): string {
  const normalized = canonicalPathWithTrailingSlash(path);
  return new URL(normalized, site).href;
}
