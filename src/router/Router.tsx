import Layout from '@/components/organisms/Layout';
import AuthPage from '@/pages/Auth';
import ErrorPage from '@/pages/Error';
import FaqPage from '@/pages/Faq';
import MainPage from '@/pages/Main';
import TarrifsPage from '@/pages/Tariffs';
import RedirectRoute from '@/router/RedirectRoute';
import { RouterPathsEnum } from '@/router/types';
import { Flex, Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LazySearchPage = lazy(() => import('@/pages/Search'));
const LazyResultsPage = lazy(() => import('@/pages/Results'));

const basename = process.env.NODE_ENV === 'production' ? '/scan-react/' : '/';

const router = createBrowserRouter(
  [
    {
      path: RouterPathsEnum.MAIN,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: RouterPathsEnum.AUTH,
          element: (
            <RedirectRoute redirectIfAuth>
              <AuthPage />
            </RedirectRoute>
          ),
        },
        {
          path: RouterPathsEnum.SEARCH,
          element: (
            <RedirectRoute redirectIfAuth={false}>
              <LazySearchPage />,
            </RedirectRoute>
          ),
        },
        {
          path: RouterPathsEnum.RESULTS,
          element: (
            <RedirectRoute redirectIfAuth={false}>
              <LazyResultsPage />
            </RedirectRoute>
          ),
        },
        {
          path: RouterPathsEnum.TARIFFS,
          element: <TarrifsPage />,
        },
        {
          path: RouterPathsEnum.FAQ,
          element: <FaqPage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ],
  { basename },
);

export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <Flex justify="center" align="center" style={{ height: '100vh' }}>
          <Spin size="large" />
        </Flex>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}