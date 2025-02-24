import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import { ContainerStyle } from '@/pages/Results/components/HeroSection/styles';

export default function HeroSection() {
  return (
    <section>
      <ContainerStyle>
        <Title level={2} mb={36}>
          Ищем. Скоро <br />
          будут результаты
        </Title>
        <Text>
          Поиск может занять некоторое время, <br />
          просим сохранять терпение.
        </Text>
      </ContainerStyle>
    </section>
  );
}
