import { InputStyle } from '@/components/atoms/CustomInput/styles';
import { InputProps } from 'antd';

export default function CustomInput(props: InputProps) {
  return <InputStyle {...props} />;
}
