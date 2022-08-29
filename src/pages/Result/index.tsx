import { useContext } from 'react'
import { AnswersContext } from '../../context/Answers'
import Base from '../../templates/Base'

import * as S from './styles'

const Result = () => {
	const { score } = useContext(AnswersContext)
	return (
		<Base>
			<S.Box>
				<p>{score}</p>
			</S.Box>
		</Base>
	)
}

export default Result
