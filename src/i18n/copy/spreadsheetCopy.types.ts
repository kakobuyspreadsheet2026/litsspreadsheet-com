/** Shared spreadsheet landing copy shape (locale files import this only — no circular imports). */

export type SpreadsheetPreviewCard = {
  title: string;
  category: string;
  priceHint: string;
  tagsLine: string;
};

export type SpreadsheetBlurb = { title: string; body: string };

export type SpreadsheetFaq = { q: string; aHtml: string };

/** Inline editorial cards linking to on-domain guides (bodyHtml supports hydration placeholders). */
export type SpreadsheetResourceCard = {
  title: string;
  bodyHtml: string;
};

export type SpreadsheetPageCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  h2Hero: string;
  subhead: string;
  introHtml: string;
  heroTags: readonly string[];
  whatIsTitle: string;
  whatIsBodyHtml: string;
  learnMoreLabel: string;
  previewTitle: string;
  previewIntroHtml: string;
  previewFiltersLabel: string;
  previewCards: readonly SpreadsheetPreviewCard[];
  whyTitle: string;
  whyItems: readonly SpreadsheetBlurb[];
  howTitle: string;
  howSteps: readonly SpreadsheetBlurb[];
  columnsTitle: string;
  columnsIntroHtml: string;
  columnTips: readonly SpreadsheetBlurb[];
  resourcesTitle: string;
  resourcesIntroHtml: string;
  resourceCards: readonly SpreadsheetResourceCard[];
  /** Marketplace primers (Taobao / Weidian / 1688) — additive hub→blog closure */
  marketplaceBridgeTitle: string;
  marketplaceBridgeIntroHtml: string;
  marketplaceBridgeCards: readonly SpreadsheetResourceCard[];
  faqTitle: string;
  faqs: readonly SpreadsheetFaq[];
  bottomCtaTitle: string;
  bottomCtaIntroHtml: string;
  bulletsTitle: string;
  bullets: readonly string[];
  ctaLabel: string;
  howToBuyLabel: string;
  newsLinkLabel: string;
};
