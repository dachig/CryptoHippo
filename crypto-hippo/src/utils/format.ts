export function formatNumber(preFormattedNumber: number) {
  const formattedNumber = new Intl.NumberFormat("nl-BE").format(
    preFormattedNumber
  );
  return formattedNumber;
}
export function formatCurrency(preFormattedCurrency: number, currency : string) {
  const formattedCurrency = new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency,
  }).format(preFormattedCurrency);
  return formattedCurrency;
}
