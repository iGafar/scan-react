import { commonApi } from '@/api/commom.api';
import {
  IGetIdsData,
  IHistogramData,
  IObjectiveSearchBody,
} from '@/api/controllers/objectsearch-controller/objectsearch-controller.types';

const CONTROLLER_URL = 'objectsearch';

export const objectsearchController = commonApi.injectEndpoints({
  endpoints: builder => ({
    getIds: builder.mutation<IGetIdsData, IObjectiveSearchBody>({
      query: body => ({
        url: CONTROLLER_URL,
        method: 'POST',
        body,
      }),
    }),
    getHistograms: builder.mutation<IHistogramData, IObjectiveSearchBody>({
      query: body => ({
        url: `${CONTROLLER_URL}/histograms`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetIdsMutation, useGetHistogramsMutation } =
  objectsearchController;
