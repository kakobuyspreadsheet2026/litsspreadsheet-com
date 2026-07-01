import { BLOG_EDITORIAL_PILLARS, getTopicsForBlogSlug, getBlogTopicById } from './blogTopicClusters';

/** Pillar posts get an in-article hero figure (reuses OG artwork). */
export const BLOG_PILLAR_HERO_SLUGS = new Set<string>([
  ...BLOG_EDITORIAL_PILLARS.map((p) => p.slug),
  'litbuy-eu-customs-reform-live-july-1-2026',
  'litbuy-first-haul-budget-planner-2026',
  'litbuy-parcel-consolidation-split-decision-guide',
  'litbuy-sneakers-spreadsheet-lane-guide-2026',
  'litbuy-eu-july-1-countdown-checklist-2026',
  'litbuy-post-618-haul-review-playbook',
]);

/** High-value posts with an inline SVG diagram below the hero. */
export const BLOG_DIAGRAM_SLUGS = new Set<string>([
  'eu-customs-reform-july-2026-litbuy-spreadsheet',
  'litbuy-618-shopping-festival-2026-spreadsheet',
  'litbuy-spreadsheet-qc',
  'spreadsheet-volumetric-chargeable-weight-basics',
  'litbuy-customs-declared-value-primer',
]);

export function getBlogOgImagePath(slug: string): string {
  return `/blog/og/${slug}.png`;
}

export function getBlogHeroImagePath(slug: string): string | undefined {
  if (!BLOG_PILLAR_HERO_SLUGS.has(slug)) return undefined;
  return getBlogOgImagePath(slug);
}

export function blogHasDiagram(slug: string): boolean {
  return BLOG_DIAGRAM_SLUGS.has(slug);
}

export function getBlogOgTopicLabel(slug: string): string {
  const topics = getTopicsForBlogSlug(slug);
  const first = topics[0];
  if (!first) return 'LitBuy Spreadsheet';
  return getBlogTopicById(first)?.title ?? 'LitBuy Spreadsheet';
}

const BLOG_ALT_SUFFIX = 'LitBuy Spreadsheet';

/** Ensures descriptive copy ends with "— LitBuy Spreadsheet". */
export function blogImageAlt(description: string): string {
  const trimmed = description.trim();
  if (trimmed.endsWith(BLOG_ALT_SUFFIX)) return trimmed;
  return `${trimmed} — ${BLOG_ALT_SUFFIX}`;
}

export function blogHeroAlt(headline: string): string {
  return blogImageAlt(headline);
}

export function blogThumbAlt(title: string): string {
  return blogImageAlt(title);
}

const BLOG_DIAGRAM_DESCRIPTIONS: Record<string, string> = {
  'eu-customs-reform-july-2026-litbuy-spreadsheet':
    'EU low-value import timeline for agent buyers (2026–2028)',
  'litbuy-618-shopping-festival-2026-spreadsheet':
    '618 spreadsheet workflow: waves beat single mega-cart',
  'litbuy-spreadsheet-qc': 'Warehouse QC decision loop',
  'spreadsheet-volumetric-chargeable-weight-basics':
    'Chargeable weight equals max(actual kg, volumetric kg)',
  'litbuy-customs-declared-value-primer':
    'Declared value spreadsheet columns for audit trail',
};

export function getBlogDiagramAlt(slug: string): string | undefined {
  const description = BLOG_DIAGRAM_DESCRIPTIONS[slug];
  if (!description) return undefined;
  return blogImageAlt(description);
}
