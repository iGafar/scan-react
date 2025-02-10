import CardMainCarousel from '@/components/molecules/Cards/CardMainCarousel';
import useResponsive from '@/hooks/useResponsive';
import { CarouselWrapper } from '@/pages/Main/components/WhyUsSection/styles';
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

export default function CarouselBlock() {
  const { isDesktop, isPreMobile } = useResponsive();

  return (
    <CarouselWrapper>
      <Carousel
        arrows
        draggable
        slidesToShow={isDesktop ? 3 : isPreMobile ? 2 : 1}
        prevArrow={
          <button>
            <img src="./images/carousel/arrow.svg" alt="arrow" />
          </button>
        }
        nextArrow={
          <button>
            <img src="./images/carousel/arrow.svg" alt="arrow" />
          </button>
        }
      >
        {carouselItems.map(item => (
          <CardMainCarousel {...item} />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
}
