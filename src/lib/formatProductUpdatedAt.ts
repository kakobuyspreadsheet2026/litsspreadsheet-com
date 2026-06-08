const UPDATED_AT_FORMAT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export function formatProductUpdatedAt(updatedAt?: string | null): string | null {
  if (!updatedAt) return null;

  const date = new Date(updatedAt);
  if (Number.isNaN(date.getTime())) return null;

  return UPDATED_AT_FORMAT.format(date);
}
