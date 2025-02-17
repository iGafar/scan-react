export interface ILoginBody {
  login: string;
  password: string;
}

export interface ILoginData {
  accessToken: string;
  expire: string;
}

export interface IGetUserInfoData {
  eventFiltersInfo: IUserInfo;
}

export interface IUserInfo {
  usedCompanyCount: number;
  companyLimit: number;
}
