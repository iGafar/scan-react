import Text from '@/components/atoms/Text';
import {
  FormStyle,
  Propmpt,
} from '@/components/molecules/Form/FormSearch/style';
import useResponsive from '@/hooks/useResponsive';
import { handlePressOnlyNum } from '@/lib/handlePressOnlyNum';
import {
  Button,
  Checkbox,
  Collapse,
  DatePicker,
  Flex,
  Form,
  Input,
  Select,
} from 'antd';
import { ReactNode } from 'react';

const checkboxesData = [
  {
    id: 1,
    label: 'Признак максимальной полноты',
  },
  {
    id: 2,
    label: 'Упоминания в бизнес-контексте',
  },
  {
    id: 3,
    label: 'Главная роль в публикации',
  },
  {
    id: 4,
    label: 'Публикации только с риск-факторами',
  },
  {
    id: 5,
    label: 'Включать технические новости рынков',
  },
  {
    id: 6,
    label: 'Включать анонсы и календари',
  },
  {
    id: 7,
    label: 'Включать сводки новостей',
  },
];

function CollapseWrapper({ children }: { children: ReactNode }) {
  const { isLargeDesktop } = useResponsive();

  return !isLargeDesktop ? (
    <Collapse
      items={[
        {
          key: 1,
          label: 'Дополнительные параметры',
          children,
        },
      ]}
      ghost
    />
  ) : (
    children
  );
}

export default function FormSearch() {
  const { isLargeDesktop, isMobile } = useResponsive();

  return (
    <FormStyle layout="vertical">
      <Flex gap={10} justify="space-between" vertical={!isLargeDesktop}>
        <div>
          <Form.Item label="ИНН компании">
            <Input onKeyDown={handlePressOnlyNum} size="large" />
          </Form.Item>

          <Form.Item label="Тональность">
            <Select size="large" />
          </Form.Item>

          <Form.Item label="Количество документов в выдаче">
            <Input onKeyDown={handlePressOnlyNum} size="large" />
          </Form.Item>

          <Form.Item label="Диапазон поиска">
            <Flex gap={20} vertical={isMobile}>
              <DatePicker size="large" />
              <DatePicker size="large" />
            </Flex>
          </Form.Item>
        </div>
        <Flex vertical align={isLargeDesktop ? 'flex-end' : 'flex-start'}>
          <Form.Item>
            <CollapseWrapper>
              <Flex vertical gap={15}>
                {checkboxesData.map(item => (
                  <Flex gap={17} key={item.id}>
                    <Checkbox /> <Text size="medium">{item.label}</Text>
                  </Flex>
                ))}
              </Flex>
            </CollapseWrapper>
          </Form.Item>

          <Button htmlType="submit" size="large">
            Поиск
          </Button>
          <Propmpt>* Обязательные к заполнению поля</Propmpt>
        </Flex>
      </Flex>
    </FormStyle>
  );
}
