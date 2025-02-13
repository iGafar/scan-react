import { TitleStyle } from '@/components/atoms/Title/styles';
import useResponsive from '@/hooks/useResponsive';
import { CSSProperties, JSX } from 'react';

interface TitleProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  maxWidth?: number;
  mb?: number;
  style?: CSSProperties;
}

export default function Title(props: TitleProps) {
  const { level, children, className, maxWidth, mb, style } = props;
  const { isTablet } = useResponsive();

  return (
    <TitleStyle
      as={`h${level}` as keyof JSX.IntrinsicElements}
      className={className}
      $level={level}
      $maxWidth={maxWidth}
      $mb={mb}
      style={style}
      $isTablet={isTablet}
    >
      {children}
    </TitleStyle>
  );
}
