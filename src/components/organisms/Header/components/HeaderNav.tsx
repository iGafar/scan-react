import { NavLinkStyle } from '@/components/organisms/Header/styles';
import useResponsive from '@/hooks/useResponsive';
import { RouterPathsEnum } from '@/router/types';
import { Flex } from 'antd';

const navItems = [
  { pageName: 'Главная', path: RouterPathsEnum.MAIN },
  { pageName: 'Тарифы', path: RouterPathsEnum.TARIFFS },
  { pageName: 'FAQ', path: RouterPathsEnum.FAQ },
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
