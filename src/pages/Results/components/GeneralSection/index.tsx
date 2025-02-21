import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import CarouselGeneralSummary from '@/components/molecules/Carousel/CarouselGeneralSummary';
import { Container } from '@/style/global';

export default function GeneralSection() {
  return (
    <section>
      <Container>
        <Title level={4} mb={17}>
          Общая сводка
        </Title>
        <Text size="medium" mb={27} style={{ color: 'var(--gray-primary)' }}>
          Найдено 4 221 вариантов
        </Text>

        <CarouselGeneralSummary />
      </Container>
    </section>
  );
}
