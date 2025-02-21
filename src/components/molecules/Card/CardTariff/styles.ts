import { Card } from 'antd';
import styled from 'styled-components';

export const CardStyle = styled(Card)<{ $backColor: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  .ant-card-head {
    background-color: ${props => props.$backColor};

    h4,
    p {
      ${({ $backColor }) => $backColor === '#000000' && 'color: var(--white);'}
    }
  }

  .ant-card-body {
    flex: 1;
  }

  picture {
    height: 81px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
`;
