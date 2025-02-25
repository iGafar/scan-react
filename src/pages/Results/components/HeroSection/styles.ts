import { Container } from '@/style/global';
import styled from 'styled-components';

export const ContainerStyle = styled(Container)`
  background: url('./images/results_back.svg') no-repeat right center/ auto 100%;
  padding-top: 70px;
  padding-bottom: 145px;

  @media (max-width: 1000px) {
    padding-top: 40px;
    padding-bottom: 85px;
  }

  @media (max-width: 768px) {
    padding-top: 0;
    padding-bottom: calc(100vw * 369 / 553);
    background-position: bottom;
    background-size: 100%;
  }
`;
