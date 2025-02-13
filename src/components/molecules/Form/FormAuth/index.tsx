import {
  ButtonStyle,
  FormStyle,
} from '@/components/molecules/Form/FormAuth/styles';
import { Button, Flex, Form, Input } from 'antd';

export default function FormAuth() {
  return (
    <FormStyle layout="vertical">
      <Flex gap={15} style={{ marginBottom: 40 }}>
        <ButtonStyle type="text">Войти</ButtonStyle>
        <ButtonStyle type="text" disabled>
          Зарегистрироваться
        </ButtonStyle>
      </Flex>

      <Form.Item label="Логин или номер телефона:">
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Пароль:">
        <Input size="large" />
      </Form.Item>

      <Flex vertical gap={15} style={{ marginBottom: 30 }}>
        <Button>Войти</Button>

        <Button
          type="link"
          size="small"
          style={{ textDecoration: 'underline' }}
        >
          Восстановить пароль
        </Button>
      </Flex>

      <Form.Item label="Войти через:">
        <Flex>
          <Button type="text" size="small">
            <img src="./icons/social/google.png" alt="google" />
          </Button>
          <Button type="text" size="small">
            <img src="./icons/social/facebook.png" alt="facebook" />
          </Button>
          <Button type="text" size="small">
            <img src="./icons/social/yandex.png" alt="yandex" />
          </Button>
        </Flex>
      </Form.Item>
    </FormStyle>
  );
}
