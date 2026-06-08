import type { BlogPostMeta } from './recentBlogPosts';
import { sortBlogPostsNewestFirst } from './recentBlogPosts';

export const BLOG_POSTS_PER_PAGE = 10;

/**
 * Sorted archive slice for blog index pages (1-based `page`).
 * Callers must only request `page` in `1..totalPages` (enforced by static paths + index).
 */
export function getBlogListingForPage<T extends BlogPostMeta>(
  allPosts: readonly T[],
  page: number,
): {
  posts: T[];
  totalPages: number;
  totalPosts: number;
  currentPage: number;
} {
  const sorted = sortBlogPostsNewestFirst(allPosts);
  const totalPosts = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / BLOG_POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  const posts = sorted.slice(start, start + BLOG_POSTS_PER_PAGE);
  return { posts, totalPages, totalPosts, currentPage };
}

/** Params `n` for `/…/blog/page/[n]/` (only pages ≥ 2). Empty when a single listing page suffices. */
export function getBlogPaginationParamNs(totalPosts: number): string[] {
  const totalPages = Math.max(1, Math.ceil(totalPosts / BLOG_POSTS_PER_PAGE));
  if (totalPages <= 1) return [];
  return Array.from({ length: totalPages - 1 }, (_, i) => String(i + 2));
}

/** `<title>` for listing pages &gt; 1: insert localized affix before ` | ` when present. */
export function formatBlogListingPageTitle(
  fullTitle: string,
  page: number,
  affixBeforePipeTemplate: string,
): string {
  if (page <= 1) return fullTitle;
  const affix = affixBeforePipeTemplate.replace('{current}', String(page));
  const pipe = fullTitle.indexOf(' | ');
  if (pipe === -1) return `${fullTitle}${affix}`;
  return `${fullTitle.slice(0, pipe)}${affix}${fullTitle.slice(pipe)}`;
}

/** Canonical path segment for listing (no trailing slash); page 1 → `/blog` or `/de/blog`. */
export function blogListingCanonicalPath(localePrefix: '' | `/${string}`, page: number): string {
  const base = localePrefix ? `${localePrefix}/blog` : '/blog';
  if (page <= 1) return base;
  return `${base}/page/${page}`;
}

export function getBlogPaginationRelUrls(
  origin: string,
  localePrefix: '' | `/${string}`,
  currentPage: number,
  totalPages: number,
): {
  prevUrl?: string;
  nextUrl?: string;
} {
  const cleanOrigin = origin.replace(/\/$/, '');
  const base = localePrefix ? `${localePrefix}/blog` : '/blog';

  let prevUrl: string | undefined;
  if (currentPage > 1) {
    if (currentPage === 2) {
      prevUrl = `${cleanOrigin}${base}/`;
    } else {
      prevUrl = `${cleanOrigin}${base}/page/${currentPage - 1}/`;
    }
  }

  let nextUrl: string | undefined;
  if (currentPage < totalPages) {
    nextUrl = `${cleanOrigin}${base}/page/${currentPage + 1}/`;
  }

  return { prevUrl, nextUrl };
}
