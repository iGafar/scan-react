import Title from '@/components/atoms/Title';
import FormAuth from '@/components/molecules/Form/FormAuth';
import useResponsive from '@/hooks/useResponsive';
import { ImageWrapper } from '@/pages/Auth/styles';
import { Container } from '@/style/global';
import { Flex } from 'antd';

export default function AuthPage() {
  const { isTablet } = useResponsive();

  return (
    <main>
      <section>
        <Container>
          <Flex justify="space-between" gap={10} vertical={!isTablet}>
            <Flex vertical justify="space-between">
              <Title level={3} mb={!isTablet ? 45 : 0} maxWidth={700}>
                Для оформления подписки на тариф, необходимо авторизоваться.
              </Title>

              {isTablet && (
                <ImageWrapper>
                  <img src="./images/login_page_back.svg" alt="login back" />
                </ImageWrapper>
              )}
            </Flex>

            <FormAuth />

            {!isTablet && (
              <ImageWrapper>
                <img src="./images/login_page_back.svg" alt="login back" />
              </ImageWrapper>
            )}
          </Flex>
        </Container>
      </section>
    </main>
  );
}
