export function formatText(text: string): string {
  return text
    .replace(/<.*?>/g, '')
    .replace(/;.*?;/g, '')
    .replace(/&.*?t/g, '')
    .replace(/s.*?;/g, '')
    .replace(/\?.*?\d/g, '')
    .replace(/\/.*?\s/g, '')
    .replace(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)/g, '');
}
