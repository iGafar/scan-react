import Title from '@/components/atoms/Title';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound({
  description,
}: {
  description?: string;
}) {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title={<Title level={2}>404</Title>}
      subTitle={
        description
          ? description
          : 'Извините, страница, которую вы посетили, не существует.'
      }
      extra={<Button onClick={() => navigate(-1)}>Предыдущая страница</Button>}
    />
  );
}
