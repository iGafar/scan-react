import styled from 'styled-components';

export const TitleStyle = styled.h1<{
  $level: number;
  $maxWidth: number | undefined;
  $mb: number | undefined;
  $isTablet: boolean;
}>`
  font-size: ${({ $level, $isTablet }) => {
    switch ($level) {
      case 1:
        return 60;
      case 2:
        return 45;
      case 3:
        return $isTablet ? 40 : 22;
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
    $level < 4 &&
    'font-family: "Inter", sans-serif; text-transform: uppercase;'}
  font-weight: ${({ $level }) => ($level > 3 ? 500 : 900)};
  color: #333;
`;
