import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/globalStyle'
import { theme } from './styles/theme'
import { AnswersProvider } from './context/Answers'

//pages
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AnswersProvider>
				<GlobalStyle />
				<Router>
					<Routes>
						<Route index element={<Home />} />
						<Route path="quiz" element={<Quiz />} />
						<Route path="result" element={<Result />} />
					</Routes>
				</Router>
			</AnswersProvider>
		</ThemeProvider>
	)
}

export default App
