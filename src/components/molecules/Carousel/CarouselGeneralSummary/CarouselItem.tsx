import Text from '@/components/atoms/Text';
import { CarouselItemStyle } from '@/components/molecules/Carousel/CarouselGeneralSummary/styles';
import { IDocument } from '@/components/molecules/Carousel/CarouselGeneralSummary/types';
import useResponsive from '@/hooks/useResponsive';
import { getLocaleDate } from '@/lib/getLocaleDate';

export default function CarouselItem(props: IDocument) {
  const { date, documentValue, riskValue } = props;
  const { isMobile } = useResponsive();

  return (
    <CarouselItemStyle key={date}>
      <Text size="medium" textCenter mb={isMobile ? 0 : 25}>
        {getLocaleDate(date)}
      </Text>
      <Text size="medium" textCenter mb={isMobile ? 0 : 25}>
        {documentValue}
      </Text>
      <Text size="medium" textCenter>
        {riskValue}
      </Text>
    </CarouselItemStyle>
  );
}
