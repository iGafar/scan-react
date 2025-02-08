import styled from 'styled-components';

import { IButtonSize, IButtonType } from '.';

export const CustomBtnStyle = styled.button<{
  $type: IButtonType;
  $fullWidth: boolean;
  $size: IButtonSize;
}>`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: ${p => (p.$size === 'large' ? 22 : 14)}px;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  white-space: nowrap;

  ${p => p.$fullWidth && 'width: 100%;'}

  padding: ${p => (p.$size === 'large' ? '0 40px' : '0 10px')};
  height: ${p => (p.$size === 'large' ? '60px' : '26px')};

  color: ${p => {
    switch (p.$type) {
      case 'primary':
        return 'var(--white)';
      case 'secondary':
        return 'var(--black)';
      default:
        return 'var(--white)';
    }
  }};

  background-color: ${p => {
    switch (p.$type) {
      case 'primary':
        return 'var(--purple)';
      case 'secondary':
        return 'var(--green-primary)';
      default:
        return 'transparent';
    }
  }};

  &:hover {
    background-color: ${p => {
      switch (p.$type) {
        case 'primary':
          return 'var(--purple-primary)';
        case 'secondary':
          return 'var(--green-secondary)';
        default:
          return '';
      }
    }};
  }

  &:active {
    background-color: ${p => {
      switch (p.$type) {
        case 'primary':
          return 'var(--purple-secondary)';
        case 'secondary':
          return 'var(--green-primary)';
        default:
          return '#f3f3f3';
      }
    }};
  }

  &:disabled {
    background-color: var(--purple-secondary);
    cursor: default;
  }
`;
