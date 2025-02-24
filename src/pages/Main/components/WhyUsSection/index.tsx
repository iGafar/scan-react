import Title from '@/components/atoms/Title';
import CarouselWhyWe from '@/components/molecules/Carousel/CarouselWhyWe';
import useResponsive from '@/hooks/useResponsive';
import { WhyUsSectionStyle } from '@/pages/Main/components/WhyUsSection/styles';
import { Container } from '@/style/global';

export default function WhyUsSection() {
  const { isDesktop } = useResponsive();

  return (
    <WhyUsSectionStyle>
      <Container className="container">
        <Title level={2} mb={isDesktop ? 50 : 10}>
          Почему именно мы
        </Title>

        <CarouselWhyWe />
      </Container>
    </WhyUsSectionStyle>
  );
}
