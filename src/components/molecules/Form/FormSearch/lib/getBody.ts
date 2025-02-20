import { IObjectiveSearchBody } from '@/api/controllers/objectsearch-controller/objectsearch-controller.types';
import { IFormSearchValues } from '@/components/molecules/Form/FormSearch';

export function getBody(params: IFormSearchValues): IObjectiveSearchBody {
  const {
    startDate,
    endDate,
    inn,
    maxFullness = false,
    inBusinessNews = false,
    onlyMainRole = false,
    tonality,
    onlyWithRiskFactors = false,
    excludeTechNews = false,
    excludeAnnouncements = false,
    excludeDigests = false,
    limit,
  } = params;

  return {
    attributeFilters: {
      excludeAnnouncements,
      excludeDigests,
      excludeTechNews,
    },
    histogramTypes: ['totalDocuments', 'riskFactors'],
    intervalType: 'month',
    issueDateInterval: {
      endDate,
      startDate,
    },
    limit,
    searchArea: {
      excludedSourceGroups: [],
      excludedSources: [],
      includedSourceGroups: [],
      includedSources: [],
    },
    searchContext: {
      targetSearchEntitiesContext: {
        onlyMainRole,
        onlyWithRiskFactors,
        riskFactors: {
          and: [],
          not: [],
          or: [],
        },
        targetSearchEntities: [
          {
            entityId: null,
            inBusinessNews,
            inn,
            maxFullness,
            sparkId: null,
            type: 'company',
          },
        ],
        themes: {
          and: [],
          not: [],
          or: [],
        },
        tonality,
      },
      themesFilter: {
        and: [],
        not: [],
        or: [],
      },
    },
    similarMode: 'duplicates',
    sortDirectionType: 'desc',
    sortType: 'issueDate',
  };
}
