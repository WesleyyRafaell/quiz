import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/globalStyle'
import { theme } from './styles/theme'

//pages
import Home from './pages/home'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
