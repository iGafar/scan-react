import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSectionStyle = styled.section``;

export const BackImage = styled.img`
  max-width: 593px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  @media (max-width: 500px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
