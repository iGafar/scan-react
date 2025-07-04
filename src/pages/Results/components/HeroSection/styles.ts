import { Container } from '@/style/global';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
		background-position: right 50px bottom;
  }
  to {
    opacity: 1;
		background-position: right bottom;
  }
`;

export const ContainerStyle = styled(Container)`
  background: url('./images/results-back.svg') no-repeat right center/ auto 100%;
  padding-top: 70px;
  padding-bottom: 145px;
  opacity: 0;
  animation: ${fadeIn} 0.9s ease-in-out forwards;
  animation-delay: 0.3s;

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
