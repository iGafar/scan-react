import CardUser from '@/components/molecules/Card/CardUser';
import {
  DividerStyle,
  NavLinkStyle,
  Register,
  UserInfoBlock,
} from '@/components/organisms/Header/styles';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { RouterPaths } from '@/router/types';
import { setUserLogout } from '@/store/authSlice';
import { Container } from '@/style/global';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

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
  const dispatch = useAppDispatch();

  const userToken = useAppSelector(s => s.auth.userToken);

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

          {!!userToken ? (
            <Flex gap={100} align="center">
              <CardUser />

              <UserInfoBlock gap={5}>
                <Flex vertical gap={3} align="flex-end">
                  <p>Алексей А.</p>
                  <button onClick={() => dispatch(setUserLogout())}>
                    Выйти
                  </button>
                </Flex>
                <img src="./icons/user.png" alt="user" />
              </UserInfoBlock>
            </Flex>
          ) : (
            <Flex align="center" gap={20}>
              <Register to={RouterPaths.AUTH}>
                <Button type="text" size="small">
                  Зарегистрироваться
                </Button>
              </Register>
              <DividerStyle type="vertical" />
              <Link to={RouterPaths.AUTH}>
                <Button type="primary" size="small">
                  Войти
                </Button>
              </Link>
            </Flex>
          )}
        </Flex>
      </Container>
    </header>
  );
}
