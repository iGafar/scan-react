import { useGetDocumentsMutation } from '@/api/controllers/documents-controller/documents-controller';
import { useGetIdsMutation } from '@/api/controllers/objectsearch-controller/objectsearch-controller';
import Title from '@/components/atoms/Title';
import CardDocument from '@/components/molecules/Card/CardDocument';
import { Container } from '@/style/global';
import { Button, Flex } from 'antd';
import { useEffect } from 'react';

export default function DocumentsSection() {
  const [getIds, { data: ids, isLoading, isSuccess }] = useGetIdsMutation({
    fixedCacheKey: 'ids',
  });
  const [getDocuments, { data: documents }] = useGetDocumentsMutation();

  useEffect(() => {
    if (!ids)
      getIds(JSON.parse(sessionStorage.getItem('histogramsBody') || ''));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const newIds = ids.items.slice(0, 99).map(item => item.encodedId);

      getDocuments({ ids: newIds });
    }
  }, [isSuccess]);

  // if (isLoading)
  //   return (
  //     <Flex justify="center">
  //       <Spin />
  //     </Flex>
  //   );

  return (
    <section>
      <Container>
        <Title level={4} mb={58}>
          Список документов
        </Title>

        <Flex gap={38} style={{ marginBottom: 38 }}>
          <CardDocument />
          <CardDocument />
        </Flex>

        <Flex justify="center">
          <Button>Показать больше</Button>
        </Flex>
      </Container>
    </section>
  );
}
