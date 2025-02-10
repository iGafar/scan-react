import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export type ResponsiveType = {
  isMobile: boolean;
  isPreMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isExtraLargeDesktop: boolean;
};

export default function useResponsive(): ResponsiveType {
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();

  return {
    isMobile: !!xs,
    isPreMobile: !!sm,
    isTablet: !!md,
    isDesktop: !!lg,
    isLargeDesktop: !!xl,
    isExtraLargeDesktop: !!xxl,
  };
}
