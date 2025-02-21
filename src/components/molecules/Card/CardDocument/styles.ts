import styled from 'styled-components';

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

export const ImageWrapper = styled.picture`
  max-height: 158px;
  overflow: hidden;
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
`;
