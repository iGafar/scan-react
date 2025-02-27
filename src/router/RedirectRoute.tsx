import { useAuth } from '@/hooks/useAuth';
import { RouterPathsEnum } from '@/router/types';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RedirectRouteProps {
  children: ReactNode;
  redirectIfAuth: boolean;
}

export default function RedirectRoute({
  children,
  redirectIfAuth,
}: RedirectRouteProps) {
  const { isAuth } = useAuth();

  if (isAuth && redirectIfAuth) return <Navigate to={RouterPathsEnum.MAIN} />;
  if (!isAuth && !redirectIfAuth) return <Navigate to={RouterPathsEnum.MAIN} />;

  return children;
}
