import { useLoginMutation } from '@/api/controllers/account-controller/account-controller';
import {
  ButtonStyle,
  FormStyle,
} from '@/components/molecules/Form/FormAuth/styles';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setUserLogin } from '@/store/authSlice';
import { Button, Flex, Form, Input } from 'antd';
import { toast } from 'sonner';

interface IFormValues {
  login: string;
  password: string;
}

export default function FormAuth() {
  const dispatch = useAppDispatch();

  const [form] = Form.useForm<IFormValues>();

  const loginValue = Form.useWatch('login', form);
  const passwordValue = Form.useWatch('password', form);

  const isFormValid = !Boolean(loginValue && passwordValue);

  const [login] = useLoginMutation();

  function onFinish(values: IFormValues) {
    const userLogin = values.login === 'aleksey' ? 'sf_student1' : values.login;
    login({ login: userLogin, password: values.password })
      .unwrap()
      .then(res => {
        dispatch(setUserLogin(res));
        toast.success('Успешная авторизация');
      })
      .catch(_ => toast.error('Данные неверны'));
  }

  return (
    //@ts-ignore
    <FormStyle layout="vertical" onFinish={onFinish} form={form}>
      <Flex gap={15} style={{ marginBottom: 40 }}>
        <ButtonStyle type="text">Войти</ButtonStyle>
        <ButtonStyle type="text" disabled>
          Зарегистрироваться
        </ButtonStyle>
      </Flex>

      <Form.Item
        name="login"
        label="Логин или номер телефона:"
        rules={[{ required: true, message: 'Введите логин' }]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль:"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input size="large" />
      </Form.Item>

      <Flex vertical gap={15} style={{ marginBottom: 30 }}>
        <Button htmlType="submit" disabled={isFormValid}>
          Войти
        </Button>

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
