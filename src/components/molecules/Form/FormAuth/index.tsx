import { useLoginMutation } from '@/api/controllers/account-controller/account-controller';
import {
  ButtonStyle,
  FormStyle,
} from '@/components/molecules/Form/FormAuth/styles';
import AnimatedContainer from '@/components/atoms/AnimatedContainer';
import StaggerContainer from '@/components/atoms/StaggerContainer';
import StaggerItem from '@/components/atoms/StaggerItem';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setUserLogin } from '@/store/authSlice';
import { Button, Flex, Form, Input } from 'antd';
import { motion } from 'framer-motion';
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
    <AnimatedContainer delay={0.3}>
      {/* @ts-ignore */}
      <FormStyle layout="vertical" onFinish={onFinish} form={form}>
        <StaggerContainer>
          <StaggerItem>
            <Flex gap={15} style={{ marginBottom: 40 }}>
              <ButtonStyle type="text">Войти</ButtonStyle>
              <ButtonStyle type="text" disabled>
                Зарегистрироваться
              </ButtonStyle>
            </Flex>
          </StaggerItem>

          <StaggerItem>
            <Form.Item
              name="login"
              label="Логин или номер телефона:"
              rules={[{ required: true, message: 'Введите логин' }]}
            >
              <Input size="large" />
            </Form.Item>
          </StaggerItem>

          <StaggerItem>
            <Form.Item
              name="password"
              label="Пароль:"
              rules={[{ required: true, message: 'Введите пароль' }]}
            >
              <Input size="large" />
            </Form.Item>
          </StaggerItem>

          <StaggerItem>
            <Flex vertical gap={15} style={{ marginBottom: 30 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button htmlType="submit" disabled={isFormValid}>
                  Войти
                </Button>
              </motion.div>

              <Button
                type="link"
                size="small"
                style={{ textDecoration: 'underline' }}
              >
                Восстановить пароль
              </Button>
            </Flex>
          </StaggerItem>

          <StaggerItem>
            <Form.Item label="Войти через:">
              <Flex>
                {['google', 'facebook', 'yandex'].map((social, index) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Button type="text" size="small">
                      <img src={`./icons/social/${social}.png`} alt={social} />
                    </Button>
                  </motion.div>
                ))}
              </Flex>
            </Form.Item>
          </StaggerItem>
        </StaggerContainer>
      </FormStyle>
    </AnimatedContainer>
  );
}