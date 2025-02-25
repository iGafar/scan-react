import { Carousel, Flex } from 'antd';
import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  padding: 0 20px;

  .slick-track {
    padding: 16px 0 !important;
  }

  .slick-prev {
    inset-inline-start: -35px !important;
  }

  .slick-next {
    inset-inline-end: -35px !important;
  }
`;

export const CarouselStyle = styled(Carousel)`
  border: 2px solid var(--green);
  border-radius: 10px;
  padding-left: 128px;

  @media (max-width: 575px) {
    padding-left: 0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const TitlesBlock = styled(Flex)`
  background-color: var(--green);
  color: var(--white);
  padding: 17px 27px;
  position: absolute;
  border-radius: 10px 0 0 10px;

  @media (max-width: 575px) {
    position: static;
    border-radius: 10px 10px 0 0;
    padding: 18px 20px;

    p {
      flex: 1;
      text-align: center;
    }
  }
`;

export const CarouselItemStyle = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 124px;
    width: 2px;
    background-color: var(--gray-primary);
    position: absolute;
  }

  @media (max-width: 575px) {
    display: flex;
    justify-content: space-between;

    p {
      flex: 1;
    }

    &::before {
      display: none;
    }
  }
`;
