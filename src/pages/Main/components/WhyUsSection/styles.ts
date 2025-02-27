import styled from 'styled-components';

export const WhyUsSectionStyle = styled.section`
  .container {
    padding-bottom: 578px;
    background: url(./images/why-we-back.png) no-repeat bottom/contain;
    background-size: 98%;

    @media (max-width: 1320px) {
      padding-bottom: calc(100vw * 575 / 1307);
    }

    @media (max-width: 600px) {
      padding-bottom: calc(100vw * 393 / 361);
      background-image: url(./images/why-we-back-mobile.svg);
    }
  }
`;
