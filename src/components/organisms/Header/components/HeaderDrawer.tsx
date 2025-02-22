import HeaderBurgerBtn from '@/components/organisms/Header/components/HeaderBurgerBtn';
import useResponsive from '@/hooks/useResponsive';
import { Drawer, Flex } from 'antd';
import { ReactNode } from 'react';

export default function HeaderDrawer({
  children,
  isMenuOpen,
  onClose,
}: {
  children: ReactNode;
  isMenuOpen: boolean;
  onClose: () => void;
}) {
  const { isTablet } = useResponsive();

  return !isTablet ? (
    <Drawer
      open={isMenuOpen}
      placement="top"
      closable={false}
      onClick={onClose}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{ maxHeight: 80, marginBottom: 36 }}
      >
        <img src="./icons/logo-white.svg" alt="logo" />
        <HeaderBurgerBtn forClose />
      </Flex>
      {children}
    </Drawer>
  ) : (
    children
  );
}
