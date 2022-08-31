import styled, { css, DefaultTheme } from 'styled-components'

export const Box = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 30px 10px;
`

export const Header = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.black};
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
	`}
`

export const ContainerScore = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Title = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xlarge};
		font-weight: ${theme.font.bold};
	`}
`
export const TextScore = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xxxlarge};
	`}
`
export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
	`}
`

type CardProps = {
	result: 'good' | 'regular' | 'bad'
}

const cardModifiers = {
	good: (theme: DefaultTheme) => css`
		background-color: ${theme.colors.green};
		box-shadow: 3.7px 3.4px 1px ${theme.colors.darGreen};
	`,
	regular: (theme: DefaultTheme) => css`
		background-color: ${theme.colors.yellow};
		box-shadow: 3.7px 3.4px 1px ${theme.colors.darkYellow};
	`,
	bad: (theme: DefaultTheme) => css`
		background-color: ${theme.colors.red};
		box-shadow: 3.7px 3.4px 1px ${theme.colors.darkRed};
	`
}

export const Card = styled.div<CardProps>`
	${({ theme, result }) => css`
		width: 9.8rem;
		text-align: center;
		padding: 4.7px;
		border-radius: 5.5px;
		margin-top: 10px;
		transform: rotate(-1.4deg);

		${!!result && cardModifiers[result](theme)}
	`}
`
