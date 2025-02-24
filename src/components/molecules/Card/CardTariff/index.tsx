import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import {
  CardStyle,
  CardTitle,
  TariffsList,
} from '@/components/molecules/Card/CardTariff/styles';
import { useAuth } from '@/hooks/useAuth';
import useResponsive from '@/hooks/useResponsive';
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

  const { isTablet } = useResponsive();
  const { isAuth } = useAuth();

  return (
    <CardStyle
      $backColor={backColor}
      $isActiveTariff={isAuth && title === 'Beginner'}
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
        <Title level={4} style={{ fontWeight: 500 }}>
          {price.toLocaleString('ru')} ₽
          <OldPrice>{oldPrice.toLocaleString('ru')} ₽</OldPrice>
        </Title>
        <Text size="medium" mb={isTablet ? 59 : 35}>
          {description}
        </Text>

        <Text mb={10} style={{ marginTop: 'auto' }}>
          В тариф входит:
        </Text>

        <TariffsList>
          {tariffOptions.map(option => (
            <li key={option}>
              <img src="./icons/check.svg" alt="check" /> {option}
            </li>
          ))}
        </TariffsList>
        <Button size="large">Подробнее</Button>
      </Flex>
    </CardStyle>
  );
}
