import type { HomeStubContent } from '../types';

export const CAT_PATHS = [
  { id: 'shoes' as const, path: '/c/shoes' },
  { id: 't-shirts' as const, path: '/search?q=t-shirt' },
  { id: 'pants' as const, path: '/search?q=pants%20shorts' },
  { id: 'accessories' as const, path: '/c/accessories' },
  { id: 'bags' as const, path: '/search?q=bag%20backpack' },
  { id: 'electronics' as const, path: '/c/electronics' },
  { id: 'jackets' as const, path: '/search?q=jacket' },
  { id: 'hoodies' as const, path: '/search?q=hoodie' },
  { id: 'headwear' as const, path: '/search?q=cap%20hat' },
  { id: 'jersey' as const, path: '/search?q=jersey' },
  { id: 'perfume' as const, path: '/c/beauty' },
  { id: 'other' as const, path: '/products' },
];

export type PillId = (typeof CAT_PATHS)[number]['id'];

export function pillsFor(
  labels: Record<PillId, { label: string; alt: string }>,
): HomeStubContent['categoryPills'] {
  return CAT_PATHS.map(({ id, path }) => ({
    id,
    label: labels[id].label,
    imgAlt: labels[id].alt,
    path,
  }));
}
