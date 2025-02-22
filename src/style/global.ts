import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
	html {
		font-size: 10px;
	}

	body {
		font-family: "Inter", sans-serif;
		font-size: 14px;
		font-weight: 400;
		overflow-x: hidden;
	}

	#root {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		flex: 1;
		gap: 70px;
		display: flex;
		flex-direction: column;
	}

	.ant-card, .ant-form {
		box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
	}

	.ant-form {
		border-radius: 10px;
	}

	.ant-checkbox-inner{
		border: 1px solid var(--black) !important;
		opacity: 0.4;
	}

	.ant-checkbox-label {
		opacity: 0.4;
	}

	.ant-checkbox-checked .ant-checkbox-inner, .ant-checkbox-checked+.ant-checkbox-label {
		opacity: 1;
	}

	.ant-drawer-content-wrapper {
		height: 100vh !important;
	}

	.slick-track {
    padding: 20px 0 !important;
    display: flex !important;
    align-items: center !important;
  }

  .slick-prev,
  .slick-next {
    width: 40px !important;
    height: 40px !important;
    inset-inline-end: -25px !important;

    img {
      width: 100% !important;
    }

    &::after {
      display: none !important;
    }
  }

  .slick-prev {
    transform: rotate(180deg) translateY(20px) !important;
    inset-inline-start: -25px !important;
  }
`;

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
`;
