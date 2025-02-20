import useResponsive from '@/hooks/useResponsive';
import { Collapse } from 'antd';
import { ReactNode } from 'react';

export function CollapseWrapper({ children }: { children: ReactNode }) {
  const { isLargeDesktop } = useResponsive();

  return !isLargeDesktop ? (
    <Collapse
      items={[
        {
          key: 1,
          label: 'Дополнительные параметры',
          children,
        },
      ]}
      ghost
    />
  ) : (
    children
  );
}
