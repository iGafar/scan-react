import { Button, Form } from 'antd';
import styled from 'styled-components';

export const FormStyle = styled(Form)`
  padding: 25px 25px 40px;
  max-width: 429px;
  width: 100%;

  .ant-form-item-label {
    padding-bottom: 15px !important;

    label {
      color: var(--gray-primary) !important;
    }
  }

  .ant-form-item-required::before {
    display: none !important;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const ButtonStyle = styled(Button)`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 2px solid var(--green);
  width: 100%;

  &:disabled {
    border-bottom-color: var(--gray);
  }
`;
