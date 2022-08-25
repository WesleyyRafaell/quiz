import * as S from './styles'
import Lottie from 'react-lottie'
import animation from './lottieIcon.json'

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
		<S.Container>
			<S.Wrapper>
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
					<S.Button>
						<S.TextButton>Comecar</S.TextButton>
					</S.Button>
				</S.Footer>
			</S.Wrapper>
		</S.Container>
	)
}

export default Home
