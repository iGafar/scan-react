import { NavLinkStyle, Register } from '@/components/organisms/Header/styles';
import { RouterPaths } from '@/router/types';
import { Container } from '@/style/global';
import { Button, Divider, Flex } from 'antd';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  {
    pageName: 'Главная',
    path: RouterPaths.MAIN,
  },
  {
    pageName: 'Тарифы',
    path: RouterPaths.TARIFFS,
  },
  {
    pageName: 'FAQ',
    path: RouterPaths.FAQ,
  },
];

export default function Header() {
  return (
    <header>
      <Container>
        <Flex justify="space-between" align="center">
          <Link to={RouterPaths.MAIN}>
            <img src="./icons/logo-header.svg" />
          </Link>

          <nav>
            <Flex gap={50}>
              {navItems.map(item => (
                <NavLinkStyle
                  to={item.path}
                  key={item.pageName}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.pageName}
                </NavLinkStyle>
              ))}
            </Flex>
          </nav>

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
            <Link to={RouterPaths.AUTH}>
              <Button type="primary" size="small">
                Войти
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
