import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import {
  CardStyle,
  CardTitle,
} from '@/components/molecules/Card/CardTariff/styles';
import { OldPrice } from '@/pages/Main/components/OurTariffsSection/styles';
import { Button, Flex } from 'antd';

interface ICardTariffProps {
  backColor: string;
  title: string;
  subtitle: string;
  icon: string;
  price: number;
  oldPrice: number;
  description: string;
  tariffOptions: string[];
}

export default function CardTariff(props: ICardTariffProps) {
  const {
    backColor,
    title,
    subtitle,
    icon,
    price,
    oldPrice,
    description,
    tariffOptions,
  } = props;

  return (
    <CardStyle
      $backColor={backColor}
      title={
        <Flex justify="space-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <Text size="medium" style={{ fontWeight: 400, whiteSpace: 'wrap' }}>
              {subtitle}
            </Text>
          </div>
          <picture>
            <img src={icon} alt="tarif icon" />
          </picture>
        </Flex>
      }
    >
      <Flex vertical style={{ height: '100%' }}>
        <Title level={4}>
          {price.toLocaleString('ru')} ₽
          <OldPrice>{oldPrice.toLocaleString('ru')} ₽</OldPrice>
        </Title>
        <Text size="medium" mb={59}>
          {description}
        </Text>

        <Text mb={10} style={{ marginTop: 'auto' }}>
          В тариф входит:
        </Text>

        <ul style={{ marginBottom: 55 }}>
          {tariffOptions.map(option => (
            <li key={option}>
              <img src="./icons/check.svg" alt="check" /> {option}
            </li>
          ))}
        </ul>
        <Button size="large">Подробнее</Button>
      </Flex>
    </CardStyle>
  );
}
