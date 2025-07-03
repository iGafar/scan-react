import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
import StaggerContainer from '@/components/atoms/StaggerContainer';
import StaggerItem from '@/components/atoms/StaggerItem';
import Title from '@/components/atoms/Title';
import CardTariff from '@/components/molecules/Card/CardTariff';
import useResponsive from '@/hooks/useResponsive';
import { tariffsData } from '@/pages/Main/components/OurTariffsSection/mock';
import { OurTariffsSectionStyle } from '@/pages/Main/components/OurTariffsSection/styles';
import { Container } from '@/style/global';
import { Col, Row } from 'antd';

export default function OurTariffsSection() {
  const { isTablet } = useResponsive();

  return (
    <OurTariffsSectionStyle>
      <Container>
        <Title level={2} mb={isTablet ? 70 : 37}>
          наши тарифы
        </Title>

        <StaggerContainer staggerDelay={0.2}>
          <Row gutter={[38, 38]}>
            {tariffsData.map((item, index) => (
              <Col key={item.title} span={24} {...item.sizes}>
                <StaggerItem style={{ height: '100%' }}>
                  <FadeInOnScroll
                    style={{ height: '100%' }}
                    delay={index * 0.1}
                  >
                    <CardTariff {...item} />
                  </FadeInOnScroll>
                </StaggerItem>
              </Col>
            ))}
          </Row>
        </StaggerContainer>
      </Container>
    </OurTariffsSectionStyle>
  );
}
