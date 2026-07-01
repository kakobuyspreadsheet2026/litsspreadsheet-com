import blogPosts from '../data/blogPosts.json';

export type BlogTopicId =
  | 'eu-customs'
  | 'sale-logistics'
  | 'qc-warehouse'
  | 'shipping-freight'
  | 'spreadsheet-lanes'
  | 'safety-trust'
  | 'budget-tools'
  | 'community-calendar';

export type BlogTopicMeta = {
  id: BlogTopicId;
  title: string;
  description: string;
  slugs: readonly string[];
};

/** Editorial topic hubs — every blog slug should appear in at least one cluster. */
export const BLOG_TOPIC_CLUSTERS: readonly BlogTopicMeta[] = [
  {
    id: 'eu-customs',
    title: 'EU customs & landed cost',
    description:
      'Declared value, IOSS VAT, July 2026 reform, CN-code duty lines, and EU forwarding cutoffs for LitBuy spreadsheet buyers.',
    slugs: [
      'eu-customs-reform-july-2026-litbuy-spreadsheet',
      'litbuy-eu-customs-reform-live-july-1-2026',
      'litbuy-eu-reform-eve-june-30-2026',
      'litbuy-eu-july-1-countdown-checklist-2026',
      'litbuy-eu-ship-before-july-1-cutoff-guide',
      'litbuy-eu-ioss-vs-customs-duty-june-2026',
      'litbuy-eu-cn-code-duty-modeling-spreadsheet',
      'litbuy-declared-value-practice-before-eu-july-2026',
      'litbuy-customs-declared-value-primer',
      'eu-import-vat-landed-cost-spreadsheet-buyers',
      'canada-cbsa-customs-declaration-spreadsheet-guide',
      'us-customs-de-minimis-litbuy-spreadsheet',
      'litbuy-warehouse-hold-vs-ship-eu-june-2026',
    ],
  },
  {
    id: 'sale-logistics',
    title: '618, holidays & domestic logistics',
    description:
      'Mid-year sale timing, Dragon Boat pauses, warehouse intake after peaks, and domestic tracking buffers.',
    slugs: [
      'litbuy-618-shopping-festival-2026-spreadsheet',
      'litbuy-post-618-haul-review-playbook',
      'litbuy-no-presale-618-order-timing-2026',
      'litbuy-domestic-shipping-618-backlog-basics',
      'litbuy-post-618-warehouse-intake-june-2026',
      'litbuy-618-tail-logistics-sf-june-2026',
      'litbuy-dragon-boat-festival-2026-agent-forwarding',
      'double-11-logistics-litbuy-spreadsheet-buyers',
      'china-public-holidays-agent-forwarding-2026',
      'annual-reps-shopping-calendar-2026',
    ],
  },
  {
    id: 'qc-warehouse',
    title: 'QC & warehouse workflow',
    description:
      'Warehouse photo checks, summer QC, rehearsal packaging, storage timing, and domestic returns.',
    slugs: [
      'litbuy-spreadsheet-qc',
      'litbuy-summer-warehouse-qc-checklist-2026',
      'litbuy-4k-qc-video-inspection-guide',
      'community-crowdsourced-qc-verification-batches',
      'litbuy-rehearsal-packaging-freight',
      'litbuy-rehearsal-packaging-june-2026-update',
      'litbuy-warehouse-storage-spreadsheet-timing',
      'litbuy-domestic-returns-before-international-ship',
      'litbuy-spreadsheet-to-parcel-checklist',
    ],
  },
  {
    id: 'shipping-freight',
    title: 'Shipping, freight & consolidation',
    description:
      'Volumetric weight, parcel splits, insurance, branded lanes, and seasonal freight tactics.',
    slugs: [
      'spreadsheet-volumetric-chargeable-weight-basics',
      'litbuy-parcel-consolidation-split-decision-guide',
      'litbuy-parcel-consolidation-split-decision-guide',
      'group-haul-consolidation-freight-savings',
      'winter-puffer-jacket-shipping-volumetric-hacks',
      'shipping-branded-vs-unbranded-spreadsheet-restrictions',
      'litbuy-shipping-insurance-seizure-protection-guide',
      'shipping-electronics-batteries-iata-2026-rules',
      'litbuy-eco-friendly-green-haul-shipping',
      'eu-ets-shipping-carbon-tax-litbuy-haul',
    ],
  },
  {
    id: 'spreadsheet-lanes',
    title: 'Spreadsheet lanes & marketplace paste',
    description:
      'Category lane guides, Litrepstar discovery, Taobao/Weidian/1688 paste workflows, and browse navigation.',
    slugs: [
      'litrepstar-catalog-litbuy-spreadsheet-bridge',
      'litbuy-spreadsheet-browse-navigation-guide',
      'litbuy-spreadsheet-brands-catalog-2026',
      'litbuy-taobao-paste-workflow-2026',
      'litbuy-weidian-storefront-basics',
      'litbuy-1688-wholesale-context',
      'litbuy-sneakers-spreadsheet-lane-guide-2026',
      'litbuy-jackets-outerwear-spreadsheet-lane-2026',
      'litbuy-shorts-tops-summer-spreadsheet-lane-2026',
      'litbuy-sandals-slides-summer-lane-2026',
      'litbuy-perfume-fragrance-spreadsheet-lane-2026',
      'litbuy-sizing-spreadsheet-apparel',
      'litbuy-reading-listing-photos-trust-signals-2026',
    ],
  },
  {
    id: 'safety-trust',
    title: 'Safety, scams & listing verification',
    description:
      'Phishing patterns, Yupoo intake, reverse image search, URL hygiene, and red-flag sellers.',
    slugs: [
      'identifying-phishing-spreadsheet-scams-reps-2026',
      'web-spreadsheets-vs-whatsapp-sellers-safety',
      'spotting-red-flag-sellers-community-spreadsheets',
      'yupoo-album-spreadsheet-litbuy-intake',
      'reverse-image-search-taobao-weidian-listings',
      'litbuy-links-discovery-url-hygiene',
      'browser-extensions-link-rot-prevention',
      'spreadsheet-row-archiving-vanished-listings',
      'decoding-spreadsheet-batch-prices-discrepancies',
    ],
  },
  {
    id: 'budget-tools',
    title: 'Budget, payments & agent tools',
    description:
      'First-haul budgets, mid-year resets, top-ups, coupons, and LitBuy app comparisons.',
    slugs: [
      'litbuy-first-haul-budget-planner-2026',
      'litbuy-mid-year-spreadsheet-budget-reset-2026',
      'litbuy-top-up-payment-rails-exchange-rates',
      'litbuy-coupons-promo-codes-2026',
      'litbuy-app-vs-web-2026-comparison',
      'litbuy-vs-oopbuy-vs-cnfans-2026-comparison',
    ],
  },
  {
    id: 'community-calendar',
    title: 'Community, hype & discovery',
    description:
      'Discord hygiene, AI discovery, hype cycles, spreadsheet evolution, and timing calendars.',
    slugs: [
      'litbuy-discord-community-find-hygiene',
      'ai-search-discovery-litbuy-spreadsheet-reps',
      'timing-the-reps-hype-cycle-spreadsheets',
      'evolution-of-reps-spreadsheets-excel-to-web',
    ],
  },
];

const slugToTopics = new Map<string, BlogTopicId[]>();
for (const cluster of BLOG_TOPIC_CLUSTERS) {
  for (const slug of cluster.slugs) {
    const list = slugToTopics.get(slug) ?? [];
    list.push(cluster.id);
    slugToTopics.set(slug, list);
  }
}

const postMetaBySlug = new Map(
  (blogPosts as { slug: string; title: string; description: string; published: string }[]).map(
    (p) => [p.slug, p],
  ),
);

export function getBlogTopicById(id: string): BlogTopicMeta | undefined {
  return BLOG_TOPIC_CLUSTERS.find((c) => c.id === id);
}

export function getTopicsForBlogSlug(slug: string): BlogTopicId[] {
  return slugToTopics.get(slug) ?? [];
}

export function getBlogTopicHubPath(topicId: BlogTopicId): string {
  return `/blog/topics/${topicId}/`;
}

export function getPostsForTopic(topicId: BlogTopicId) {
  const cluster = getBlogTopicById(topicId);
  if (!cluster) return [];
  return cluster.slugs
    .map((slug) => postMetaBySlug.get(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .sort((a, b) => b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug));
}

/** Pillar guides surfaced on how-to-buy and spreadsheet sections. */
export const BLOG_EDITORIAL_PILLARS: readonly { slug: string; blurb: string }[] = [
  {
    slug: 'litbuy-spreadsheet-qc',
    blurb: 'Warehouse QC pass/fail workflow before you approve international freight.',
  },
  {
    slug: 'litbuy-customs-declared-value-primer',
    blurb: 'Declared value basics for defensible parcel instructions.',
  },
  {
    slug: 'eu-customs-reform-july-2026-litbuy-spreadsheet',
    blurb: 'EU July 2026 customs reform and €3 duty planning on your spreadsheet.',
  },
  {
    slug: 'spreadsheet-volumetric-chargeable-weight-basics',
    blurb: 'Why freight quotes change after warehouse measurements.',
  },
  {
    slug: 'litbuy-taobao-paste-workflow-2026',
    blurb: 'Paste Taobao URLs into LitBuy with size and variant checks.',
  },
  {
    slug: 'litbuy-618-shopping-festival-2026-spreadsheet',
    blurb: '618 sale logistics without losing intake control.',
  },
  {
    slug: 'litrepstar-catalog-litbuy-spreadsheet-bridge',
    blurb: 'Move Litrepstar discovery rows into your LitBuy spreadsheet intake tab.',
  },
  {
    slug: 'identifying-phishing-spreadsheet-scams-reps-2026',
    blurb: 'Spot phishing spreadsheets and fake seller links early.',
  },
];

/** FAQ topic → editorial blog mapping for how-to-buy hub. */
export const HOW_TO_BUY_FAQ_BLOG_LINKS: readonly {
  faqMatch: string;
  slug: string;
  label: string;
}[] = [
  {
    faqMatch: 'Does seller QC replace warehouse',
    slug: 'litbuy-spreadsheet-qc',
    label: 'Warehouse QC workflow',
  },
  {
    faqMatch: 'Do spreadsheet prices include shipping',
    slug: 'spreadsheet-volumetric-chargeable-weight-basics',
    label: 'Volumetric vs chargeable weight',
  },
  {
    faqMatch: 'Can beginners use the spreadsheet',
    slug: 'litbuy-taobao-paste-workflow-2026',
    label: 'Taobao paste workflow',
  },
  {
    faqMatch: 'Why do links sometimes break',
    slug: 'spreadsheet-row-archiving-vanished-listings',
    label: 'Archiving vanished listings',
  },
  {
    faqMatch: 'How often is the spreadsheet updated',
    slug: 'litbuy-spreadsheet-browse-navigation-guide',
    label: 'How to browse the spreadsheet',
  },
];
