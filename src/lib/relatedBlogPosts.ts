import blogPosts from '../data/blogPosts.json';
import { getAllBlogArticleSlugs } from '../data/blogArticles';
import { getTopicsForBlogSlug, type BlogTopicId } from './blogTopicClusters';

export type RelatedBlogPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  score: number;
};

type PostRow = {
  slug: string;
  title: string;
  description: string;
  published: string;
};

const posts = blogPosts as PostRow[];
const postBySlug = new Map(posts.map((p) => [p.slug, p]));
const articleSlugs = new Set(getAllBlogArticleSlugs());

function topicOverlapScore(a: string, b: string): number {
  const topicsA = new Set(getTopicsForBlogSlug(a));
  const topicsB = getTopicsForBlogSlug(b);
  let score = 0;
  for (const t of topicsB) {
    if (topicsA.has(t)) score += 10;
  }
  return score;
}

function slugTokenScore(a: string, b: string): number {
  const tokensA = new Set(a.split('-').filter((t) => t.length > 3));
  const tokensB = b.split('-').filter((t) => t.length > 3);
  let score = 0;
  for (const t of tokensB) {
    if (tokensA.has(t)) score += 1;
  }
  return score;
}

function recencyBoost(published: string): number {
  const ts = Date.parse(`${published}T12:00:00`);
  if (Number.isNaN(ts)) return 0;
  const days = (ts - Date.parse('2026-01-01T12:00:00')) / 86400000;
  return Math.min(days / 30, 3);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): RelatedBlogPost[] {
  const current = postBySlug.get(currentSlug);
  if (!current) return [];

  const scored = posts
    .filter((p) => p.slug !== currentSlug && articleSlugs.has(p.slug))
    .map((p) => {
      const score =
        topicOverlapScore(currentSlug, p.slug) +
        slugTokenScore(currentSlug, p.slug) +
        recencyBoost(p.published);
      return { ...p, score };
    })
    .filter((p) => p.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.published.localeCompare(a.published) ||
        a.slug.localeCompare(b.slug),
    );

  if (scored.length >= limit) return scored.slice(0, limit);

  const filler = posts
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        articleSlugs.has(p.slug) &&
        !scored.some((s) => s.slug === p.slug),
    )
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, limit - scored.length)
    .map((p) => ({ ...p, score: 0 }));

  return [...scored, ...filler].slice(0, limit);
}

export function getTopicLabel(topicId: BlogTopicId): string {
  const labels: Record<BlogTopicId, string> = {
    'eu-customs': 'EU customs',
    'sale-logistics': '618 & logistics',
    'qc-warehouse': 'QC & warehouse',
    'shipping-freight': 'Shipping & freight',
    'spreadsheet-lanes': 'Spreadsheet lanes',
    'safety-trust': 'Safety & trust',
    'budget-tools': 'Budget & tools',
    'community-calendar': 'Community',
  };
  return labels[topicId];
}
