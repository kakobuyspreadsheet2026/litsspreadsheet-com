const FALLBACK_ALT = 'LitBuy Spreadsheet — archived LitBuy notice image';

function spreadsheetMirrorAlt(existing: string): string {
  const trimmed = existing.trim();
  if (!trimmed || /oopbuy/i.test(trimmed)) {
    return FALLBACK_ALT;
  }
  if (/litbuy spreadsheet/i.test(trimmed)) {
    return trimmed;
  }
  return `${trimmed} — LitBuy Spreadsheet archived notice`;
}

/**
 * Ensures every `<img>` in archived HTML mirrors has LitBuy Spreadsheet–centric alt text.
 */
export function normalizeMirrorImageAlts(html: string): string {
  return html.replace(/<img\b([^>]*?)>/gi, (match, attrs: string) => {
    if (/\balt\s*=/i.test(attrs)) {
      const normalizedAttrs = attrs
        .replace(/\balt\s*=\s*"([^"]*)"/i, (_full, alt: string) => {
          return `alt="${spreadsheetMirrorAlt(alt)}"`;
        })
        .replace(/\balt\s*=\s*'([^']*)'/i, (_full, alt: string) => {
          return `alt='${spreadsheetMirrorAlt(alt)}'`;
        });
      return `<img${normalizedAttrs}>`;
    }
    return `<img${attrs} alt="${FALLBACK_ALT}">`;
  });
}
