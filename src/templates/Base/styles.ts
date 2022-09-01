import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 100vh;
		background-color: ${theme.colors.secondary};

		display: flex;
		justify-content: center;
		align-items: center;
	`}
`

export const Container = styled.div`
	${({ theme }) => css`
		width: 50rem;
		height: 45rem;
		background-color: ${theme.colors.primary};
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		box-shadow: 9.1px 8px 2.9px ${theme.colors.darkYellow};
		overflow: hidden;

		${media.lessThan('small')`
			height: 100%;
			width: 100%;
			border-radius: 0;
		`}
	`}
`
