import { TextStyle } from '@/components/atoms/Text/styles';
import { ReactNode } from 'react';

export type TextSizeType = 'large' | 'medium' | 'small';

interface IText {
  children: ReactNode;
  maxWidth?: number;
  mb?: number;
  size?: TextSizeType;
}

export default function Text(props: IText) {
  const { maxWidth, children, mb, size = 'large' } = props;

  return (
    <TextStyle $maxWidth={maxWidth} $mb={mb} $size={size}>
      {children}
    </TextStyle>
  );
}
