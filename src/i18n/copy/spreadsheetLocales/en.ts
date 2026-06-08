import type { SpreadsheetPageCopy } from '../spreadsheetCopy.types';

export const en: SpreadsheetPageCopy = {
  title: 'LitBuy Spreadsheet Guide (2026) — litsspreadsheet.com',
  description:
    'Learn how the LitBuy Spreadsheet works: browse curated marketplace links, copy listing URLs, paste into LitBuy, and review warehouse QC before shipping.',
  keywords:
    'LitBuy Spreadsheet, litbuy spreadsheet guide, paste Taobao link LitBuy, Weidian spreadsheet, shopping agent tutorial',
  backHomeLabel: '← Back to Home',
  h1: 'LitBuy Spreadsheet',
  h2Hero: 'Curated marketplace links built for LitBuy shoppers.',
  subhead:
    'Browse shoes, streetwear, bags, electronics, and more—then copy listing URLs into LitBuy for QC photos and international shipping.',
  introHtml: `litsspreadsheet.com is the <strong>guide layer</strong> for the <strong>LitBuy Spreadsheet</strong>. We explain how to use <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">the live catalogue</a></strong>, read rows safely, and paste links into <strong><a href="{litbuyUrl}" target="_blank" rel="noopener noreferrer">LitBuy</a></strong>. Checkout, warehouse QC, and shipping all happen on LitBuy—not here.<br/><br/>
Need step-by-step help? See <a href="{howToUrl}">How to buy</a> or check <a href="{newsUrl}">News &amp; guides</a> for updates.`,
  heroTags: [
    'Curated SKU links',
    'Category lanes',
    'Paste-ready URLs',
    'QC before you ship',
    'Updated listings',
    'Checkout on LitBuy',
  ],
  whatIsTitle: 'What is the LitBuy Spreadsheet?',
  whatIsBodyHtml: `The LitBuy Spreadsheet is a <strong>curated link directory</strong> pointing to Taobao, Weidian, and 1688 listings. The <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">browse UI</a></strong> groups items by category so you can find products without searching Chinese marketplaces blind.<br/><br/>
Some rows include seller photos—treat those as previews only. LitBuy warehouse photos are what you approve before export. This site does not host inventory or process payments.<br/><br/>
Listings change often. If a link breaks, check the <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">live catalogue</a></strong> for a fresh row.`,
  learnMoreLabel: 'Learn more →',
  previewTitle: 'Popular picks in the spreadsheet',
  previewIntroHtml: `Sample rows below show typical categories—not live prices. Open the <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">catalogue</a></strong> for current listings.`,
  previewFiltersLabel: 'Trending filters:',
  previewCards: [
    {
      title: 'Classic runner',
      category: 'Shoes',
      priceHint: '~$34',
      tagsLine: 'Footwear lane · check batch notes · QC on arrival',
    },
    {
      title: 'Washed graphic tee',
      category: 'T-shirts',
      priceHint: '~$15',
      tagsLine: 'Summer staple · oversized fit · easy filler item',
    },
    {
      title: 'Zip fleece hoodie',
      category: 'Hoodies / sweaters',
      priceHint: '~$29',
      tagsLine: 'Heavy fabric · zipper QC · watch DIM weight',
    },
    {
      title: 'Crossbody sling bag',
      category: 'Bags',
      priceHint: '~$23',
      tagsLine: 'EDC pick · hardware QC · strap length varies',
    },
    {
      title: 'Mesh court jersey',
      category: 'Jersey',
      priceHint: '~$18',
      tagsLine: 'Lightweight · print quality · compare listings',
    },
    {
      title: 'Wireless earbuds',
      category: 'Electronics',
      priceHint: '~$27',
      tagsLine: 'Battery check · use sensitive shipping line',
    },
  ],
  whyTitle: 'Why use the LitBuy Spreadsheet?',
  whyItems: [
    {
      title: 'Skip random marketplace search',
      body: 'Category lanes surface vetted links instead of guessing Taobao keywords.',
    },
    {
      title: 'Organized by product type',
      body: 'Shoes, tops, outerwear, bags, and gadgets each have their own browse path.',
    },
    {
      title: 'Community-tested links',
      body: 'Rows point to listings other LitBuy shoppers already use.',
    },
    {
      title: 'Seller QC as a starting point',
      body: 'Some cells include preview photos—always confirm with LitBuy warehouse shots.',
    },
    {
      title: 'Fast copy-paste workflow',
      body: 'Grab the item URL and paste directly into LitBuy.',
    },
    {
      title: 'Beginner-friendly layout',
      body: 'Pair this page with How to buy when you need click-by-click steps.',
    },
  ],
  howTitle: 'How to shop with the spreadsheet',
  howSteps: [
    {
      title: 'Step 1 — Pick a category',
      body: 'Open footwear, apparel, accessories, or search inside the catalogue browse.',
    },
    {
      title: 'Step 2 — Copy the item URL',
      body: 'Use the product link—not the shop homepage. Check size charts before ordering.',
    },
    {
      title: 'Step 3 — Paste into LitBuy',
      body: 'Submit the link in LitBuy, pay domestic shipping, and wait for warehouse arrival.',
    },
    {
      title: 'Step 4 — Review QC photos',
      body: 'Zoom in on stitching, logos, and color. Dispute issues before approving export.',
    },
    {
      title: 'Step 5 — Ship internationally',
      body: 'Choose a freight line, confirm volumetric weight, and track inside LitBuy.',
    },
  ],
  columnsTitle: 'Reading spreadsheet rows',
  columnsIntroHtml: `Most LitBuy Spreadsheet rows share the same fields: a marketplace URL, optional batch label, seller preview image, and an estimated price. Treat prices as <strong>rough guides</strong>—duties, insurance, and shipping are calculated in <strong><a href="{litbuyUrl}" target="_blank" rel="noopener noreferrer">LitBuy</a></strong>.<br/><br/>
New to pasting links? Start with <a href="{howToUrl}">How to buy</a>.`,
  columnTips: [
    {
      title: 'Item URL vs shop URL',
      body: 'Always copy the listing permalink. Shop homepages often fail in agents.',
    },
    {
      title: 'Batch labels',
      body: 'Factory nicknames help compare versions—they are not quality guarantees.',
    },
    {
      title: 'Inline preview photos',
      body: 'Seller images are marketing. LitBuy warehouse photos are the real QC.',
    },
    {
      title: 'Listed prices',
      body: 'Row prices exclude duties, FX swings, and volumetric shipping costs.',
    },
    {
      title: 'Category tabs',
      body: 'Use lane filters to narrow shoes, hoodies, bags, and other verticals.',
    },
  ],
  resourcesTitle: 'Helpful pages on this site',
  resourcesIntroHtml: `These on-domain guides support your LitBuy Spreadsheet workflow. All purchases still finish inside <strong><a href="{litbuyUrl}" target="_blank" rel="noopener noreferrer">LitBuy</a></strong>.`,
  resourceCards: [
    {
      title: 'Paste links step by step',
      bodyHtml: `New to the workflow? Our <a href="/how-to-buy/">How to buy</a> page walks through copying URLs, submitting orders, and reviewing warehouse QC.`,
    },
    {
      title: 'News and LitBuy updates',
      bodyHtml: `Policy changes, shipping tips, and hub announcements live on <a href="/news/">News &amp; guides</a>.`,
    },
    {
      title: 'About this spreadsheet hub',
      bodyHtml: `Learn how litsspreadsheet.com relates to LitBuy and third-party marketplaces on our <a href="/about/">About</a> page.`,
    },
    {
      title: 'QC checklist before export',
      bodyHtml: `Before approving a parcel, revisit the QC steps in <a href="/how-to-buy/">How to buy</a>—magnify photos and dispute early.`,
    },
  ],
  marketplaceBridgeTitle: 'Taobao, Weidian, and 1688 links',
  marketplaceBridgeIntroHtml: `Spreadsheet rows point to three main marketplace types. Each behaves differently—see <a href="{howToUrl}">How to buy</a> for paste steps once you have a URL.`,
  marketplaceBridgeCards: [
    {
      title: 'Taobao listings',
      bodyHtml: `Most footwear and apparel rows use Taobao. Check variant grids and size charts before pasting—details in <a href="/how-to-buy/">How to buy</a>.`,
    },
    {
      title: 'Weidian shops',
      bodyHtml: `Weidian sellers update albums frequently. Copy fresh item links, not stale thumbnails. See <a href="/news/">News &amp; guides</a> for sourcing tips.`,
    },
    {
      title: '1688 wholesale rows',
      bodyHtml: `Bulk listings may carry minimum-order rules. Confirm MOQ and lane restrictions before ordering via <a href="/how-to-buy/">How to buy</a>.`,
    },
  ],
  faqTitle: 'FAQ',
  faqs: [
    {
      q: 'What is the LitBuy Spreadsheet?',
      aHtml: `A <strong>curated directory</strong> of Chinese marketplace links for LitBuy shoppers. Browse at <a href="{ml}" target="_blank" rel="noopener noreferrer">the catalogue</a>; buy at <a href="{litbuyUrl}" target="_blank" rel="noopener noreferrer">LitBuy</a>.`,
    },
    {
      q: 'Is this site official LitBuy?',
      aHtml: `No. litsspreadsheet.com is an independent guide hub. LitBuy handles commerce at <a href="{litbuyUrl}" target="_blank" rel="noopener noreferrer">litbuy.com</a>.`,
    },
    {
      q: 'Can beginners use the spreadsheet?',
      aHtml: `Yes. Read this page, then follow <a href="{howToUrl}">How to buy</a> for the full paste-and-QC workflow.`,
    },
    {
      q: 'Does seller QC replace warehouse photos?',
      aHtml: `No. Seller previews are hints only. Always approve based on LitBuy warehouse photography.`,
    },
    {
      q: 'Why do links sometimes break?',
      aHtml: `Sellers rename or remove listings often. Pick another row in the same category or refresh via <a href="{ml}" target="_blank" rel="noopener noreferrer">live browse</a>.`,
    },
    {
      q: 'What categories are available?',
      aHtml: `Shoes, t-shirts, pants, hoodies, jackets, bags, accessories, electronics, jerseys, headwear, perfume, and more.`,
    },
    {
      q: 'Where do I pay?',
      aHtml: `All payments, QC, and shipping happen on <a href="{litbuyUrl}" target="_blank" rel="noopener noreferrer">LitBuy</a>—never on litsspreadsheet.com.`,
    },
    {
      q: 'How often is the spreadsheet updated?',
      aHtml: `Listings rotate with seller stock. Check <a href="{newsUrl}">News &amp; guides</a> for hub updates and browse the catalogue for current rows.`,
    },
    {
      q: 'Do spreadsheet prices include shipping?',
      aHtml: `No. Row prices are item estimates. Landed cost—including international freight—is calculated inside LitBuy.`,
    },
  ],
  bottomCtaTitle: 'Open the LitBuy Spreadsheet catalogue',
  bottomCtaIntroHtml: `Head to the <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">live catalogue</a></strong>, keep <a href="{howToUrl}">How to buy</a> handy, and treat row prices as estimates until LitBuy quotes your full landed cost.`,
  bulletsTitle: 'Before you leave this site',
  bullets: [
    'No checkout here—pay only on LitBuy.',
    'Copy item URLs, not shop homepages.',
    'Approve parcels based on warehouse QC, not seller previews.',
    'Budget for duties, insurance, and volumetric shipping.',
    'Check News for policy changes that rows may not show.',
    'Note batch labels beside URLs for future reference.',
  ],
  ctaLabel: 'Open catalogue →',
  howToBuyLabel: 'How to buy →',
  newsLinkLabel: 'News & guides →',
};
