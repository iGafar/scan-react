import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
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
    <FadeInOnScroll>
      <Result
        status="404"
        title={
          <FadeInOnScroll delay={0.3}>
            <Title level={2}>404</Title>
          </FadeInOnScroll>
        }
        subTitle={
          <FadeInOnScroll delay={0.6}>
            {description
              ? description
              : 'Извините, страница, которую вы посетили, не существует.'}
          </FadeInOnScroll>
        }
        extra={
          <FadeInOnScroll delay={0.7} threshold={0}>
            <Button onClick={() => navigate(-1)}>Предыдущая страница</Button>
          </FadeInOnScroll>
        }
      />
    </FadeInOnScroll>
  );
}
