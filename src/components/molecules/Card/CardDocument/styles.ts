import Text from '@/components/atoms/Text';
import { Card } from 'antd';
import styled from 'styled-components';

export const CardDocumentStyle = styled(Card)`
  width: calc(50% - 19px);

  .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const NewsType = styled.span`
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  width: fit-content;
  border-radius: 5px;
  background-color: var(--gold);
  margin-bottom: 14px;
`;

export const ContentText = styled(Text)`
  height: 228px;
  overflow: auto;
  color: var(--gray-primary);
  margin-top: auto;

  @media (max-width: 810px) {
    max-height: 228px;
    height: auto;
  }
`;

export const ImageWrapper = styled.picture`
  height: 158px;
  overflow: hidden;
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  background: url('./images/search-mock.jpg') no-repeat center center/ cover;

  img {
    width: 100%;
  }
`;
