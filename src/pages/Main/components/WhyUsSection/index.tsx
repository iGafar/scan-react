import Title from '@/components/atoms/Title';
import CarouselWhyWe from '@/components/molecules/Carousel/CarouselWhyWe';
import { WhyUsSectionStyle } from '@/pages/Main/components/WhyUsSection/styles';
import { Container } from '@/style/global';

export default function WhyUsSection() {
  return (
    <WhyUsSectionStyle>
      <Container className="container">
        <Title level={2} mb={70}>
          Почему именно мы
        </Title>

        <CarouselWhyWe />
      </Container>
    </WhyUsSectionStyle>
  );
}
