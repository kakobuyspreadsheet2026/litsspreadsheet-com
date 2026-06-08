import type { BlogArticleContent } from '../blogArticleContent';
import { articlesPart1 } from './part1';
import { articlesPart2 } from './part2';
import { articlesPart3 } from './part3';
import { articlesPart4 } from './part4';
import { articlesPart5 } from './part5';

const ALL_ARTICLES: Record<string, BlogArticleContent> = {
  ...articlesPart1,
  ...articlesPart2,
  ...articlesPart3,
  ...articlesPart4,
  ...articlesPart5,
};

export function getBlogArticleContent(slug: string): BlogArticleContent | undefined {
  return ALL_ARTICLES[slug];
}

export function getAllBlogArticleSlugs(): string[] {
  return Object.keys(ALL_ARTICLES);
}
