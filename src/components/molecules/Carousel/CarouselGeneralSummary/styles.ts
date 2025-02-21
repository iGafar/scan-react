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
`;

export const TitlesBlock = styled(Flex)`
  background-color: var(--green);
  color: var(--white);
  padding: 17px 27px;
  position: absolute;
  border-radius: 10px 0 0 10px;
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
`;
