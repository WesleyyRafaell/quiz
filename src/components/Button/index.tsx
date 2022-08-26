import * as S from './styles'

type ButtonProps = {
	children: string
}

const Button = ({ children }: ButtonProps) => {
	return (
		<S.Button>
			<S.TextButton>{children}</S.TextButton>
		</S.Button>
	)
}

export default Button
