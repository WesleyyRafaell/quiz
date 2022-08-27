import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
	backgroundRed?: boolean
	fullWidth?: boolean
	children: string
} & ButtonTypes

const Button = ({
	children,
	fullWidth = false,
	backgroundRed = false,
	...props
}: ButtonProps) => {
	return (
		<S.Button {...props} fullWidth={fullWidth} backgroundRed={backgroundRed}>
			<S.TextButton>{children}</S.TextButton>
		</S.Button>
	)
}

export default Button
