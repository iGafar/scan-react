import Title from '@/components/atoms/Title';
import CardTariff from '@/components/molecules/Card/CardTariff';
import { OurTariffsSectionStyle } from '@/pages/Main/components/OurTariffsSection/styles';
import { Container } from '@/style/global';
import { Col, Row } from 'antd';

const tariffsData = [
  {
    title: 'Beginner',
    subtitle: 'Для небольшого исследования',
    icon: './icons/tariffs/light.svg',
    backColor: '#FFB64F',
    price: 799,
    oldPrice: 1200,
    description: 'или 150 ₽/мес. при рассрочке на 24 мес.',
    tariffOptions: [
      'Безлимитная история запросов',
      'Безопасная сделка',
      'Поддержка 24/7',
    ],
    sizes: {
      md: 12,
      lg: 8,
    },
  },
  {
    title: 'Pro',
    subtitle: 'Для HR и фрилансеров',
    icon: './icons/tariffs/target.svg',
    backColor: '#7CE3E1',
    price: 1299,
    oldPrice: 2600,
    description: 'или 279 ₽/мес. при рассрочке на 24 мес.',
    tariffOptions: [
      'Все пункты тарифа Beginner',
      'Экспорт истории',
      'Рекомендации по приоритетам',
    ],
    sizes: {
      md: 12,
      lg: 8,
    },
  },
  {
    title: 'Business',
    subtitle: 'Для корпоративных клиентов',
    icon: './icons/tariffs/laptop.svg',
    backColor: '#000000',
    price: 2379,
    oldPrice: 3700,
    description: '',
    tariffOptions: [
      'Все пункты тарифа Pro',
      'Безлимитное количество запросов',
      'Приоритетная поддержка',
    ],
    sizes: {
      md: 24,
      lg: 8,
    },
  },
];

export default function OurTariffsSection() {
  return (
    <OurTariffsSectionStyle>
      <Container>
        <Title level={2} mb={70}>
          наши тарифы
        </Title>

        <Row gutter={[38, 38]}>
          {tariffsData.map(item => (
            <Col key={item.title} span={24} {...item.sizes}>
              <CardTariff {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </OurTariffsSectionStyle>
  );
}
