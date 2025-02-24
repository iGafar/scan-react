import AntdThemeProvider from '@/providers/AntdThemeProvider';
import AppRouter from '@/router/Router';
import { Global } from '@/style/global';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <AntdThemeProvider>
      <Toaster
    		richColors
        expand={false}
        position="top-right"
        closeButton
        toastOptions={{
          duration: 3000,
          className: 'toaster-class',
        }}
      />
      <AppRouter />
      <Global />
    </AntdThemeProvider>
  );
}
