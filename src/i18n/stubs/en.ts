import type { HomeStubContent } from '../types';
import { mlSpreadsheetLitbuyspreadsheet } from '../../consts';
import { pillsFor } from './categoryPaths';

export const enHome: HomeStubContent = {
  title: 'LitBuy Spreadsheet 2026 — Links, Categories & QC Guide',
  description:
    'LitBuy Spreadsheet hub at litsspreadsheet.com: browse Taobao, Weidian and 1688 finds by category, copy links into LitBuy, and read QC tips before you ship.',
  keywords:
    'litbuy spreadsheet, litbuy spreadsheet 2026, litbuy spreadsheet links, litbuy spreadsheet taobao, litbuy spreadsheet qc, litbuy spreadsheet guide',
  webPageName: 'LitBuy Spreadsheet 2026 · litsspreadsheet.com',
  webPageKeywords: [
    'litbuy spreadsheet hub',
    'litbuy spreadsheet categories',
    'litbuy spreadsheet litrepstar',
    'litbuy paste link workflow',
    'litbuy warehouse qc',
  ],
  hero: {
    h1: 'LitBuy Spreadsheet Hub',
    kicker: 'litbuy spreadsheet · Taobao · Weidian · 1688',
    body:
      'litsspreadsheet.com is your LitBuy Spreadsheet starting point: pick a category, open listings on Litrepstar, copy the product URL, and finish checkout on LitBuy with warehouse QC before international shipping.',
    ctaBrowse: 'Open LitBuy Spreadsheet catalogue →',
    ctaLogin: 'Sign in on LitBuy →',
    heroPlaneAlt: 'LitBuy Spreadsheet hero · litsspreadsheet.com',
    searchAria: 'Search LitBuy Spreadsheet catalogue',
    searchPlaceholder: 'Search styles, brands or keywords…',
    searchByImage: 'Search by image',
    searchSubmit: 'Search',
    searchByImageAria: 'Image search opens catalogue in a new tab',
  },
  categoriesAria: 'LitBuy Spreadsheet category shortcuts',
  exploreTitle: 'LitBuy Spreadsheet categories',
  redditAria: 'LitBuy community on Reddit (opens in new tab)',
  redditSnooAlt: 'Reddit — LitBuy Spreadsheet community',
  guideH2: 'How the LitBuy Spreadsheet workflow works',
  guideIntro:
    'Four questions every new LitBuy Spreadsheet user asks. Expand a row for a quick answer, or open How to buy for paste-link screenshots.',
  sections: [
    {
      h3: 'What is the LitBuy Spreadsheet?',
      paragraphs: [
        'The LitBuy Spreadsheet is a curated index of Taobao, Weidian, and 1688 product links built for LitBuy buyers. Rows include photos, price hints, and seller notes so you can paste a stable URL into LitBuy instead of searching Chinese marketplaces blind.',
        'litsspreadsheet.com is the guide layer: we map categories, link to the live catalogue on Litrepstar, and send you to LitBuy for payment, QC photos, and parcel export.',
      ],
    },
    {
      h3: 'How do I buy from a spreadsheet row?',
      paragraphs: [
        'Open a listing, copy the marketplace URL, paste it into LitBuy, confirm size and colour, then pay the domestic seller price.',
        'When the item reaches the LitBuy warehouse, review QC photos in your account. Approve, exchange, or return before anything ships abroad.',
      ],
    },
    {
      h3: 'Why pair a spreadsheet with LitBuy?',
      paragraphs: [
        'Chinese sellers rarely ship internationally on their own. LitBuy buys locally, stores items safely, photographs them for QC, and can combine multiple orders into one outbound parcel.',
        'Use litsspreadsheet.com to discover links, then let LitBuy handle purchase, inspection, and shipping in one place.',
      ],
    },
    {
      h3: 'What if a spreadsheet link stops working?',
      paragraphs: [
        'Listings change fast. If a row 404s, choose another item in the same category on Litrepstar or return to the homepage grid.',
        'If LitBuy cannot buy after you paid, the agent refunds to your balance so you can paste a replacement link.',
      ],
    },
  ],
  ctaHeading: 'Start browsing the LitBuy Spreadsheet',
  ctaIntro: 'Open the live catalogue at',
  ctaIntroSuffix: ' — discover links here, paste and pay on LitBuy.',
  ctaFooterNote: 'Always re-check QC, seller policies, and shipping quotes on LitBuy before you export a parcel.',
  sheetLinkLabel: 'LitBuy Spreadsheet on Litrepstar',
  categoryPills: pillsFor({
    shoes: { label: 'Shoes', alt: 'LitBuy Spreadsheet sneakers and boots' },
    't-shirts': { label: 'T-Shirts', alt: 'LitBuy Spreadsheet tees and graphics' },
    pants: { label: 'Pants/Shorts', alt: 'LitBuy Spreadsheet pants and joggers' },
    accessories: { label: 'Accessories', alt: 'LitBuy Spreadsheet belts and jewellery' },
    bags: { label: 'Bags', alt: 'LitBuy Spreadsheet bags and backpacks' },
    electronics: { label: 'Electronics', alt: 'LitBuy Spreadsheet tech and audio' },
    jackets: { label: 'Jackets', alt: 'LitBuy Spreadsheet jackets and shells' },
    hoodies: { label: 'Hoodies/Sweaters', alt: 'LitBuy Spreadsheet hoodies and knits' },
    headwear: { label: 'Headwear', alt: 'LitBuy Spreadsheet caps and beanies' },
    jersey: { label: 'Jersey', alt: 'LitBuy Spreadsheet jerseys and mesh tops' },
    perfume: { label: 'Perfume', alt: 'LitBuy Spreadsheet fragrance picks' },
    other: { label: 'Other stuff', alt: 'LitBuy Spreadsheet lifestyle finds' },
  }),
  footer: {
    disclaimerLabel: 'Disclaimer:',
    disclaimerHtml: `litsspreadsheet.com is an independent <strong>LitBuy Spreadsheet</strong> guide — category shortcuts, paste tips, and QC context only. Checkout and warehouse photos happen on <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a> and the <a href="${mlSpreadsheetLitbuyspreadsheet}" target="_blank" rel="noopener noreferrer">Litrepstar catalogue</a>. We do not process payments or parcels.`,
    copyrightLine: '© 2026 litsspreadsheet.com · LitBuy Spreadsheet SEO hub — not the LitBuy checkout site.',
  },
  categoryPage: {
    titleTemplate: 'LitBuy Spreadsheet {uiName} 2026 — Curated Picks',
    descriptionTemplate:
      'Browse LitBuy Spreadsheet {uiNameLower} for 2026: editorial picks with links to Litrepstar listings ready to paste into LitBuy.',
    introTemplate:
      'Editorial {uiNameLower} lane for LitBuy Spreadsheet shoppers. Cards open Litrepstar in a new tab — paste the URL into LitBuy when you are ready to buy.',
    homeHubBackLink: '← LitBuy Spreadsheet home',
    introToggleLabel: 'About this category',
    externalBtnTemplate: 'Browse {uiName} on Litrepstar →',
    noProducts: 'No picks in this lane yet — try another LitBuy Spreadsheet category.',
  },
};
