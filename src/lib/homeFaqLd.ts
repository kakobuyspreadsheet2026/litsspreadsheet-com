import type { GuideSectionStub } from '../i18n/types';

/** FAQPage JSON-LD from homepage guide accordion (`HomeStubContent.sections`). */
export function homeFaqPageLd(
  pageUrl: string,
  sections: readonly GuideSectionStub[],
): Record<string, unknown> {
  const baseUrl = pageUrl.replace(/\/$/, '') || pageUrl;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}#faq`,
    url: `${baseUrl}#litbuyspreadsheet-spreadsheet-guide`,
    mainEntity: sections.map((sec) => ({
      '@type': 'Question',
      name: sec.h3,
      acceptedAnswer: {
        '@type': 'Answer',
        text: sec.paragraphs.join('\n\n'),
      },
    })),
  };
}
