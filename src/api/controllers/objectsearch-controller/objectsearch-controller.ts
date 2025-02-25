import { commonApi } from '@/api/commom.api';
import {
  IGetIdsData,
  IHistogram,
  IHistogramData,
  IObjectiveSearchBody,
  IObjectiveSearchItem,
} from '@/api/controllers/objectsearch-controller/objectsearch-controller.types';

const CONTROLLER_URL = 'objectsearch';

export const objectsearchController = commonApi.injectEndpoints({
  endpoints: builder => ({
    getIds: builder.mutation<IObjectiveSearchItem[], IObjectiveSearchBody>({
      query: body => ({
        url: CONTROLLER_URL,
        method: 'POST',
        body,
      }),
      transformResponse: (res: IGetIdsData) => res.items,
    }),
    getHistograms: builder.mutation<IHistogram[], IObjectiveSearchBody>({
      query: body => ({
        url: `${CONTROLLER_URL}/histograms`,
        method: 'POST',
        body,
      }),
      transformResponse: (res: IHistogramData) => res.data,
    }),
  }),
});

export const { useGetIdsMutation, useGetHistogramsMutation } =
  objectsearchController;
