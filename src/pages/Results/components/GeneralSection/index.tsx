import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
import StaggerContainer from '@/components/atoms/StaggerContainer';
import StaggerItem from '@/components/atoms/StaggerItem';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import CarouselGeneralSummary from '@/components/molecules/Carousel/CarouselGeneralSummary';
import useResponsive from '@/hooks/useResponsive';
import { Container } from '@/style/global';

export default function GeneralSection() {
  const { isTablet } = useResponsive();

  return (
    <section>
      <Container>
        <StaggerContainer staggerDelay={0.3}>
          <StaggerItem>
            <Title level={2} mb={isTablet ? 36 : 20}>
              Общая сводка
            </Title>
          </StaggerItem>

          <StaggerItem>
            <Text
              size="medium"
              mb={isTablet ? 27 : 10}
              style={{ color: 'var(--gray-primary)' }}
            >
              Поиск завершен, найдены результаты.
            </Text>
          </StaggerItem>

          <StaggerItem>
            <CarouselGeneralSummary />
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}
