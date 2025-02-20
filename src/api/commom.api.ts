import { BASE_URL } from '@/config';
import { setUserLogout } from '@/store/authSlice';
import type { RootState } from '@/store/store';
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'sonner';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const { auth } = getState() as RootState;

    headers.set('Accept', 'application/json');

    if (auth.userToken) {
      headers.set(
        'authorization',
        'Bearer ' + auth.userToken.replaceAll('"', ''),
      );
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  const state = api.getState() as RootState;
  const expire = state.auth.expire as string;

  if (result?.error?.status === 401 && new Date(expire) < new Date()) {
    api.dispatch(setUserLogout());
  } else if (result?.error && result?.error.status === 403) {
    toast.error('Доступ запрещен!');
  }

  return result;
};

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  invalidationBehavior: 'immediately',
});
