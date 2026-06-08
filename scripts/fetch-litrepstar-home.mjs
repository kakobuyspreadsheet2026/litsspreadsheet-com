/**
 * Fetches homepage product picks from https://litrepstar.com/en
 * — diverse brands + categories (hero + promo carousel stay self-hosted).
 *
 * Manual sync only — homepage picks are pinned in git (not refreshed on deploy).
 * Re-run: npm run sync:litrepstar-home
 * Or: REFRESH_LITREPSTAR=1 node scripts/fetch-litrepstar-home.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const SOURCE_URL = 'https://litrepstar.com/en';
const REFRESH =
  process.env.REFRESH_LITREPSTAR === '1' || process.env.REFRESH_LITREPSTAR === 'true';

const ROOT = process.cwd();
const OUT_JSON = path.join(ROOT, 'src/data/litrepstarHomePicks.json');
const IMG_DIR = path.join(ROOT, 'public/images/litrepstar');
const PRODUCT_LIMIT = 48;
const MAX_PER_BRAND = 1;
const MAX_PER_CATEGORY = 2;

const CARD_RE =
  /<a[^>]+href="(\/en\/products\/[^"]+)"[^>]*>[\s\S]*?<img[^>]+alt="([^"]*)"[^>]+src="([^"]+)"[\s\S]*?<h3[^>]*>([^<]+)<\/h3>[\s\S]*?≈ \$([0-9]+(?:\.[0-9]{2})?)/gi;

/** Real homepage grids only — excludes nav/footer category links. */
const CATEGORY_SECTION_RE =
  /<a[^>]+text-2xl font-black tracking-tight text-white[^>]+href="\/en\/products\?categories=([^"]+)"[^>]*>([^<]+)</g;

const SLUG_BRAND_PREFIXES = [
  'a-bathing-ape',
  'adidas-originals',
  'air-jordan',
  'louis-vuitton',
  'new-balance',
  'off-white',
  'palm-angels',
  'acne-studios',
  'purple-brand',
  'the-north-face',
  'tory-burch',
  'van-cleef',
  'tag-heuer',
  'yves-saint-laurent',
  'under-armour',
  'moncler',
  'lululemon',
  'hellstar',
  'balenciaga',
  'tiffany',
  'rolex',
  'goyard',
  'converse',
  'valentino',
  'burberry',
  'chanel',
  'dior',
  'gucci',
  'nike',
  'prada',
  'fendi',
  'loewe',
  'supreme',
  'ethika',
];

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function slugFromHref(href) {
  const m = href.match(/\/products\/([^/?]+)/);
  return m?.[1] ?? crypto.createHash('md5').update(href).digest('hex').slice(0, 12);
}

function hiResImageUrl(url) {
  const u = new URL(url);
  u.searchParams.set('w', '800');
  u.searchParams.set('h', '800');
  return u.toString();
}

function brandKeyFromSlug(slug) {
  for (const prefix of SLUG_BRAND_PREFIXES) {
    if (slug.startsWith(`${prefix}-`) || slug === prefix) return prefix;
  }
  return slug.split('-')[0] ?? slug;
}

function brandKeyFromTitle(title) {
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length >= 3 && words[0] === 'A' && words[1] === 'Bathing' && words[2] === 'Ape') {
    return 'a-bathing-ape';
  }
  if (words.length >= 3 && words[0] === 'The' && words[1] === 'North' && words[2] === 'Face') {
    return 'the-north-face';
  }
  if (words.length >= 4 && words[0] === 'Polo' && words[1] === 'Ralph' && words[2] === 'Lauren') {
    return 'polo-ralph-lauren';
  }
  if (words.length >= 3 && words[0] === 'Saint' && words[1] === 'Laurent') {
    return 'saint-laurent';
  }
  if (words.length >= 3 && words[0] === 'Arc' && words[1]?.includes('teryx')) {
    return 'arcteryx';
  }
  if (words.length >= 2 && words[0] === 'Comme' && words[1] === 'des') {
    return 'comme-des-garcons';
  }
  if (words.length >= 2 && ['Louis', 'New', 'Air', 'Off', 'Van', 'Tag', 'Under'].includes(words[0])) {
    return `${words[0]}-${words[1]}`.toLowerCase().replace(/\s+/g, '-');
  }
  return (words[0] ?? 'unknown').toLowerCase();
}

function brandKey(slug, title) {
  const fromSlug = brandKeyFromSlug(slug);
  if (fromSlug && fromSlug !== 'design' && fromSlug !== 'unknown') return fromSlug;
  return brandKeyFromTitle(title);
}

function parseCardMatch(m) {
  const href = decodeHtml(m[1]).split('?')[0];
  const slug = slugFromHref(href);
  const imageRemote = decodeHtml(m[3]);
  const title = decodeHtml(m[4]).trim();

  const priceUsd = Number.parseFloat(m[5]);

  return {
    slug,
    title,
    alt: `${title} — LitBuy Spreadsheet pick`,
    href: `https://litrepstar.com${href}`,
    imageRemote: hiResImageUrl(imageRemote),
    brand: brandKey(slug, title),
    ...(Number.isFinite(priceUsd) ? { priceUsd } : {}),
  };
}

function parseProductsByCategory(html) {
  const sections = [];
  let sm;
  while ((sm = CATEGORY_SECTION_RE.exec(html)) !== null) {
    sections.push({
      index: sm.index,
      category: sm[1],
      label: sm[2].trim(),
    });
  }

  const byCategory = new Map();

  for (let i = 0; i < sections.length; i += 1) {
    const start = sections[i].index;
    const end = i + 1 < sections.length ? sections[i + 1].index : html.length;
    const chunk = html.slice(start, end);
    const { category, label } = sections[i];

    if (!byCategory.has(category)) {
      byCategory.set(category, { label, products: [] });
    }
    const bucket = byCategory.get(category);
    const seenInSection = new Set(bucket.products.map((p) => p.slug));

    let m;
    CARD_RE.lastIndex = 0;
    while ((m = CARD_RE.exec(chunk)) !== null) {
      const product = parseCardMatch(m);
      product.category = category;
      product.categoryLabel = label;
      product.alt = `${product.title} — LitBuy Spreadsheet ${label} pick`;
      if (seenInSection.has(product.slug)) continue;
      seenInSection.add(product.slug);
      bucket.products.push(product);
    }
  }

  return byCategory;
}

function selectDiverseProducts(byCategory, limit) {
  const picked = [];
  const seenSlugs = new Set();
  const globalBrandCounts = new Map();
  const categoryCounts = new Map();
  const brandInCategory = new Set();

  const brandPriority = (brand) => (brand === 'design' ? 1 : 0);

  const categoryBrandKey = (brand, category) => `${brand}::${category}`;

  const rankCandidates = (products, category, { allowUsedBrand = false } = {}) =>
    products
      .filter((p) => {
        if (seenSlugs.has(p.slug)) return false;
        if ((categoryCounts.get(category) ?? 0) >= MAX_PER_CATEGORY) return false;
        if (brandInCategory.has(categoryBrandKey(p.brand, category))) return false;
        if (!allowUsedBrand && (globalBrandCounts.get(p.brand) ?? 0) >= MAX_PER_BRAND) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        const usedA = globalBrandCounts.get(a.brand) ?? 0;
        const usedB = globalBrandCounts.get(b.brand) ?? 0;
        if (usedA !== usedB) return usedA - usedB;
        return brandPriority(a.brand) - brandPriority(b.brand);
      });

  const take = (product, category) => {
    picked.push(product);
    seenSlugs.add(product.slug);
    categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
    globalBrandCounts.set(product.brand, (globalBrandCounts.get(product.brand) ?? 0) + 1);
    brandInCategory.add(categoryBrandKey(product.brand, category));
  };

  const categories = [...byCategory.keys()];

  // Pass 1: cover homepage categories; skip homogenous rows that would repeat a brand.
  for (const category of categories) {
    if (picked.length >= limit) break;
    const { products } = byCategory.get(category);
    const candidate = rankCandidates(products, category)[0];
    if (candidate) {
      take(candidate, category);
      continue;
    }

    const fallback = rankCandidates(products, category, { allowUsedBrand: true })[0];
    if (fallback && (globalBrandCounts.get(fallback.brand) ?? 0) === 0) {
      take(fallback, category);
    }
  }

  // Pass 2+: keep adding unique-brand picks until the grid is full.
  let progressed = true;
  while (picked.length < limit && progressed) {
    progressed = false;
    for (const category of categories) {
      if (picked.length >= limit) break;
      const { products } = byCategory.get(category);
      const candidate = rankCandidates(products, category)[0];
      if (candidate) {
        take(candidate, category);
        progressed = true;
      }
    }
  }

  return picked;
}

async function downloadFile(url, dest) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'litbuyspreadsheet-com/1.0 (homepage sync)' },
    signal: AbortSignal.timeout(45000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, buf);
  return dest;
}

async function main() {
  if (!REFRESH) {
    console.log('Skipping litrepstar homepage fetch (pinned assets). Set REFRESH_LITREPSTAR=1 to sync.');
    return;
  }

  console.log(`Fetching ${SOURCE_URL}…`);
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'litbuyspreadsheet-com/1.0 (homepage sync)' },
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`Failed to fetch ${SOURCE_URL}: ${res.status}`);
  const html = await res.text();

  const byCategory = parseProductsByCategory(html);
  const products = selectDiverseProducts(byCategory, PRODUCT_LIMIT);

  if (products.length < 12) {
    throw new Error(`Only selected ${products.length} products — litrepstar HTML may have changed.`);
  }

  const brands = new Set(products.map((p) => p.brand));
  const categories = new Set(products.map((p) => p.category));
  console.log(
    `Selected ${products.length} diverse picks (${brands.size} brands, ${categories.size} categories).`,
  );

  await fs.mkdir(IMG_DIR, { recursive: true });

  for (let i = 0; i < products.length; i += 1) {
    const p = products[i];
    const ext = p.imageRemote.includes('.png') ? 'png' : 'jpg';
    const localRel = `/images/litrepstar/picks/${String(i + 1).padStart(2, '0')}-${p.slug}.${ext}`;
    const localAbs = path.join(ROOT, 'public', localRel);
    try {
      await downloadFile(p.imageRemote, localAbs);
      p.imageLocal = localRel;
    } catch (err) {
      console.warn(`  Skip download ${p.slug}: ${err.message}`);
      p.imageLocal = p.imageRemote;
    }
  }

  const payload = {
    fetchedAt: new Date().toISOString(),
    source: SOURCE_URL,
    selection: { maxPerBrand: MAX_PER_BRAND, maxPerCategory: MAX_PER_CATEGORY },
    products,
  };

  await fs.writeFile(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote ${OUT_JSON}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
