import Text from '@/components/atoms/Text';
import { Card } from 'antd';

import { CardWrapper } from './styles';

interface ICardMainCarouselProps {
  img: string;
  text: string;
}

export default function CardMainCarousel(props: ICardMainCarouselProps) {
  const { img, text } = props;

  return (
    <CardWrapper>
      <Card size="small">
        <img src={img} alt="slide image" />
        <Text size="medium">{text}</Text>
      </Card>
    </CardWrapper>
  );
}
