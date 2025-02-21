import { commonApi } from '@/api/commom.api';
import { IDocumentItem } from '@/api/controllers/documents-controller/documents-controller.types';

const CONTROLLER_URL = 'documents';

export const documentsController = commonApi.injectEndpoints({
  endpoints: builder => ({
    getDocuments: builder.mutation<IDocumentItem[], { ids: string[] }>({
      query: body => ({
        url: CONTROLLER_URL,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetDocumentsMutation } = documentsController;
