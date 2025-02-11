import { TitleStyle } from '@/components/atoms/Title/styles';
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

  return (
    <TitleStyle
      as={`h${level}` as keyof JSX.IntrinsicElements}
      className={className}
      $level={level}
      $maxWidth={maxWidth}
      $mb={mb}
      style={style}
    >
      {children}
    </TitleStyle>
  );
}
