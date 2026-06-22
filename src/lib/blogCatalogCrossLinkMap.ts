/** UI category slugs to surface at the bottom of each blog article. */
const DEFAULT_CATEGORIES = ['shoes', 't-shirts', 'hoodies'] as const;

export type BlogHubLinkKind = 'home' | 'spreadsheet' | 'how-to-buy';

const SPREADSHEET_GUIDE_SLUGS = new Set<string>([
  'browser-extensions-link-rot-prevention',
  'web-spreadsheets-vs-whatsapp-sellers-safety',
  'evolution-of-reps-spreadsheets-excel-to-web',
  'identifying-phishing-spreadsheet-scams-reps-2026',
  'yupoo-album-spreadsheet-litbuy-intake',
  'spreadsheet-volumetric-chargeable-weight-basics',
  'spreadsheet-row-archiving-vanished-listings',
  'decoding-spreadsheet-batch-prices-discrepancies',
  'spotting-red-flag-sellers-community-spreadsheets',
  'community-crowdsourced-qc-verification-batches',
  'litrepstar-catalog-litbuy-spreadsheet-bridge',
  'litbuy-reading-listing-photos-trust-signals-2026',
  'litbuy-declared-value-practice-before-eu-july-2026',
]);

const HOW_TO_BUY_SLUGS = new Set<string>([
  'litbuy-taobao-paste-workflow-2026',
  'litbuy-weidian-storefront-basics',
  'litbuy-1688-wholesale-context',
  'litbuy-spreadsheet-to-parcel-checklist',
  'litbuy-links-discovery-url-hygiene',
  'litbuy-parcel-consolidation-split-decision-guide',
  'litbuy-summer-warehouse-qc-checklist-2026',
]);

export const BLOG_HUB_LINK_LABELS: Record<BlogHubLinkKind, string> = {
  home: 'LitBuy Spreadsheet home',
  spreadsheet: 'LitBuy Spreadsheet guide',
  'how-to-buy': 'How to buy guide',
};

export function blogSlugFromCanonical(canonicalPath: string): string {
  return canonicalPath.replace(/^\/blog\//, '').replace(/\/$/, '');
}

export function getBlogHubLinkKind(canonicalPath: string): BlogHubLinkKind {
  const slug = blogSlugFromCanonical(canonicalPath);
  if (HOW_TO_BUY_SLUGS.has(slug)) return 'how-to-buy';
  if (SPREADSHEET_GUIDE_SLUGS.has(slug)) return 'spreadsheet';
  return 'home';
}

export function getBlogHubLinkSegment(kind: BlogHubLinkKind): '' | 'how-to-buy/' {
  if (kind === 'how-to-buy' || kind === 'spreadsheet') return 'how-to-buy/';
  return '';
}

export function getBlogHubLinkHash(kind: BlogHubLinkKind): string {
  if (kind === 'spreadsheet') return '#spreadsheet-guide';
  return '';
}

const BLOG_CATALOG_MAP: Record<string, readonly string[]> = {
  'litbuy-jackets-outerwear-spreadsheet-lane-2026': ['jackets', 'hoodies', 'pants'],
  'litbuy-spreadsheet-browse-navigation-guide': ['shoes', 't-shirts', 'hoodies'],
  'litbuy-perfume-fragrance-spreadsheet-lane-2026': ['perfume', 'accessories', 'other'],
  'litbuy-sneakers-spreadsheet-lane-guide-2026': ['shoes', 'jersey', 'pants'],
  'litbuy-first-haul-budget-planner-2026': ['shoes', 't-shirts', 'hoodies'],
  'litbuy-spreadsheet-brands-catalog-2026': ['shoes', 'bags', 'jackets'],
  'litbuy-spreadsheet-qc': ['shoes', 'hoodies', 'jackets'],
  'litbuy-taobao-paste-workflow-2026': ['t-shirts', 'shoes', 'accessories'],
  'litbuy-weidian-storefront-basics': ['shoes', 'hoodies', 'bags'],
  'litbuy-1688-wholesale-context': ['t-shirts', 'pants', 'other'],
  'spreadsheet-volumetric-chargeable-weight-basics': ['jackets', 'bags', 'hoodies'],
  'litbuy-rehearsal-packaging-freight': ['jackets', 'bags', 'shoes'],
  'litbuy-spreadsheet-to-parcel-checklist': ['shoes', 'hoodies', 'jackets'],
  'litbuy-customs-declared-value-primer': ['shoes', 'bags', 'jackets'],
  'us-customs-de-minimis-litbuy-spreadsheet': ['shoes', 't-shirts', 'accessories'],
  'eu-import-vat-landed-cost-spreadsheet-buyers': ['shoes', 'perfume', 'electronics'],
  'canada-cbsa-customs-declaration-spreadsheet-guide': ['jackets', 'shoes', 'bags'],
  'shipping-branded-vs-unbranded-spreadsheet-restrictions': ['shoes', 'jackets', 'bags'],
  'winter-puffer-jacket-shipping-volumetric-hacks': ['jackets', 'hoodies', 'pants'],
  'group-haul-consolidation-freight-savings': ['bags', 'jackets', 'hoodies'],
  'litbuy-warehouse-storage-spreadsheet-timing': ['shoes', 'jackets', 'bags'],
  'litbuy-domestic-returns-before-international-ship': ['shoes', 't-shirts', 'hoodies'],
  'identifying-phishing-spreadsheet-scams-reps-2026': ['shoes', 't-shirts', 'hoodies'],
  'web-spreadsheets-vs-whatsapp-sellers-safety': ['shoes', 't-shirts', 'hoodies'],
  'spotting-red-flag-sellers-community-spreadsheets': ['shoes', 't-shirts', 'accessories'],
  'decoding-spreadsheet-batch-prices-discrepancies': ['shoes', 'hoodies', 't-shirts'],
  'litbuy-sizing-spreadsheet-apparel': ['shoes', 't-shirts', 'pants', 'hoodies'],
  'reverse-image-search-taobao-weidian-listings': ['shoes', 't-shirts', 'accessories'],
  'yupoo-album-spreadsheet-litbuy-intake': ['shoes', 'hoodies', 'bags'],
  'litbuy-links-discovery-url-hygiene': ['shoes', 'accessories', 't-shirts'],
  'spreadsheet-row-archiving-vanished-listings': ['shoes', 't-shirts', 'hoodies'],
  'browser-extensions-link-rot-prevention': ['shoes', 't-shirts', 'accessories'],
  'litbuy-4k-qc-video-inspection-guide': ['shoes', 'hoodies', 'jackets'],
  'community-crowdsourced-qc-verification-batches': ['shoes', 'jersey', 'hoodies'],
  'litbuy-shipping-insurance-seizure-protection-guide': ['shoes', 'bags', 'jackets'],
  'shipping-electronics-batteries-iata-2026-rules': ['electronics', 'accessories'],
  'litbuy-top-up-payment-rails-exchange-rates': ['electronics', 'shoes', 'bags'],
  'litbuy-coupons-promo-codes-2026': ['shoes', 't-shirts', 'hoodies'],
  'litbuy-app-vs-web-2026-comparison': ['shoes', 'electronics', 'accessories'],
  'litbuy-vs-oopbuy-vs-cnfans-2026-comparison': ['shoes', 't-shirts', 'hoodies'],
  'china-public-holidays-agent-forwarding-2026': ['shoes', 't-shirts', 'hoodies'],
  'double-11-logistics-litbuy-spreadsheet-buyers': ['shoes', 't-shirts', 'electronics'],
  'annual-reps-shopping-calendar-2026': ['shoes', 'jackets', 'hoodies'],
  'litrepstar-catalog-litbuy-spreadsheet-bridge': ['shoes', 't-shirts', 'hoodies'],
  'litbuy-eco-friendly-green-haul-shipping': ['bags', 'jackets', 'electronics'],
  'eu-ets-shipping-carbon-tax-litbuy-haul': ['jackets', 'bags', 'electronics'],
  'ai-search-discovery-litbuy-spreadsheet-reps': ['shoes', 't-shirts', 'hoodies'],
  'timing-the-reps-hype-cycle-spreadsheets': ['shoes', 'hoodies', 't-shirts'],
  'evolution-of-reps-spreadsheets-excel-to-web': ['shoes', 't-shirts', 'hoodies'],
  'litbuy-discord-community-find-hygiene': ['shoes', 'jersey', 'hoodies'],
  'eu-customs-reform-july-2026-litbuy-spreadsheet': ['shoes', 'bags', 'jackets'],
  'litbuy-618-shopping-festival-2026-spreadsheet': ['shoes', 't-shirts', 'electronics'],
  'litbuy-post-618-haul-review-playbook': ['shoes', 'hoodies', 't-shirts'],
  'litbuy-summer-warehouse-qc-checklist-2026': ['t-shirts', 'pants', 'shoes'],
  'litbuy-parcel-consolidation-split-decision-guide': ['jackets', 'bags', 'shoes'],
  'litbuy-shorts-tops-summer-spreadsheet-lane-2026': ['t-shirts', 'pants', 'hoodies'],
  'litbuy-domestic-shipping-618-backlog-basics': ['shoes', 't-shirts', 'hoodies'],
  'litbuy-declared-value-practice-before-eu-july-2026': ['shoes', 'bags', 'jackets'],
  'litbuy-reading-listing-photos-trust-signals-2026': ['shoes', 't-shirts', 'accessories'],
  'litbuy-no-presale-618-order-timing-2026': ['shoes', 't-shirts', 'hoodies'],
};

export function getBlogCatalogCategories(canonicalPath: string): string[] {
  const slug = blogSlugFromCanonical(canonicalPath);
  const mapped = BLOG_CATALOG_MAP[slug];
  return mapped ? [...mapped] : [...DEFAULT_CATEGORIES];
}
