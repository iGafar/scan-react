import { IProviderProps } from '@/providers/types';
import { ConfigProvider, ThemeConfig } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export default function AntdThemeProvider({ children }: IProviderProps) {
  const theme: ThemeConfig = {
    token: {
      fontFamily: 'Inter',
      fontSize: 14,
      borderRadius: 5,
      colorPrimary: '#5970ff',
    },
    components: {
      Button: {
        fontSize: 16,
        contentFontSizeLG: 22,
        contentFontSizeSM: 14,
        defaultColor: '#ffffff',
        colorLink: '#5970FF',
        colorLinkHover: '#3a5bcf',
        defaultHoverColor: '#ffffff',
        defaultActiveColor: '#ffffff',
        defaultBg: '#5970ff',
        defaultHoverBg: '#3a5bcf',
        defaultActiveBg: '#5970ff',
        defaultHoverBorderColor: '#5970ff',
        primaryColor: '#000',
        colorPrimary: '#7ce3e1',
        colorPrimaryHover: '#5ed1c6',
        colorPrimaryActive: '#7ce3e1',
        controlHeight: 46,
        controlHeightSM: 26,
        controlHeightLG: 60,
        paddingContentVerticalLG: 40,
        paddingContentHorizontalSM: 10,
        borderRadius: 5,
      },
      Card: {
        borderRadius: 10,
        headerPadding: 30,
        bodyPaddingSM: 20,
        padding: 40,
      },
    },
  };

  return (
    <ConfigProvider locale={ruRU} theme={theme}>
      {children}
    </ConfigProvider>
  );
}
