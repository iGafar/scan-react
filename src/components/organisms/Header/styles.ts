import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Register = styled.a`
  opacity: 40%;
`;

export const NavLinkStyle = styled(NavLink)`
  &.active {
    color: var(--purple);
  }
`;
