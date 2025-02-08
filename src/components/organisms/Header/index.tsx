import CustomButton from '@/components/atoms/CustomButton';
import { Register } from '@/components/organisms/Header/styles';
import { RouterPaths } from '@/router/types';
import { Container } from '@/style/global';
import { Divider, Flex } from 'antd';
import { NavLink } from 'react-router-dom';

const navItems = ['Главная', 'Тарифы', 'FAQ'];

export default function Header() {
  return (
    <header>
      <Container>
        <Flex justify="space-between" align="center">
          <img src="./icons/logo-header.svg" />

          <Flex gap={50}>
            {navItems.map(item => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </Flex>

          <Flex align="center" gap={20}>
            <Register href="#">Зарегистрироваться</Register>
            <Divider
              type="vertical"
              style={{
                borderColor: 'var(--green-primary)',
                borderWidth: '2px',
                height: 26,
                margin: 0,
              }}
            />
            <NavLink to={RouterPaths.AUTH}>
              <CustomButton type="secondary" size="small">
                Войти
              </CustomButton>
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
