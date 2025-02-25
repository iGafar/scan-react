import {
  useGetHistogramsMutation,
  useGetIdsMutation,
} from '@/api/controllers/objectsearch-controller/objectsearch-controller';
import { TonalityType } from '@/api/controllers/objectsearch-controller/objectsearch-controller.types';
import { CollapseWrapper } from '@/components/molecules/Form/FormSearch/CollapseWrapper';
import {
  checkboxOptions,
  tonalityOptions,
} from '@/components/molecules/Form/FormSearch/formOptions';
import { getBody } from '@/components/molecules/Form/FormSearch/lib/getBody';
import {
  FormStyle,
  Propmpt,
} from '@/components/molecules/Form/FormSearch/style';
import useResponsive from '@/hooks/useResponsive';
import { handlePressOnlyNum } from '@/lib/handlePressOnlyNum';
import { RouterPaths } from '@/router/types';
import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  Select,
  Spin,
} from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IFormSearchValues {
  startDate: string;
  endDate: string;
  inn: string;
  maxFullness: boolean;
  inBusinessNews: boolean;
  onlyMainRole: boolean;
  tonality: TonalityType;
  onlyWithRiskFactors: boolean;
  excludeTechNews: boolean;
  excludeAnnouncements: boolean;
  excludeDigests: boolean;
  limit: number;
}

export default function FormSearch() {
  const navigate = useNavigate();
  const { isLargeDesktop, isMobile } = useResponsive();
  const [form] = Form.useForm<IFormSearchValues>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const [
    getHistograms,
    { isSuccess: isGetHistogramsSucces, isLoading: isGetHistogramsLoading },
  ] = useGetHistogramsMutation({ fixedCacheKey: 'histograms' });
  const [getIds, { isSuccess: isGetIdsSuccess, isLoading: isGetIdsLoading }] =
    useGetIdsMutation({ fixedCacheKey: 'ids' });

  const values = Form.useWatch([], form);

  useEffect(() => {
    sessionStorage.removeItem('histogramsBody');
  }, []);

  useEffect(() => {
    if (isGetHistogramsSucces && isGetIdsSuccess) navigate(RouterPaths.RESULTS);
  }, [isGetHistogramsSucces, isGetIdsSuccess]);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setIsFormValid(true))
      .catch(() => setIsFormValid(false));
  }, [form, values]);

  function onFinish(values: IFormSearchValues) {
    const body = getBody(values);

    setIsSubmitting(true);
    Promise.all([getHistograms(body), getIds(body)]).finally(() =>
      setIsSubmitting(false),
    );
  }

  return (
    //@ts-ignore
    <FormStyle
      layout="vertical"
      onFinish={onFinish}
      form={form}
      initialValues={{ tonality: 'any' }}
    >
      <Flex gap={10} justify="space-between" vertical={!isLargeDesktop}>
        <div>
          <Form.Item
            label="ИНН компании"
            name="inn"
            rules={[
              { required: true, message: 'Обязательное поле' },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();

                  // Проверка на наличие только цифр
                  if (!/^\d+$/.test(value)) {
                    return Promise.reject(
                      new Error('Введите корректные данные'),
                    );
                  }

                  // Проверка длины ИНН (10 или 12 цифр)
                  if (!/^\d{10}$/.test(value) && !/^\d{12}$/.test(value)) {
                    return Promise.reject(
                      new Error('ИНН должен содержать 10 или 12 цифр'),
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Тональность" name="tonality">
            <Select size="large" options={tonalityOptions} />
          </Form.Item>

          <Form.Item
            label="Количество документов в выдаче"
            name="limit"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input onKeyDown={handlePressOnlyNum} size="large" />
          </Form.Item>

          <Flex gap={20} vertical={isMobile} align="flex-end">
            <Form.Item
              label="Диапазон поиска"
              name="startDate"
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <DatePicker size="large" />
            </Form.Item>
            <Form.Item
              name="endDate"
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <DatePicker size="large" />
            </Form.Item>
          </Flex>
        </div>
        <Flex vertical align={isLargeDesktop ? 'flex-end' : 'flex-start'}>
          <CollapseWrapper>
            <Flex vertical>
              {checkboxOptions.map(item => (
                <Form.Item
                  key={item.value}
                  name={item.value}
                  valuePropName="checked"
                  style={{ marginBottom: 15 }}
                >
                  <Checkbox>{item.label}</Checkbox>
                </Form.Item>
              ))}
            </Flex>
          </CollapseWrapper>

          <Button
            htmlType="submit"
            size="large"
            disabled={!isFormValid || isSubmitting}
            loading={isGetIdsLoading || isGetHistogramsLoading}
            style={{ marginTop: 'auto' }}
          >
            Поиск
          </Button>
          <Propmpt>* Обязательные к заполнению поля</Propmpt>
        </Flex>
      </Flex>
    </FormStyle>
  );
}
