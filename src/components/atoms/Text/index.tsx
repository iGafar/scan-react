import { TextStyle } from '@/components/atoms/Text/styles';
import { CSSProperties, ReactNode } from 'react';

export type TextSizeType = 'large' | 'medium' | 'small';

interface IText {
  children: ReactNode;
  maxWidth?: number;
  mb?: number;
  size?: TextSizeType;
  style?: CSSProperties;
  textCenter?: boolean;
  className?: string;
}

export default function Text(props: IText) {
  const {
    maxWidth,
    children,
    mb,
    size = 'large',
    style,
    textCenter = false,
    className,
  } = props;

  return (
    <TextStyle
      $maxWidth={maxWidth}
      $mb={mb}
      $size={size}
      style={style}
      $textCenter={textCenter}
      className={className}
    >
      {children}
    </TextStyle>
  );
}
