import * as S from './styles'

export type ButtonProps = {
	fullWidth?: boolean
	children: string
}

const Button = ({ children, fullWidth = false }: ButtonProps) => {
	return (
		<S.Button fullWidth={fullWidth}>
			<S.TextButton>{children}</S.TextButton>
		</S.Button>
	)
}

export default Button
