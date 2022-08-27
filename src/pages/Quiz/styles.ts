import styled, { css } from 'styled-components'

export const Box = styled.div`
	height: 100%;
`

export const ContainerLoading = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`

export const Header = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.black};
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
	`}
`
export const Title = styled.h3`
	${({ theme }) => css`
		color: ${theme.colors.lightGray};
	`}
`

export const Main = styled.div`
	padding: 20px;
`

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.green};
		width: 9.8rem;
		text-align: center;
		padding: 4.7px;
		border-radius: 5.5px;
		box-shadow: 3.7px 3.4px 1px ${theme.colors.darGreen};
		margin-bottom: 50px;
		transform: rotate(-1.4deg);
	`}
`
export const Text = styled.h4`
	${({ theme }) => css`
		color: ${theme.colors.white};
	`}
`

export const BigText = styled.h4`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.xlarge};
	`}
`

export const ContainerButtons = styled.div`
	display: flex;
	justify-content: space-around;
	padding-top: 30px;
`
export const ContainerScore = styled.div`
	display: flex;
	padding-top: 40px;
	justify-content: center;
`
