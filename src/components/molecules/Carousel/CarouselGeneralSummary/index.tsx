import { useGetHistogramsMutation } from '@/api/controllers/objectsearch-controller/objectsearch-controller';
import Text from '@/components/atoms/Text';
import ArrowBtn from '@/components/molecules/Carousel/components/ArrowBtn';
import CarouselItem from '@/components/molecules/Carousel/CarouselGeneralSummary/CarouselItem';
import {
  CarouselStyle,
  CarouselWrapper,
  TitlesBlock,
} from '@/components/molecules/Carousel/CarouselGeneralSummary/styles';
import { IDocument } from '@/components/molecules/Carousel/CarouselGeneralSummary/types';
import useResponsive from '@/hooks/useResponsive';
import { Alert, Flex, Spin } from 'antd';
import { useEffect, useState } from 'react';

export default function CarouselGeneralSummary() {
  const { isMobile, isPreMobile, isTablet, isLargeDesktop, isDesktop } =
    useResponsive();

  const [getHistograms, { data, isLoading, isError }] =
    useGetHistogramsMutation({ fixedCacheKey: 'histograms' });

  const [documents, setDocuments] = useState<IDocument[]>([]);

  useEffect(() => {
    if (!data) {
      const histogramsBody = sessionStorage.getItem('histogramsBody');
      if (histogramsBody && histogramsBody.trim() !== '') {
        try {
          getHistograms(JSON.parse(histogramsBody));
        } catch (e) {
          console.error('Ошибка парсинга histogramsBody:', e);
          sessionStorage.removeItem('histogramsBody');
        }
      }
    }
  }, []);

  useEffect(() => {
    const newTotalDocuments = data ? data[0].data : [];
    const newriskFactors = data ? data[1].data : [];

    const newData: IDocument[] = newTotalDocuments.map((el, i) => {
      return {
        date: el.date,
        documentValue: el.value,
        riskValue: newriskFactors[i].value,
      };
    });

    setDocuments([...newData]);
  }, [data]);

  function getSlidesToShow(): number {
    switch (true) {
      case isLargeDesktop:
        return 8;
      case isDesktop:
        return 7;
      case isTablet:
        return 5;
      case isPreMobile:
        return 3;
      case isMobile:
        return 1;
      default:
        return 8;
    }
  }

  if (isLoading)
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );

  if (isError) return <Alert type="error" message="Что то пошло не так" />;

  if (!documents)
    return (
      <Alert
        type="info"
        action={
          <Flex justify="center">
            <span>Данных нет</span>
          </Flex>
        }
      />
    );

  return (
    <CarouselWrapper>
      <TitlesBlock vertical={isPreMobile} gap={26}>
        <Text size="large">Период</Text>
        <Text size="large">Всего</Text>
        <Text size="large">Риски</Text>
      </TitlesBlock>
      <CarouselStyle
        arrows
        draggable
        dots={false}
        slidesToShow={
          documents.length === 0
            ? 1
            : Math.min(getSlidesToShow(), documents.length)
        }
        infinite={false}
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
        {documents.length === 0 ? (
          <CarouselItem key="empty" date="" documentValue={0} riskValue={0} />
        ) : (
          documents.map(item => <CarouselItem key={item.date} {...item} />)
        )}
      </CarouselStyle>
    </CarouselWrapper>
  );
}
