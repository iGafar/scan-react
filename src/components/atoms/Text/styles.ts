import { TextSizeType } from '@/components/atoms/Text';
import styled from 'styled-components';

export const TextStyle = styled.p<{
  $maxWidth: number | undefined;
  $mb: number | undefined;
  $size: TextSizeType;
  $textCenter: boolean;
}>`
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}px`};
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px`};
  ${({ $textCenter }) => $textCenter && 'text-align: center'};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'large':
        return 20;
      case 'medium':
        return 18;
      case 'small':
        return 16;
    }
  }}px;
  line-height: 24px;
`;
