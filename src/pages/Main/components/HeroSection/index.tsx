import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import { useAuth } from '@/hooks/useAuth';
import useResponsive from '@/hooks/useResponsive';
import {
  BackImage,
  NavLinkStyle,
} from '@/pages/Main/components/HeroSection/styles';
import { RouterPathsEnum } from '@/router/types';
import { Container } from '@/style/global';
import { Button, Flex } from 'antd';

export default function HeroSection() {
  const { isAuth } = useAuth();
  const { isTablet } = useResponsive();

  return (
    <section>
      <Container>
        <Flex align="center" vertical={!isTablet}>
          <div>
            <Title level={1} mb={20}>
              сервис по поиску
              {isTablet && <br />} публикаций
              {isTablet && <br />} о компании
              {isTablet && <br />} по его ИНН
            </Title>

            <Text maxWidth={534} mb={isTablet ? 70 : 32}>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </Text>

            {isAuth && (
              <NavLinkStyle to={RouterPathsEnum.SEARCH}>
                <Button size="large">Запросить данные</Button>
              </NavLinkStyle>
            )}
          </div>

          <BackImage src="./images/main-back.png" />
        </Flex>
      </Container>
    </section>
  );
}
