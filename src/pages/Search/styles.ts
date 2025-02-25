import styled from 'styled-components';

export const SearchSection = styled.section`
  background: url('./images/search_page_back.svg') no-repeat bottom right;

  @media (max-width: 900px) {
    padding-bottom: calc(100vw * 471 / 435) px;
    background-position: bottom;
    background-size: contain;
  }
`;

export const TextBlock = styled.div`
  margin-bottom: 47px;

  background:
    url('./icons/Folders.svg') no-repeat right 80%,
    url('./icons/Document.svg') no-repeat 75% bottom;

  @media (max-width: 768px) {
    background: url('./icons/Document.svg') no-repeat right 50% / 58px auto;
  }
`;
