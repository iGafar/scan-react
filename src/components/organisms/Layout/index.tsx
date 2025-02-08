import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
