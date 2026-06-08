/**
 * Backfill priceUsd on pinned litrepstarHomePicks.json from homepage cards.
 * Does not change product selection or images.
 *
 * Run: npm run sync:litrepstar-prices
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const SOURCE_URL = 'https://litrepstar.com/en';
const ROOT = process.cwd();
const OUT_JSON = path.join(ROOT, 'src/data/litrepstarHomePicks.json');

const CARD_PRICE_RE =
  /<a[^>]+href="(\/en\/products\/[^"]+)"[^>]*>[\s\S]*?<h3[^>]*>[^<]+<\/h3>[\s\S]*?≈ \$([0-9]+(?:\.[0-9]{2})?)/gi;

function slugFromHref(href) {
  const m = href.match(/\/products\/([^/?]+)/);
  return m?.[1] ?? null;
}

function buildPriceMap(html) {
  const map = new Map();
  let m;
  CARD_PRICE_RE.lastIndex = 0;
  while ((m = CARD_PRICE_RE.exec(html)) !== null) {
    const slug = slugFromHref(m[1].split('?')[0]);
    const priceUsd = Number.parseFloat(m[2]);
    if (slug && Number.isFinite(priceUsd) && !map.has(slug)) {
      map.set(slug, priceUsd);
    }
  }
  return map;
}

async function main() {
  const raw = await fs.readFile(OUT_JSON, 'utf8');
  const payload = JSON.parse(raw);

  console.log(`Fetching ${SOURCE_URL} for prices…`);
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'litbuyspreadsheet-com/1.0 (price backfill)' },
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`Failed to fetch ${SOURCE_URL}: ${res.status}`);
  const html = await res.text();

  const priceMap = buildPriceMap(html);
  console.log(`Parsed ${priceMap.size} homepage prices.`);

  let updated = 0;
  let missing = 0;
  for (const product of payload.products) {
    const priceUsd = priceMap.get(product.slug);
    if (priceUsd == null) {
      missing += 1;
      continue;
    }
    if (product.priceUsd !== priceUsd) {
      product.priceUsd = priceUsd;
      updated += 1;
    }
  }

  payload.pricesUpdatedAt = new Date().toISOString();
  await fs.writeFile(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Updated ${updated} prices; ${missing} slugs not on homepage. Wrote ${OUT_JSON}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
