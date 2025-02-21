import styled from 'styled-components';

export const WhyUsSectionStyle = styled.section`
  .container {
    padding-bottom: 578px;
    background: url(./images/why_we_back.png) no-repeat bottom/contain;
    background-size: 98%;

    @media (max-width: 1320px) {
      padding-bottom: calc(100vw * 575 / 1307);
    }
  }
`;
