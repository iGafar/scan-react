import { Flex } from 'antd';
import styled from 'styled-components';

export const CardUserWrapper = styled(Flex)`
  background-color: var(--gray-secondary);
  padding: 15px 10px;
  border-radius: 5px;
  min-width: 132px;
  height: 100%;

  p {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    text-align: end;

    &:last-child {
      color: var(--green-tertiary);
    }
  }

  span {
    color: var(--black);
    opacity: 40%;
    font-size: 10px;
    width: 100%;
  }
`;

export const UserCardLoader = styled.picture`
  img {
    width: 24px;
    animation: loading 1s linear infinite;

    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
