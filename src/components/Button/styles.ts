import styled, { css } from 'styled-components'

export const Button = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.green};
		box-shadow: 4.7px 3.8px 1px #78a31a;
		width: 24.5rem;
		height: 3.7rem;
		border: none;
		border-radius: 10px;
		transform: rotate(-0.4deg);
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;
	`}
`
export const TextButton = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.medium};
	`}
`