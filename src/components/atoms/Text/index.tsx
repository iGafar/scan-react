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
}

export default function Text(props: IText) {
  const {
    maxWidth,
    children,
    mb,
    size = 'large',
    style,
    textCenter = false,
  } = props;

  return (
    <TextStyle
      $maxWidth={maxWidth}
      $mb={mb}
      $size={size}
      style={style}
      $textCenter={textCenter}
    >
      {children}
    </TextStyle>
  );
}
