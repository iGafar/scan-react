import Layout from '@/components/organisms/Layout';
import AuthPage from '@/pages/Auth';
import ErrorPage from '@/pages/Error';
import FaqPage from '@/pages/Faq';
import MainPage from '@/pages/Main';
import TarrifsPage from '@/pages/Tariffs';
import RedirectRoute from '@/router/RedirectRoute';
import { RouterPaths } from '@/router/types';
import { Flex, Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LazySearchPage = lazy(() => import('@/pages/Search'));
const LazyResultsPage = lazy(() => import('@/pages/Results'));

const router = createBrowserRouter([
  {
    path: RouterPaths.MAIN,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RouterPaths.AUTH,
        element: (
          <RedirectRoute redirectIfAuth>
            <AuthPage />
          </RedirectRoute>
        ),
      },
      {
        path: RouterPaths.SEARCH,
        element: (
          <RedirectRoute redirectIfAuth={false}>
            <LazySearchPage />,
          </RedirectRoute>
        ),
      },
      {
        path: RouterPaths.RESULTS,
        element: (
          <RedirectRoute redirectIfAuth={false}>
            <LazyResultsPage />
          </RedirectRoute>
        ),
      },
      {
        path: RouterPaths.TARIFFS,
        element: <TarrifsPage />,
      },
      {
        path: RouterPaths.FAQ,
        element: <FaqPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <Flex>
          <Spin />
        </Flex>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
