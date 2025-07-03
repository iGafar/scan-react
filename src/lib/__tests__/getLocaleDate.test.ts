import { getLocaleDate } from '../getLocaleDate';

describe('getLocaleDate', () => {
  it('formats date string correctly', () => {
    const dateString = '2024-01-15T10:30:00Z';
    const result = getLocaleDate(dateString);
    
    // Проверяем формат DD.MM.YYYY
    expect(result).toMatch(/^\d{2}\.\d{2}\.\d{4}$/);
  });

  it('handles different date formats', () => {
    const dateString = '2024-12-25';
    const result = getLocaleDate(dateString);
    
    expect(result).toMatch(/^\d{2}\.\d{2}\.\d{4}$/);
    expect(result).toContain('25');
    expect(result).toContain('12');
    expect(result).toContain('2024');
  });
});