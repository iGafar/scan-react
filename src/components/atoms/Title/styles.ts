import styled from 'styled-components';

export const TitleStyle = styled.h1<{
  $level: number;
  $maxWidth: number | undefined;
  $mb: number | undefined;
}>`
  font-size: ${({ $level }) => {
    switch ($level) {
      case 1:
        return '60px';
      case 2:
        return '43px';
      case 3:
        return '1.75rem';
      case 4:
        return '1.5rem';
      case 5:
        return '1.25rem';
      case 6:
        return '1rem';
      default:
        return '1rem';
    }
  }};
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}px`};
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px`};
  font-weight: 900;
  text-transform: uppercase;
  color: #333;
`;
