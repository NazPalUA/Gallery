import { Dispatch, createContext, useContext, useReducer } from "react"

type Value = React.ChangeEvent<HTMLInputElement>
type Action =
	| { type: "collapse"; payload: { bool: boolean } }
	| { type: "setInputs"; payload: { value: Value } }

type Inputs = {
	title: string | null
	file: File | null
	path: string | null
}

type State = {
	inputs: Inputs
}

const initialState: State = {
	inputs: {
		title: null,
		file: null,
		path: null,
	},
}

const handleOnChange = (
	state: State,
	e: React.ChangeEvent<HTMLInputElement>
) => {
	if (e.target.name === "file") {
		const file = e.target.files?.[0] || null
		const path = file ? URL.createObjectURL(file) : null
		return {
			...state.inputs,
			file: file,
			path: path,
		}
	} else if (e.target.name === "title") {
		return { ...state.inputs, title: e.target.value }
	}
	return state.inputs // default return
}

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "setInputs":
			return { ...state, inputs: handleOnChange(state, action.payload.value) }
		default:
			return state
	}
}

type ContextType = {
	state: State
	dispatch: Dispatch<Action>
}

const Context = createContext<ContextType | null>(null)
const Provider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	)
}

function useFirestoreContext() {
	const context = useContext(Context)
	if (context === null) {
		throw new Error(
			"useFirestoreContext must be used within a Context.Provider"
		)
	}
	return context
}

export { Provider, useFirestoreContext }
