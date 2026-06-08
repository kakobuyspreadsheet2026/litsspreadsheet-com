import type { SpreadsheetBlurb } from '../i18n/copy/spreadsheetCopy.types';

/** HowTo JSON-LD for the spreadsheet tutorial page. */
export function spreadsheetHowToLd(
  pageUrl: string,
  title: string,
  description: string,
  steps: readonly SpreadsheetBlurb[],
  locale: string = 'en'
): Record<string, unknown> {
  const baseUrl = pageUrl.replace(/\/$/, '') || pageUrl;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${baseUrl}#howto`,
    name: title,
    description: description,
    totalTime: 'PT15M',
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Internet connection',
      },
      {
        '@type': 'HowToSupply',
        name: 'LitBuy account',
      },
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Web browser',
      },
      {
        '@type': 'HowToTool',
        name: 'LitBuy Spreadsheet',
      },
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      url: `${baseUrl}#step${index + 1}`,
      name: step.title,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: step.body,
        },
      ],
    })),
  };
}
