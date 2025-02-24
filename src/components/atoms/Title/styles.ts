import styled from 'styled-components';

export const TitleStyle = styled.h1<{
  $level: number;
  $maxWidth: number | undefined;
  $mb: number | undefined;
}>`
  font-size: ${({ $level }) => {
    switch ($level) {
      case 1:
        return 60;
      case 2:
        return 45;
      case 3:
        return 40;
      case 4:
        return 30;
      case 5:
        return 26;
      case 6:
        return '1rem';
    }
  }}px;
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}px`};
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px`};
  ${({ $level }) =>
    $level < 5 &&
    'font-family: "Ferry", sans-serif; text-transform: uppercase;'}
  font-weight: ${({ $level }) => ($level > 4 ? 500 : 900)};
  line-height: 1;
  color: #333;

  @media (max-width: 1200px) {
    font-size: ${({ $level }) => {
      switch ($level) {
        case 1:
          return 40;
        case 2:
          return 35;
        case 3:
          return 30;
        case 4:
          return 28;
        case 5:
          return 19;
        case 6:
          return '1rem';
      }
    }}px;
  }

  @media (max-width: 768px) {
    font-size: ${({ $level }) => {
      switch ($level) {
        case 1:
          return 28;
        case 2:
          return 28;
        case 3:
          return 22;
        case 4:
          return 28;
        case 5:
          return 19;
        case 6:
          return '1rem';
      }
    }}px;
  }
`;
