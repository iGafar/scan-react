import { useGetDocumentsMutation } from '@/api/controllers/documents-controller/documents-controller';
import { IDocumentItem } from '@/api/controllers/documents-controller/documents-controller.types';
import { useGetIdsMutation } from '@/api/controllers/objectsearch-controller/objectsearch-controller';
import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
import StaggerContainer from '@/components/atoms/StaggerContainer';
import CardDocument from '@/components/molecules/Card/CardDocument';
import useResponsive from '@/hooks/useResponsive';
import { Alert, Button, Flex, Spin } from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function DocumentsList() {
  const { isMobile, isTablet } = useResponsive();
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
    const histogramsBody = sessionStorage.getItem('histogramsBody');
    if (!ids && histogramsBody && histogramsBody.trim() !== '') {
      try {
        const parsed = JSON.parse(histogramsBody);
        getIds(parsed);
      } catch (e) {
        console.error('Ошибка парсинга histogramsBody:', e);
        sessionStorage.removeItem('histogramsBody');
      }
    }
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
      <StaggerContainer staggerDelay={0.3}>
        <Flex gap={38} wrap style={{ marginBottom: 38 }}>
          {newDocuments?.map(el => {
            return (
              <motion.div
                variants={itemVariants}
                key={el.ok.id}
                style={{ width: isTablet ? 'calc(50% - 19px)' : '100%' }}
              >
                <FadeInOnScroll
                  style={{ height: '100%' }}
                  delay={0.1}
                  threshold={0.1}
                >
                  <CardDocument key={el.ok.id} cardData={el.ok} />
                </FadeInOnScroll>
              </motion.div>
            );
          })}
        </Flex>
      </StaggerContainer>

      {newIds.length !== newDocuments.length && (
        <FadeInOnScroll>
          <Flex justify="center">
            <Button
              onClick={() => setLoadingPage(prev => prev + documentsLimit)}
              style={{ width: isMobile ? '100%' : 'auto' }}
            >
              Показать больше
            </Button>
          </Flex>
        </FadeInOnScroll>
      )}
    </>
  );
}
