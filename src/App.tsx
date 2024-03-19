import { useMemo, useReducer } from "react"
import "./App.css"
import Card from "./components/Card"
import Layout from "./components/Layout"

export type Item = {
	title: string | null
	file: File | null
	path: string | null
}

export type Inputs = {
	title: string | null
	file: File | null
	path: string | null
}

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

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const toggle = (bool: boolean) =>
		dispatch({ type: "collapse", payload: { bool } })
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch({ type: "setInputs", payload: { value: e } })
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch({ type: "setItem" })
		toggle(!state.isCollapsed)
	}

	const count = useMemo(() => {
		return `you have ${state.count} image${state.count > 1 ? "s" : ""}`
	}, [state.count])

	return (
		<Layout
			state={state}
			onChange={handleOnChange}
			onSubmit={handleOnSubmit}
			toggle={toggle}
		>
			<h1 className="text-center">Gallery</h1>
			{count}
			<div className="row">
				{state.items.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div>
		</Layout>
	)
}

export default App
