import CardMainCarousel from '@/components/molecules/Card/CardMainCarousel';
import ArrowBtn from '@/components/molecules/Carousel/CarouselGeneralSummary/ArrowBtn';
import { CarouselWrapper } from '@/components/molecules/Carousel/CarouselWhyWe/styles';
import useResponsive from '@/hooks/useResponsive';
import { Carousel } from 'antd';

const carouselItems = [
  {
    id: 1,
    img: './images/carousel/watch.svg',
    text: 'Высокая и оперативная скорость обработки заявки',
  },
  {
    id: 2,
    img: './images/carousel/search.svg',
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
  },
  {
    id: 3,
    img: './images/carousel/shield.svg',
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
  },
];

export default function CarouselWhyWe() {
  const { isDesktop, isPreMobile } = useResponsive();

  return (
    <CarouselWrapper>
      <Carousel
        arrows
        draggable
        slidesToShow={isDesktop ? 3 : isPreMobile ? 2 : 1}
        prevArrow={
          <ArrowBtn>
            <img src="./images/carousel/arrow.svg" alt="arrow" />
          </ArrowBtn>
        }
        nextArrow={
          <ArrowBtn>
            <img src="./images/carousel/arrow.svg" alt="arrow" />
          </ArrowBtn>
        }
      >
        {carouselItems.map(item => (
          <CardMainCarousel key={item.id} {...item} />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
}
