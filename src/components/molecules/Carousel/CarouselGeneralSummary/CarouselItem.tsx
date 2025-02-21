import Text from '@/components/atoms/Text';
import { getLocaleDate } from '@/components/molecules/Carousel/CarouselGeneralSummary/lib/getLocaleDate';
import { CarouselItemStyle } from '@/components/molecules/Carousel/CarouselGeneralSummary/styles';
import { IDocument } from '@/components/molecules/Carousel/CarouselGeneralSummary/types';

export default function CarouselItem(props: IDocument) {
  const { date, documentValue, riskValue } = props;

  return (
    <CarouselItemStyle key={date}>
      <Text size="medium" textCenter mb={25}>
        {getLocaleDate(date)}
      </Text>
      <Text size="medium" textCenter mb={25}>
        {documentValue}
      </Text>
      <Text size="medium" textCenter>
        {riskValue}
      </Text>
    </CarouselItemStyle>
  );
}
