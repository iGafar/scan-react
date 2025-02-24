import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: var(--green);
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-top: 40px;

    img {
      max-width: 111px;
    }
  }
`;

export const Contacts = styled.p`
  color: var(--white);
  text-align: end;
`;
