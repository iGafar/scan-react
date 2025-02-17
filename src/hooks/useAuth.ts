import { useAppSelector } from '@/hooks/reduxHooks';

export function useAuth() {
  const { userToken } = useAppSelector(state => state.auth);

  return {
    isAuth: !!userToken,
  };
}
