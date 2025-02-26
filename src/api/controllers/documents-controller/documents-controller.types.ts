interface ICoverage {
  value: number;
  state: string;
}

interface IAttributes {
  isTechNews: boolean;
  isAnnouncement: boolean;
  isDigest: boolean;
  isSpeechRecognition: boolean;
  isReducedContent: boolean;
  influence: number;
  wordCount: number;
  coverage: ICoverage;
}

interface ITitle {
  text: string;
  markup: string;
}

interface IContent {
  markup: string;
}

interface ISource {
  id: number;
  groupId: number;
  name: string;
  categoryId: number;
  levelId: number;
  distributionMethodId: number;
}

export interface IOk {
  id: string;
  issueDate: string;
  url: string;
  source: ISource;
  title: ITitle;
  content: IContent;
  attributes: IAttributes;
}

export interface IDocumentItem {
  ok: IOk;
}
