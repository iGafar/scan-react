import { Contacts, FooterStyle } from '@/components/organisms/Footer/styles';
import { Container } from '@/style/global';
import { Flex } from 'antd';

export default function Footer() {
  return (
    <FooterStyle>
      <Container>
        <Flex justify="space-between" align="center">
          <img src="./icons/logo-footer.svg" alt="logo" />

          <Contacts>
            г. Москва, Цветной б-р, 40 <br />
            <a href="tel:+74957712111">+7 495 771 21 11</a> <br />
            <a href="mailto:info@skan.ru">info@skan.ru</a> <br />
            <br />
            <span>Copyright. 2022</span>
          </Contacts>
        </Flex>
      </Container>
    </FooterStyle>
  );
}
