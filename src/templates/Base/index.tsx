import * as S from './styles'

type ContainerProps = {
	children: React.ReactNode
}

const Base = ({ children }: ContainerProps) => {
	return (
		<S.Wrapper>
			<S.Container>{children}</S.Container>
		</S.Wrapper>
	)
}

export default Base
