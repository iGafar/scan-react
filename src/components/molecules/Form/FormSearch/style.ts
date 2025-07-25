import { Form } from 'antd';
import styled from 'styled-components';

export const FormStyle = styled(Form)`
  padding: 20px 44px 30px;
  max-width: 872px;

  .ant-btn {
    width: 365px;
  }

  .ant-form-item-label {
    padding-bottom: 20px !important;
  }

  .ant-form-item-label label {
    font-size: 20px;
  }

  .ant-form-item-required {
    &::before {
      display: none !important;
    }

    &::after {
      content: '*' !important;
      visibility: visible !important;
    }
  }

  @media (max-width: 1200px) {
    max-width: 500px;
  }

  @media (max-width: 900px) {
    max-width: none;
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
		padding: 15px 10px 20px;

    .ant-picker,
    .ant-btn {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .ant-form-item {
      width: 100%;
    }
  }
`;

export const Propmpt = styled.p`
  min-width: 305px;
  color: var(--gray-primary);
`;
