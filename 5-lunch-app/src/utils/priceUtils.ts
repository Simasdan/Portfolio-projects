export function formatPrice(price: number, locale = 'en-DE', currency = 'EUR'): string {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
}

export function formatRating(rating: number | string): string {
  return typeof rating === 'number' ? rating.toFixed(1) : rating;
}
