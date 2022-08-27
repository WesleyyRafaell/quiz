import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'

import animation from './lottieIcon.json'
import Base from '../../templates/Base'

import * as S from './styles'
import Button from '../../components/Button'

const Home = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<Base>
			<S.Box>
				<S.Header>
					<S.Title>
						Welcome to the <span>Trivia Challenge!</span>
					</S.Title>
				</S.Header>
				<S.Main>
					<S.Text>
						You will be presented with 10 True or False questions.
					</S.Text>
					<Lottie options={defaultOptions} height={150} width={150} />
					<S.Text>Can you score 100% ?</S.Text>
				</S.Main>
				<S.Footer>
					<Link to="quiz">
						<Button fullWidth>Comecar</Button>
					</Link>
				</S.Footer>
			</S.Box>
		</Base>
	)
}

export default Home
