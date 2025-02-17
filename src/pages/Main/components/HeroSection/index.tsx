import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import { useAuth } from '@/hooks/useAuth';
import { RouterPaths } from '@/router/types';
import { Container } from '@/style/global';
import { Button, Flex, Input } from 'antd';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  const { isAuth } = useAuth();

  return (
    <section>
      <Container>
        <Flex align="center">
          <div>
            <Title level={1} mb={20}>
              сервис по поиску
              <br /> публикаций
              <br /> о компании
              <br /> по его ИНН
            </Title>

            <Text maxWidth={534} mb={70}>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </Text>

            {isAuth && (
              <NavLink to={RouterPaths.SEARCH}>
                <Button size="large">Запросить данные</Button>
              </NavLink>
            )}
          </div>

          <img
            src="./images/main_back.png"
            width="100%"
            style={{ maxWidth: 593 }}
          />
        </Flex>
      </Container>
    </section>
  );
}
