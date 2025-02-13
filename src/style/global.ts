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
`;

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
`;
