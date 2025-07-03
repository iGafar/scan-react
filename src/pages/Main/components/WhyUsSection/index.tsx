import Title from '@/components/atoms/Title';
import CarouselWhyWe from '@/components/molecules/Carousel/CarouselWhyWe';
import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
import useResponsive from '@/hooks/useResponsive';
import { WhyUsSectionStyle } from '@/pages/Main/components/WhyUsSection/styles';
import { Container } from '@/style/global';

export default function WhyUsSection() {
  const { isDesktop } = useResponsive();

  return (
    <WhyUsSectionStyle>
      <Container className="container">
        <FadeInOnScroll>
          <Title level={2} mb={isDesktop ? 50 : 10}>
            Почему именно мы
          </Title>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <CarouselWhyWe />
        </FadeInOnScroll>
      </Container>
    </WhyUsSectionStyle>
  );
}