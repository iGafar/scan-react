import Title from '@/components/atoms/Title';
import useResponsive from '@/hooks/useResponsive';
import DocumentsList from '@/pages/Results/components/DocumentsSection/DocumentsList';
import { Container } from '@/style/global';

export default function DocumentsSection() {
  const { isTablet } = useResponsive();

  return (
    <section>
      <Container>
        <Title level={4} mb={isTablet ? 58 : 34}>
          Список документов
        </Title>

        <DocumentsList />
      </Container>
    </section>
  );
}
