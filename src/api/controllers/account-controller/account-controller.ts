import { commonApi } from '@/api/commom.api';
import {
  IGetUserInfoData,
  ILoginBody,
  ILoginData,
  IUserInfo,
} from '@/api/controllers/account-controller/account-controller.types';

const CONTROLLER_URL = '/account';

export const accountController = commonApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ILoginData, ILoginBody>({
      query: body => ({
        url: `${CONTROLLER_URL}/login`,
        method: 'POST',
        body,
      }),
    }),
    getUserInfo: builder.query<IUserInfo, void>({
      query: _ => ({
        url: `${CONTROLLER_URL}/info`,
      }),
      transformResponse: (res: IGetUserInfoData) => res.eventFiltersInfo,
    }),
  }),
});

export const { useLoginMutation, useGetUserInfoQuery } = accountController;
