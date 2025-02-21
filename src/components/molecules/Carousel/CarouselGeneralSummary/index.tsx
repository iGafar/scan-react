import { useGetHistogramsMutation } from '@/api/controllers/objectsearch-controller/objectsearch-controller';
import Text from '@/components/atoms/Text';
import CarouselItem from '@/components/molecules/Carousel/CarouselGeneralSummary/CarouselItem';
import {
  CarouselStyle,
  CarouselWrapper,
  TitlesBlock,
} from '@/components/molecules/Carousel/CarouselGeneralSummary/styles';
import { IDocument } from '@/components/molecules/Carousel/CarouselGeneralSummary/types';
import { Alert, Flex, Spin } from 'antd';
import { useEffect, useState } from 'react';

export default function CarouselGeneralSummary() {
  const [getHistograms, { data, isLoading, isError }] =
    useGetHistogramsMutation({
      fixedCacheKey: 'histograms',
    });

  const [documents, setDocuments] = useState<IDocument[]>([]);

  useEffect(() => {
    if (!data)
      getHistograms(JSON.parse(localStorage.getItem('histogramsBody') || ''));
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

  if (isLoading)
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );

  if (isError)
    return (
      <Alert
        type="error"
        action={
          <Flex justify="center">
            <span>Что то пошло не так</span>
          </Flex>
        }
      />
    );

  return (
    <CarouselWrapper>
      <TitlesBlock vertical gap={26}>
        <Text size="large">Период</Text>
        <Text size="large">Всего</Text>
        <Text size="large">Риски</Text>
      </TitlesBlock>
      <CarouselStyle
        arrows
        draggable
        slidesToShow={8}
        infinite={false}
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
        {documents.map(item => (
          <CarouselItem {...item} />
        ))}
      </CarouselStyle>
    </CarouselWrapper>
  );
}
