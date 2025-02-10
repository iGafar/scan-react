import Title from '@/components/atoms/Title';
import CarouselBlock from '@/pages/Main/components/WhyUsSection/CarouselBlock';
import { WhyUsSectionStyle } from '@/pages/Main/components/WhyUsSection/styles';
import { Container } from '@/style/global';

export default function WhyUsSection() {
  return (
    <WhyUsSectionStyle>
      <Container className="container">
        <Title level={2} mb={70}>
          Почему именно мы
        </Title>

        <CarouselBlock />
      </Container>
    </WhyUsSectionStyle>
  );
}
