/** Schema.org BreadcrumbList — names should match visible crumb labels where possible. */

export type BreadcrumbSchemaItem = {
  name: string;
  /** Absolute URL */
  url: string;
};

export function breadcrumbListLd(items: readonly BreadcrumbSchemaItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
