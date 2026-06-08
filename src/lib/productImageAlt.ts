/** CJK unified + extension blocks — strip from English-only image alt text. */
const CJK_RE = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g;

/** Remove CJK characters from catalogue titles/brands used in `alt` attributes. */
export function englishAltFragment(text: string): string {
  return text.replace(CJK_RE, '').replace(/\s+/g, ' ').trim();
}
