import { NavLinkStyle } from '@/components/organisms/Header/styles';
import useResponsive from '@/hooks/useResponsive';
import { RouterPaths } from '@/router/types';
import { Flex } from 'antd';

const navItems = [
  { pageName: 'Главная', path: RouterPaths.MAIN },
  { pageName: 'Тарифы', path: RouterPaths.TARIFFS },
  { pageName: 'FAQ', path: RouterPaths.FAQ },
];

export default function () {
  const { isTablet } = useResponsive();

  return (
    <nav>
      <Flex gap={isTablet ? 50 : 0} vertical={!isTablet} align="center">
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
  );
}
