import { Divider, Flex } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Register = styled(Link)`
  opacity: 40%;
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
`;
