import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import {
  CardBody,
  CardStyle,
  CardTitle,
  TariffsList,
} from '@/components/molecules/Card/CardTariff/styles';
import { useAuth } from '@/hooks/useAuth';
import useResponsive from '@/hooks/useResponsive';
import { OldPrice } from '@/pages/Main/components/OurTariffsSection/styles';
import { Button, Flex } from 'antd';
import { motion } from 'framer-motion';

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
  const isActiveTariff = isAuth && title === 'Beginner';

  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <CardStyle
        $backColor={backColor}
        $isActiveTariff={isActiveTariff}
        title={
          <Flex justify="space-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <Text size="medium" style={{ fontWeight: 400, whiteSpace: 'wrap' }}>
                {subtitle}
              </Text>
            </div>
            <motion.picture
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <img src={icon} alt="tarif icon" />
            </motion.picture>
          </Flex>
        }
      >
        <CardBody vertical $isActiveTariff={isActiveTariff}>
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
            {tariffOptions.map((option, index) => (
              <motion.li 
                key={option}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <img src="./icons/check.svg" alt="check" /> {option}
              </motion.li>
            ))}
          </TariffsList>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="large">
              {isActiveTariff ? 'Перейти в личный кабинет' : 'Подробнее'}
            </Button>
          </motion.div>
        </CardBody>
      </CardStyle>
    </motion.div>
  );
}