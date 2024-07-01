export function formatCurrency(number: number) {
  return new Intl.NumberFormat(navigator.languages[0] ?? navigator.language, {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
}
