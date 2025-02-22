import { UserInfoBlock } from '@/components/organisms/Header/styles';
import { useAppDispatch } from '@/hooks/reduxHooks';
import useResponsive from '@/hooks/useResponsive';
import { setUserLogout } from '@/store/authSlice';
import { Flex } from 'antd';

export default function HeaderUserInfo() {
  const dispatch = useAppDispatch();

  const { isTablet } = useResponsive();

  return (
    <UserInfoBlock gap={5} align="center">
      <Flex vertical gap={3} align={isTablet ? 'flex-end' : 'center'}>
        <p>Алексей А.</p>
        <button onClick={() => dispatch(setUserLogout())}>Выйти</button>
      </Flex>
      <img src="./icons/user.png" alt="user" />
    </UserInfoBlock>
  );
}
