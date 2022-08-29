import { createContext, useState } from 'react'

type AnswersContextProps = {
	score: number
	setScore: React.Dispatch<React.SetStateAction<number>>
}
type AnswersProviderProps = {
	children: React.ReactNode
}

export const AnswersContext = createContext({} as AnswersContextProps)

export const AnswersProvider = ({ children }: AnswersProviderProps) => {
	const [score, setScore] = useState(0)

	return (
		<AnswersContext.Provider value={{ setScore, score }}>
			{children}
		</AnswersContext.Provider>
	)
}
