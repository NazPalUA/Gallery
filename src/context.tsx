import { Dispatch, createContext, useContext, useReducer } from "react"
import { Inputs, Item } from "./App"

export type State = {
	inputs: Inputs
	items: Item[]
	isCollapsed: boolean
	count: number
}

type Value = React.ChangeEvent<HTMLInputElement>
type Action =
	| { type: "setItem" }
	| { type: "collapse"; payload: { bool: boolean } }
	| { type: "setInputs"; payload: { value: Value } }

const initialState: State = {
	inputs: {
		title: null,
		file: null,
		path: null,
	},
	items: [],
	isCollapsed: false,
	count: 0,
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
		case "setItem":
			return {
				...state,
				items: [state.inputs, ...state.items],
				count: state.items.length + 1,
				inputs: {
					title: null,
					file: null,
					path: null,
				},
			}
		case "setInputs":
			return { ...state, inputs: handleOnChange(state, action.payload.value) }

		case "collapse":
			return { ...state, isCollapsed: action.payload.bool }
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

function useAppContext() {
	const context = useContext(Context)
	if (context === null) {
		throw new Error("useAppContext must be used within a Context.Provider")
	}
	return context
}

export { Provider, useAppContext }
