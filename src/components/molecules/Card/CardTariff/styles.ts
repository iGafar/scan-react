import { Card } from 'antd';
import styled, { css } from 'styled-components';

export const CardStyle = styled(Card)<{
  $backColor: string;
  $isActiveTariff: boolean;
}>`
  height: 100%;
  display: flex;
  flex-direction: column;

  .ant-card-head {
    background-color: ${props => props.$backColor};

    h4,
    p {
      ${({ $backColor }) =>
        $backColor === '#000000' &&
        css`
          color: var(--white);
        `}
    }
  }

  .ant-card-body {
    flex: 1;

    ${({ $isActiveTariff }) =>
      $isActiveTariff &&
      css`
        border: 2px solid var(--gold);
      `}
  }

  picture {
    height: 81px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
`;

export const TariffsList = styled.ul`
  margin-bottom: 55px;

  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`;
