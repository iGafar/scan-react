export function getLocaleDate(date: string): string {
  return new Date(date).toLocaleDateString('ru-Ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
