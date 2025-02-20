import { TonalityType } from '@/api/controllers/objectsearch-controller/objectsearch-controller.types';

export const checkboxesData = [
  {
    id: 1,
    label: 'Признак максимальной полноты',
  },
  {
    id: 2,
    label: 'Упоминания в бизнес-контексте',
  },
  {
    id: 3,
    label: 'Главная роль в публикации',
  },
  {
    id: 4,
    label: 'Публикации только с риск-факторами',
  },
  {
    id: 5,
    label: 'Включать технические новости рынков',
  },
  {
    id: 6,
    label: 'Включать анонсы и календари',
  },
  {
    id: 7,
    label: 'Включать сводки новостей',
  },
];

export const tonalityOptions: { label: string; value: TonalityType }[] = [
  { value: 'any', label: 'Любой' },
  { value: 'negative', label: 'Негативный' },
  { value: 'positive', label: 'Позитивный' },
];
