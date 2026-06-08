import posts from '../data/blogPosts.json';

export type BlogPostMeta = {
  slug: string;
  title: string;
  published: string;
  description: string;
  lang?: string;
};

/** ISO date descending, then slug for stable ties (matches `/blog` list ordering). */
export function sortBlogPostsNewestFirst<T extends BlogPostMeta>(list: readonly T[]): T[] {
  return [...list].sort(
    (a, b) => b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug),
  );
}

/** Newest first — reflects build-time data (`blogPosts.json`) whenever the site rebuilds. */
export function getRecentBlogPosts(limit = 5): BlogPostMeta[] {
  const list = posts as BlogPostMeta[];
  return sortBlogPostsNewestFirst(list).slice(0, limit);
}
