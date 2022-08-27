import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/globalStyle'
import { theme } from './styles/theme'

//pages
import Home from './pages/Home'
import Quiz from './pages/Quiz'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="quiz" element={<Quiz />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
