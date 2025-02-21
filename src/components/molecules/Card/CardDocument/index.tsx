import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import {
  ImageWrapper,
  NewsType,
} from '@/components/molecules/Card/CardDocument/styles';
import { Button, Card, Flex } from 'antd';

export default function CardDocument() {
  return (
    <Card>
      <Text size="small" mb={24}>
        13.09.2021 Комсомольская правда KP.RU
      </Text>

      <Title level={5} mb={14}>
        Скиллфэктори - лучшая онлайн-школа для будущих айтишников
      </Title>

      <NewsType>Технические новости</NewsType>

      <ImageWrapper>
        <img
          src="https://avatars.mds.yandex.net/i?id=43f1a029d98aef8cb0091dba04947086_l-5292126-images-thumbs&n=27&h=480&w=480"
          alt=""
        />
      </ImageWrapper>

      <Text size="small" style={{ color: 'var(--gray-primary)' }} mb={32}>
        SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь.
        С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
        самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере,
        Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других
        топовых компаниях. Принципы SkillFactory: акцент на практике, забота о
        студентах и ориентир на трудоустройство. 80% обучения — выполнение
        упражнений и реальных проектов. Каждого студента поддерживают менторы, 2
        саппорт-линии и комьюнити курса. А карьерный центр помогает составить
        резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
      </Text>

      <Flex justify="space-between" align="flex-end">
        <Button type="primary">Читать в источнике</Button>
        <Text size="small" style={{ color: 'var(--gray-primary)' }}>
          2 543 слова
        </Text>
      </Flex>
    </Card>
  );
}
