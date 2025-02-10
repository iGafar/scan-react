import Title from '@/components/atoms/Title';
import { OurTariffsSectionStyle } from '@/pages/Main/components/OurTariffsSection/styles';
import { Container } from '@/style/global';
import { Card } from 'antd';

export default function OurTariffsSection() {
  return (
    <OurTariffsSectionStyle>
      <Container>
        <Title level={2} mb={70}>
          наши тарифы
        </Title>

        <Card size="small" title={<div>title</div>}></Card>
      </Container>
    </OurTariffsSectionStyle>
  );
}
