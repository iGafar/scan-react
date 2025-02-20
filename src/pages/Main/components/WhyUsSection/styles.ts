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

export const CarouselWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 70px;

  .slick-track {
    padding: 20px 0;
    display: flex;
    align-items: center;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    inset-inline-end: -25px;

    img {
      width: 100%;
    }

    &::after {
      display: none;
    }
  }

  .slick-prev {
    transform: rotate(180deg) translateY(20px);
    inset-inline-start: -25px;
  }
`;
