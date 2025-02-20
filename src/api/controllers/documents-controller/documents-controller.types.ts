export interface ISuggestedCompany {
  sparkId: number;
  inn: string;
  ogrn: string;
  searchPrecision: string;
}

export interface IResolveInfo {
  resolveApproaches: string[];
}

export interface ICompany {
  suggestedCompanies: ISuggestedCompany[];
  resolveInfo: IResolveInfo;
  tags: string[];
  isSpeechAuthor: boolean;
  localId: number;
  name: string;
  entityId: number;
  isMainRole: boolean;
}

export interface IPerson {
  rotatedName: string;
  tags: string[];
  isSpeechAuthor: boolean;
  localId: number;
  name: string;
  entityId: number;
  isMainRole: boolean;
}

export interface ITheme {
  localId: number;
  name: string;
  entityId: number;
  tonality: string;
}

export interface ILocation {
  code: {
    countryCode: string;
  };
  localId: number;
  name: string;
  isMainRole: boolean;
}

export interface IEntities {
  companies: ICompany[];
  people: IPerson[];
  themes: ITheme[];
  locations: ILocation[];
}

export interface ICoverage {
  value: number;
  state: string;
}

export interface IAttributes {
  isTechNews: boolean;
  isAnnouncement: boolean;
  isDigest: boolean;
  isSpeechRecognition: boolean;
  isReducedContent: boolean;
  influence: number;
  wordCount: number;
  coverage: ICoverage;
}

export interface ITitle {
  text: string;
  markup: string;
}

export interface IContent {
  markup: string;
}

export interface ISource {
  id: number;
  groupId: number;
  name: string;
  categoryId: number;
  levelId: number;
  distributionMethodId: number;
}

export interface IOk {
  schemaVersion: string;
  id: string;
  version: number;
  issueDate: string;
  url: string;
  source: ISource;
  dedupClusterId: string;
  plotClusterId: string;
  title: ITitle;
  content: IContent;
  entities: IEntities;
  attributes: IAttributes;
  language: string;
}

export interface IDocumentItem {
  ok: IOk;
}
