import CardUser from '@/components/molecules/Card/CardUser';
import HeaderAuthBlock from '@/components/organisms/Header/components/HeaderAuthBlock';
import HeaderBurgerBtn from '@/components/organisms/Header/components/HeaderBurgerBtn';
import HeaderDrawer from '@/components/organisms/Header/components/HeaderDrawer';
import HeaderNav from '@/components/organisms/Header/components/HeaderNav';
import HeaderUserInfo from '@/components/organisms/Header/components/HeaderUserInfo';
import { BurgerBtn, HeaderStyle } from '@/components/organisms/Header/styles';
import { useAppSelector } from '@/hooks/reduxHooks';
import useResponsive from '@/hooks/useResponsive';
import { RouterPathsEnum } from '@/router/types';
import { Container } from '@/style/global';
import { Flex } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const userToken = useAppSelector(s => s.auth.userToken);
  const { isTablet } = useResponsive();

  return (
    <HeaderStyle>
      <Container>
        <Flex justify="space-between" align="center">
          <Link to={RouterPathsEnum.MAIN}>
            <img src="./icons/logo-green.svg" />
          </Link>

          <HeaderDrawer
            isMenuOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(prev => !prev)}
          >
            <HeaderNav />

            {!!userToken ? (
              <Flex gap={80} align="center" justify="center">
                {isTablet && <CardUser />}

                <HeaderUserInfo />
              </Flex>
            ) : (
              <HeaderAuthBlock />
            )}
          </HeaderDrawer>

          {!isTablet && (
            <>
              <CardUser />
              <HeaderBurgerBtn onClick={() => setIsMenuOpen(prev => !prev)} />
            </>
          )}
        </Flex>
      </Container>
    </HeaderStyle>
  );
}
