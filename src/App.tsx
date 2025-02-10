import AppRouter from '@/router/Router';
import { Global } from '@/style/global';
import { ConfigProvider, ThemeConfig } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export default function App() {
  const theme: ThemeConfig = {
    token: {
      fontFamily: 'Inter',
      fontSize: 14,
      borderRadius: 5,
    },
    components: {
      Button: {
        fontSize: 22,
        contentFontSizeSM: 14,
        defaultColor: '#ffffff',
        defaultHoverColor: '#ffffff',
        defaultActiveColor: '#ffffff',
        defaultBorderColor: '#5970ff',
        defaultHoverBorderColor: '#5970ff',
        defaultActiveBorderColor: '#5970ff',
        defaultBg: '#5970ff',
        defaultHoverBg: '#3a5bcf',
        defaultActiveBg: '#5970ff',
        primaryColor: '#000',
        colorPrimary: '#7ce3e1',
        colorPrimaryHover: '#5ed1c6',
        colorPrimaryActive: '#7ce3e1',
        controlHeight: 60,
        controlHeightSM: 26,
        paddingContentHorizontal: 40,
        paddingContentHorizontalSM: 10,
        borderRadius: 5,
      },
      Card: {
        borderRadius: 10,
        padding: 25,
      },
    },
  };

  return (
    <ConfigProvider locale={ruRU} theme={theme}>
      <AppRouter />
      <Global />
    </ConfigProvider>
  );
}
