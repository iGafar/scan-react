import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
import Title from '@/components/atoms/Title';
import FormAuth from '@/components/molecules/Form/FormAuth';
import useResponsive from '@/hooks/useResponsive';
import { ImageWrapper, SectionStyle } from '@/pages/Auth/styles';
import { Container } from '@/style/global';
import { Flex } from 'antd';

export default function AuthPage() {
  const { isTablet } = useResponsive();

  return (
    <SectionStyle>
      <Container>
        <Flex justify="space-between" gap={10} vertical={!isTablet}>
          <Flex vertical justify="space-between">
            <FadeInOnScroll>
              <Title level={3} mb={!isTablet ? 126 : 0} maxWidth={700}>
                Для оформления подписки на тариф, необходимо авторизоваться.
              </Title>
            </FadeInOnScroll>

            {isTablet && (
              <FadeInOnScroll delay={0.3} threshold={0}>
                <ImageWrapper>
                  <img src="./images/login-page-back.svg" alt="login back" />
                </ImageWrapper>
              </FadeInOnScroll>
            )}
          </Flex>

          <FormAuth />

          {!isTablet && (
            <ImageWrapper>
              <img src="./images/login-page-back.svg" alt="login back" />
            </ImageWrapper>
          )}
        </Flex>
      </Container>
    </SectionStyle>
  );
}
