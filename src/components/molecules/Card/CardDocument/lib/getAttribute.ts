import { IAttributes } from '@/api/controllers/documents-controller/documents-controller.types';

export function getAttribute(attributes: IAttributes) {
  switch (true) {
    case attributes.isTechNews:
      return 'Технические новости';
    case attributes.isDigest:
      return 'Сводки новостей';
    case attributes.isAnnouncement:
      return 'Анонсы и события';
    default:
      return 'Нет данных';
  }
}
