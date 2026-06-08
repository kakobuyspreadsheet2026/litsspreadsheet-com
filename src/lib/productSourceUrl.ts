const SOURCE_URL_PATTERN = /sourceUrl\\*"\s*:\s*\\*"https?:\/\/([^"\\]+)/;

export function parseLitrepstarSourceUrl(html: string): string | null {
  const match = html.match(SOURCE_URL_PATTERN);
  if (!match) return null;
  return `https://${match[1].replace(/\\u0026/g, '&').replace(/\\/g, '')}`;
}

export async function resolveProductSourceUrl(slug: string, fallbackUrl: string): Promise<string> {
  try {
    const res = await fetch(`https://litrepstar.com/en/products/${slug}`);
    if (!res.ok) return fallbackUrl;
    const html = await res.text();
    return parseLitrepstarSourceUrl(html) ?? fallbackUrl;
  } catch {
    return fallbackUrl;
  }
}

export function marketplacePlatformName(sourceUrl: string): string {
  if (sourceUrl.includes('weidian.com')) return 'Weidian';
  if (sourceUrl.includes('taobao.com') || sourceUrl.includes('tmall.com')) return 'Taobao';
  if (sourceUrl.includes('1688.com')) return '1688';
  return 'Marketplace';
}
