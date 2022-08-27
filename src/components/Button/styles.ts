import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

// eslint-disable-next-line prettier/prettier
export const Button = styled.button<Pick<ButtonProps, 'fullWidth' | 'backgroundRed'>>`
	${({ theme, fullWidth, backgroundRed }) => css`
		background-color: ${!backgroundRed ? theme.colors.green : theme.colors.red};
		box-shadow: 4.7px 3.8px 1px
			${!backgroundRed ? theme.colors.darGreen : theme.colors.darkRed};
		width: ${fullWidth ? '100%' : '14.5rem'};
		height: 3.7rem;
		border: none;
		border-radius: 10px;
		transform: rotate(-1.3deg);
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
