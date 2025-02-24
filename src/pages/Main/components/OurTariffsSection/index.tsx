import Title from '@/components/atoms/Title';
import CardTariff from '@/components/molecules/Card/CardTariff';
import { tariffsData } from '@/pages/Main/components/OurTariffsSection/mock';
import { OurTariffsSectionStyle } from '@/pages/Main/components/OurTariffsSection/styles';
import { Container } from '@/style/global';
import { Col, Row } from 'antd';

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
