import { useGetDocumentsMutation } from '@/api/controllers/documents-controller/documents-controller';
import { IDocumentItem } from '@/api/controllers/documents-controller/documents-controller.types';
import { useGetIdsMutation } from '@/api/controllers/objectsearch-controller/objectsearch-controller';
import CardDocument from '@/components/molecules/Card/CardDocument';
import useResponsive from '@/hooks/useResponsive';
import { Alert, Button, Flex, Spin } from 'antd';
import { useEffect, useState } from 'react';

export default function DocumentsList() {
  const { isMobile } = useResponsive();
  const documentsLimit = 10;
  const [loadingPage, setLoadingPage] = useState(0);
  const [newIds, setNewIds] = useState<string[]>([]);
  const [newDocuments, setNewDocuments] = useState<IDocumentItem[]>([]);

  const [getIds, { data: ids, isSuccess: idsSuccess, isError: idsError }] =
    useGetIdsMutation({
      fixedCacheKey: 'ids',
    });
  const [
    getDocuments,
    {
      data: documents,
      isLoading: documentsLoading,
      isSuccess: documentsSuccess,
      isError: documentsError,
    },
  ] = useGetDocumentsMutation();

  useEffect(() => {
    if (newIds.length) {
      const currentIds = newIds.slice(
        loadingPage,
        loadingPage + documentsLimit,
      );
      getDocuments({ ids: currentIds });
    }
  }, [loadingPage, newIds, getDocuments]);

  useEffect(() => {
    if (!ids)
      getIds(JSON.parse(sessionStorage.getItem('histogramsBody') || ''));
  }, []);

  useEffect(() => {
    if (idsSuccess && ids) {
      const newIds = ids.slice(0, 99).map(item => item.encodedId);

      setNewIds([...newIds]);
    }
  }, [idsSuccess]);

  useEffect(() => {
    if (documentsSuccess && documents) {
      setNewDocuments(prev => [...prev, ...documents]);
    }
  }, [documentsSuccess, documents]);

  if (documentsLoading && newDocuments.length === 0) {
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );
  }

  if (documentsError || idsError) {
    return <Alert type="error" message="Что-то пошло не так" />;
  }

  return (
    <>
      <Flex gap={38} wrap style={{ marginBottom: 38 }}>
        {newDocuments?.map(el => {
          return <CardDocument key={el.ok.id} cardData={el.ok} />;
        })}
      </Flex>

      {newIds.length !== newDocuments.length && (
        <Flex justify="center">
          <Button
            onClick={() => setLoadingPage(prev => prev + documentsLimit)}
            style={{ width: isMobile ? '100%' : 'auto' }}
          >
            Показать больше
          </Button>
        </Flex>
      )}
    </>
  );
}
