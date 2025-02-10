import Text from '@/components/atoms/Text';
import { CardWrapper } from '@/components/molecules/Cards/CardMainCarousel/styles';
import { Card } from 'antd';

interface ICardMainCarouselProps {
  img: string;
  text: string;
}

export default function CardMainCarousel(props: ICardMainCarouselProps) {
  const { img, text } = props;

  return (
    <CardWrapper>
      <Card>
        <img src={img} alt="slide image" />
        <Text size="medium">{text}</Text>
      </Card>
    </CardWrapper>
  );
}
