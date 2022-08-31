import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AnswersContext } from '../../context/Answers'

import Button from '../../components/Button'

import Base from '../../templates/Base'

import * as S from './styles'

type ResultProps = 'good' | 'regular' | 'bad'

const Result = () => {
	const navigate = useNavigate()
	const [result, setResult] = useState<ResultProps>('good')

	const { score, setScore } = useContext(AnswersContext)

	useEffect(() => {
		if (score >= 8) {
			setResult('good')
		}

		if (score >= 6 && score <= 7) {
			setResult('regular')
		}

		if (score < 6) {
			setResult('bad')
		}
	}, [score])

	const handleResetScoreAndNavigateToTheQuiz = () => {
		setScore(0)
		navigate('/quiz')
		return
	}

	return (
		<Base>
			<S.Header>
				<S.Title>Result</S.Title>
			</S.Header>
			<S.Box>
				<S.ContainerScore>
					<S.Title>Your Score: </S.Title>
					<S.Card result={result}>
						<S.TextScore>{score}</S.TextScore>
					</S.Card>
				</S.ContainerScore>
				<Button onClick={handleResetScoreAndNavigateToTheQuiz}>
					Try again
				</Button>
			</S.Box>
		</Base>
	)
}

export default Result
