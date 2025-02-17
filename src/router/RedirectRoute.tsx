import { useAuth } from '@/hooks/useAuth';
import { RouterPaths } from '@/router/types';
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

  if (isAuth && redirectIfAuth) return <Navigate to={RouterPaths.MAIN} />;
  if (!isAuth && !redirectIfAuth) return <Navigate to={RouterPaths.MAIN} />;

  return children;
}
