export type CategoryPillStub = {
  id: string;
  label: string;
  imgAlt: string;
  /** Path appended to `ml`, e.g. `/c/shoes` or `/search?q=hoodie`. */
  path: string;
};

export type GuideSectionStub = {
  h3: string;
  paragraphs: string[];
};

export type HomeStubContent = {
  title: string;
  description: string;
  keywords: string;
  webPageName: string;
  webPageKeywords: string[];
  hero: {
    h1: string;
    kicker: string;
    body: string;
    ctaBrowse: string;
    ctaLogin: string;
    heroPlaneAlt: string;
    searchAria: string;
    searchPlaceholder: string;
    searchByImage: string;
    searchSubmit: string;
    searchByImageAria: string;
  };
  categoriesAria: string;
  exploreTitle: string;
  redditAria: string;
  redditSnooAlt: string;
  /** Visible hub explainer above the product grid (optional per locale). */
  hubIntro?: {
    title: string;
    paragraphs: readonly string[];
  };
  guideH2?: string;
  guideIntro?: string;
  sections: GuideSectionStub[];
  ctaHeading: string;
  ctaIntro: string;
  /** Optional text after the spreadsheet bridge link (e.g. “— stay in Browse mode …”). */
  ctaIntroSuffix?: string;
  ctaFooterNote: string;
  sheetLinkLabel: string;
  categoryPills: CategoryPillStub[];
  footer: {
    disclaimerLabel: string;
    disclaimerHtml: string;
    copyrightLine: string;
  };
  categoryPage: {
    titleTemplate: string;
    descriptionTemplate: string;
    introTemplate: string;
    homeHubBackLink: string;
    introToggleLabel: string;
    externalBtnTemplate: string;
    noProducts: string;
  };
};
