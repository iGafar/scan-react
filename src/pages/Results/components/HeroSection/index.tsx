import StaggerContainer from '@/components/atoms/StaggerContainer';
import StaggerItem from '@/components/atoms/StaggerItem';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import useResponsive from '@/hooks/useResponsive';
import { ContainerStyle } from '@/pages/Results/components/HeroSection/styles';

export default function HeroSection() {
  const { isTablet } = useResponsive();

  return (
    <section>
      <ContainerStyle>
        <StaggerContainer staggerDelay={0.3}>
          <StaggerItem>
            <Title level={2} mb={isTablet ? 36 : 20}>
              Ищем. Скоро {isTablet && <br />}
              будут результаты
            </Title>
          </StaggerItem>

          <StaggerItem>
            <Text>
              Поиск может занять некоторое время, {isTablet && <br />}
              просим сохранять терпение.
            </Text>
          </StaggerItem>
        </StaggerContainer>
      </ContainerStyle>
    </section>
  );
}
