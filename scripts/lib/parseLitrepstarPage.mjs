export const SOURCE_URL_PATTERN = /sourceUrl\\*"\s*:\s*\\*"https?:\/\/([^"\\]+)/;
export const AVAILABLE_SIZES_PATTERN = /availableSizes\\":(\[[^\]]*\])/;

export const LITREPSTAR_PRODUCT_PAGE = 'https://litrepstar.com/en/products';

export function litrepstarProductPageUrl(slug) {
  return `${LITREPSTAR_PRODUCT_PAGE}/${slug}`;
}

export function parseLitrepstarSourceUrl(html) {
  const match = html.match(SOURCE_URL_PATTERN);
  if (!match) return null;
  return `https://${match[1].replace(/\\u0026/g, '&').replace(/\\/g, '')}`;
}

export function parseLitrepstarAvailableSizes(html) {
  const match = html.match(AVAILABLE_SIZES_PATTERN);
  if (!match) return [];
  try {
    const parsed = JSON.parse(match[1].replace(/\\"/g, '"'));
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => typeof entry === 'string' && entry.trim()).map((entry) => entry.trim());
  } catch {
    return [];
  }
}
