export interface IDateInterval {
  startDate: string;
  endDate: string;
}

export type TonalityType = 'any' | 'positive' | 'negative';

export interface IObjectiveSearchBody {
  issueDateInterval: IDateInterval;
  searchContext: {
    targetSearchEntitiesContext: {
      targetSearchEntities: [
        {
          type: 'company';
          sparkId: null;
          entityId: null;
          inn: string;
          maxFullness: boolean;
          inBusinessNews: boolean;
        },
      ];
      onlyMainRole: boolean;
      tonality: TonalityType;
      onlyWithRiskFactors: boolean;
      riskFactors: {
        and: [];
        or: [];
        not: [];
      };
      themes: {
        and: [];
        or: [];
        not: [];
      };
    };
    themesFilter: {
      and: [];
      or: [];
      not: [];
    };
  };
  searchArea: {
    includedSources: [];
    excludedSources: [];
    includedSourceGroups: [];
    excludedSourceGroups: [];
  };
  attributeFilters: {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
  };
  similarMode: 'duplicates';
  limit: number;
  sortType: 'issueDate';
  sortDirectionType: 'desc';
  intervalType: 'month';
  histogramTypes: ['totalDocuments', 'riskFactors'];
}

export interface IHistogramDataPoint {
  date: string;
  value: number;
}

export interface IHistogram {
  data: IHistogramDataPoint[];
  histogramType: string;
}

export interface IHistogramData {
  data: IHistogram[];
}

export interface IObjectiveSearchItem {
  encodedId: string;
  influence: number;
  similarCount: number;
}

export interface IGetIdsData {
  items: IObjectiveSearchItem[];
  mappings: any[];
}
