import styled from 'styled-components';

export const ImageWrapper = styled.picture`
  height: 100%;

  img {
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 45px;
    height: auto;
    width: 100%;

    img {
      height: auto;
      width: 100%;
    }
  }
`;
