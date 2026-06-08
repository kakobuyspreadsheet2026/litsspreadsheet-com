/** Stable Product schema identifiers derived from catalogue slug. */
export function productSchemaIdentifiers(slug: string): { sku: string; mpn: string } {
  return {
    sku: slug,
    mpn: slug.replace(/-/g, '').slice(-16).toUpperCase(),
  };
}
