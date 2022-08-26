import styled, { css } from 'styled-components'

export const Box = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 30px 10px;
`

export const Header = styled.header`
	text-align: center;
`
export const Title = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xlarge};
		font-weight: ${theme.font.bold};

		> span {
			display: block;
			font-size: ${theme.font.sizes.xxlarge};
		}
	`}
`

export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		margin-bottom: 10px;
	`}
`

export const Main = styled.div`
	text-align: center;
`

export const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	> button {
		width: 24.5rem;
	}
`
