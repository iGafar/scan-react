import { Button, Divider, Flex } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
  padding-top: 10px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Register = styled(Link)`
  opacity: 0.4;

  @media (max-width: 768px) {
    .register-btn {
      color: var(--white);
    }
  }
`;

export const DividerStyle = styled(Divider)`
  border-color: var(--green-primary);
  border-width: 2px;
  height: 26px;
  margin: 0;
`;

export const NavLinkStyle = styled(NavLink)`
  &.active {
    color: var(--purple);
  }

  @media (max-width: 768px) {
    color: var(--white) !important;
    padding: 20px;

    &:last-of-type {
      margin-bottom: 65px;
    }
  }
`;

export const UserInfoBlock = styled(Flex)`
  p {
    font-size: 14px;
  }

  button {
    font-size: 10px;
    padding: 3px;
    width: fit-content;
    background-color: transparent;
  }

  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    color: var(--white);

    img {
      width: 50px;
      height: 50px;
    }

    p {
      font-size: 28px;
    }

    button {
      font-size: 22px;
    }
  }
`;

export const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
  }
`;

export const BurgerBtn = styled(Button)<{ $forClose: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    display: inline-block;
    width: 30px;
    height: 5px;
    background-color: var(--green);
  }

  ${({ $forClose }) =>
    $forClose &&
    css`
      span {
        background-color: var(--white);
      }

      span:first-child {
        transform: translate(0, 10px) rotate(45deg);
      }

      span:nth-child(2n) {
        opacity: 0;
      }

      span:last-child {
        transform: translate(0, -10px) rotate(-45deg);
      }
    `}
`;
