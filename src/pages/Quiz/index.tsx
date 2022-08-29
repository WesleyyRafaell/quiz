import { useContext, useEffect, useState } from 'react'
import Lottie from 'react-lottie'

import api from '../../services/api'

import Base from '../../templates/Base'
import Button from '../../components/Button'
import animation from './lottieicon.json'

import * as S from './styles'
import { AnswersContext } from '../../context/Answers'
import { useNavigate } from 'react-router-dom'

type dataProps = {
	category: string
	correct_answer: string
	difficulty: string
	incorrect_answers: string[]
	question: string
	type: string
}

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animation,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
}

const Quiz = () => {
	const navigate = useNavigate()
	const { setScore } = useContext(AnswersContext)

	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState(1)
	const [arrayQuestions, setArryQuestions] = useState([])
	const [question, setQuestion] = useState({
		category: '',
		correct_answer: '',
		difficulty: '',
		question: ''
	})

	let isFirstRender = true

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await api.get(
					'api.php?amount=10&difficulty=hard&type=boolean'
				)

				if (!response) return
				if (!isFirstRender) return

				const formatedArrayQuestions = response.data.results.map(
					(item: dataProps) => {
						return {
							category: item.category,
							correct_answer: item.correct_answer,
							difficulty: item.difficulty,
							question: item.question
						}
					}
				)

				const firstQuestion = formatedArrayQuestions[0]

				setQuestion(firstQuestion)
				setArryQuestions(formatedArrayQuestions)
				setLoading(false)
				// eslint-disable-next-line react-hooks/exhaustive-deps
				isFirstRender = false
			} catch (error) {
				console.log(`error`, error)
			}
		}

		getData()
	}, [])

	const handleUserAnswer = (answer: string) => {
		if (answer === question.correct_answer) {
			setScore((prevState) => prevState + 1)
		}

		if (count === arrayQuestions.length) {
			navigate('/result')
			return
		}

		setQuestion(arrayQuestions[count])
		setCount((prevState) => prevState + 1)
	}

	if (loading) {
		return (
			<Base>
				<S.Box>
					<S.ContainerLoading>
						<Lottie options={defaultOptions} height={150} width={150} />
					</S.ContainerLoading>
				</S.Box>
			</Base>
		)
	}

	return (
		<Base>
			<S.Box>
				<S.Header>
					<S.Title>{question.category}</S.Title>
				</S.Header>
				<S.Main>
					<S.Card>
						<S.Text>{question.difficulty}</S.Text>
					</S.Card>
					<S.BigText>{question.question}</S.BigText>
					<S.ContainerButtons>
						<Button onClick={() => handleUserAnswer('True')}>True</Button>
						<Button onClick={() => handleUserAnswer('False')} backgroundRed>
							False
						</Button>
					</S.ContainerButtons>
					<S.ContainerScore>
						<S.BigText>{count}</S.BigText>
						<S.BigText>/</S.BigText>
						<S.BigText>{arrayQuestions.length}</S.BigText>
					</S.ContainerScore>
				</S.Main>
			</S.Box>
		</Base>
	)
}

export default Quiz
