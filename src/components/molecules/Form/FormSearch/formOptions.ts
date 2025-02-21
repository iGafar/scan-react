import { TonalityType } from '@/api/controllers/objectsearch-controller/objectsearch-controller.types';

interface IOptions<V, L> {
  value: V;
  label: L;
}

export const checkboxOptions: IOptions<string, string>[] = [
  {
    label: 'Признак максимальной полноты',
    value: 'maxFullness',
  },
  {
    label: 'Упоминания в бизнес-контексте',
    value: 'inBusinessNews',
  },
  {
    label: 'Главная роль в публикации',
    value: 'onlyMainRole ',
  },
  {
    label: 'Публикации только с риск-факторами',
    value: 'onlyWithRiskFactors',
  },
  {
    label: 'Включать технические новости рынков',
    value: 'isTechNews',
  },
  {
    label: 'Включать анонсы и календари',
    value: 'isAnnouncement',
  },
  {
    label: 'Включать сводки новостей',
    value: 'isDigest',
  },
];

export const tonalityOptions: IOptions<TonalityType, string>[] = [
  { value: 'any', label: 'Любой' },
  { value: 'negative', label: 'Негативный' },
  { value: 'positive', label: 'Позитивный' },
];
