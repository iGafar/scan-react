import { DividerStyle, Register } from '@/components/organisms/Header/styles';
import useResponsive from '@/hooks/useResponsive';
import { RouterPathsEnum } from '@/router/types';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

export default function HeaderAuthBlock() {
  const { isTablet } = useResponsive();

  return (
    <Flex align="center" gap={20} justify="center" vertical={!isTablet}>
      <Register to={RouterPathsEnum.AUTH}>
        <Button
          type="text"
          size={isTablet ? 'small' : 'middle'}
          className="register-btn"
        >
          Зарегистрироваться
        </Button>
      </Register>
      {isTablet && <DividerStyle type="vertical" />}
      <Link to={RouterPathsEnum.AUTH}>
        <Button
          type="primary"
          size={isTablet ? 'small' : 'large'}
          style={{ width: isTablet ? 'auto' : 295 }}
        >
          Войти
        </Button>
      </Link>
    </Flex>
  );
}
