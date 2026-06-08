/** Shared Schema.org HowTo (keep in sync with `/news` jsonLd when re-used). */
export const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'From Spreadsheet browse to LitBuy purchase: a seven-step paste ritual',
  description:
    'Walk the spreadsheet catalogue rails, harvest a durable marketplace link, hand it to LitBuy, interrogate warehouse photography, and only then commit to international shipping with realistic landed math.',
  inLanguage: 'en',
  totalTime: 'PT20M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Choose a category entry',
      text: 'On litsspreadsheet.com’s homepage, pick the category chip that aligns with your hunt—each opens the paired Spreadsheet catalogue route in a separate tab.',
    },
    {
      '@type': 'HowToStep',
      name: 'Open the listing you intend to buy',
      text: 'Inside the browse chrome, load the product detail view and reconcile variant descriptors, galleries, and any batch annotations before touching the URL.',
    },
    {
      '@type': 'HowToStep',
      name: 'Copy a stable listing URL',
      text: 'Grab the complete address that resolves to the SKU you reviewed—avoid image CDNs, album-only pages, or shortened redirects that silently swap inventory.',
    },
    {
      '@type': 'HowToStep',
      name: 'Paste into LitBuy’s intake',
      text: 'Authenticate on litbuy.com, launch their paste-to-buy flow, insert the link, and lock every selector the listing demanded.',
    },
    {
      '@type': 'HowToStep',
      name: 'Pay domestically and wait for inbound scans',
      text: 'Complete LitBuy’s charge step; their logistics partners handle the domestic leg up to the photography bench.',
    },
    {
      '@type': 'HowToStep',
      name: 'Audit warehouse QC imagery',
      text: 'When LitBuy publishes QC shots, pixel-peep panel alignment, hue drift, logos, and sizing aids prior to approving any export line.',
    },
    {
      '@type': 'HowToStep',
      name: 'Ship home with eyes open',
      text: 'Pick the international service class, settle freight, and monitor tracking—your landed receipt should include duties, service fees, and volumetric adjustments, not just the spreadsheet cell.',
    },
  ],
} as const;
