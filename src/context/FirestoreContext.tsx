import { Dispatch, createContext, useContext, useReducer } from "react"
import Firestore from "../handlers/firestore"
import { Item, State } from "../types"

type Value = React.ChangeEvent<HTMLInputElement>
type Action =
	| { type: "setItem"; payload: { item: Item } }
	| { type: "setItems"; payload: { items: Item[] } }
	| { type: "collapse"; payload: { bool: boolean } }
	| { type: "setInputs"; payload: { value: Value } }

const { readDocs } = Firestore

const initialState: State = {
	inputs: {
		title: null,
		file: null,
		path: null,
		username: "anonymous",
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
				items: [...state.items, action.payload.item],
				count: state.items.length + 1,
				inputs: {
					title: null,
					file: null,
					path: null,
					username: "anonymous",
				},
			}
		case "setItems":
			return {
				...state,
				items: action.payload.items,
				count: action.payload.items.length,
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
	read: () => void
}

const Context = createContext<ContextType | null>(null)
const Provider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const read = async () => {
		const items = await readDocs("stocks")
		dispatch({ type: "setItems", payload: { items } })
	}
	return (
		<Context.Provider value={{ state, dispatch, read }}>
			{children}
		</Context.Provider>
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
