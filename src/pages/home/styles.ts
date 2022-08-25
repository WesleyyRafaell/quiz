import styled, { css } from 'styled-components'

export const Container = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 100vh;
		background-color: ${theme.colors.secondary};

		display: flex;
		justify-content: center;
		align-items: center;
	`}
`

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 50rem;
		height: 45rem;
		background-color: ${theme.colors.primary};
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		box-shadow: 9.1px 8px 2.9px ${theme.colors.darkYellow};
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 30px 10px;
	`}
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
`
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
	`}
`
