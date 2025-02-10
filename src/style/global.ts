import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
	html {
		font-size: 10px;
	}

	body {
		font-family: "Inter", sans-serif;
		font-size: 14px;
		font-weight: 400;
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

	.ant-card {
		box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
	}
`;

export const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 10px;
`;
