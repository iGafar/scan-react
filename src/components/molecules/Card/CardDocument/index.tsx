import { IOk } from '@/api/controllers/documents-controller/documents-controller.types';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import { formatText } from '@/components/molecules/Card/CardDocument/lib/formatText';
import { getAttribute } from '@/components/molecules/Card/CardDocument/lib/getAttribute';
import {
  CardDocumentStyle,
  ContentText,
  ImageWrapper,
  NewsType,
} from '@/components/molecules/Card/CardDocument/styles';
import { getLocaleDate } from '@/lib/getLocaleDate';
import { Button, Flex } from 'antd';

interface ICardDocumentProps {
  cardData: IOk;
}

export default function CardDocument(props: ICardDocumentProps) {
  const { issueDate, source, title, attributes, content, url } = props.cardData;

  const matches = content.markup.match(/https?:\/\/\S+"/g);
  const imgUrl = matches
    ? matches.toString().replace(/"/g, '')
    : './images/search-mock.jpg';

  return (
    <CardDocumentStyle>
      <Text size="small" mb={24}>
        {getLocaleDate(issueDate)} <a href={url}>{source.name}</a>
      </Text>

      <Title level={5} mb={14}>
        {title.text}
      </Title>

      <NewsType>{getAttribute(attributes)}</NewsType>

      <ImageWrapper>
        <img src={imgUrl} alt="news image" />
      </ImageWrapper>

      <ContentText size="small" mb={32}>
        {formatText(content.markup)}
      </ContentText>

      <Flex justify="space-between" align="flex-end">
        <a href={url} target="_blank">
          <Button type="primary">Читать в источнике</Button>
        </a>
        <Text size="small" style={{ color: 'var(--gray-primary)' }}>
          {attributes.wordCount.toLocaleString('ru-Ru')} слов
        </Text>
      </Flex>
    </CardDocumentStyle>
  );
}
