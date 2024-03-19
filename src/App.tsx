import { useEffect, useReducer, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import UploadForm from "./components/UploadForm"

type Item = {
	title: string | null
	file: File | null
	path: string | null
}

export type Inputs = {
	title: string | null
	file: File | null
	path: string | null
}

type State = {
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
	const [count, setCount] = useState("")

	const toggle = (bool: boolean) =>
		dispatch({ type: "collapse", payload: { bool } })
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch({ type: "setInputs", payload: { value: e } })
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch({ type: "setItem" })
		toggle(!state.isCollapsed)
	}

	useEffect(() => {
		setCount(
			`you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`
		)
	}, [state.items])

	return (
		<>
			<Navbar />
			<div className="container text-center mt-5">
				<button
					className="btn btn-success float-end"
					onClick={() => toggle(!state.isCollapsed)}
				>
					{state.isCollapsed ? "Close" : "+ Add"}
				</button>
				<div className="clearfix mb-4"></div>
				<UploadForm
					inputs={state.inputs}
					isVisible={state.isCollapsed}
					onChange={handleOnChange}
					onSubmit={handleOnSubmit}
				/>
				<h2>{count}</h2>
				<h1>Gallery</h1>
				<div className="row">
					{state.items.map((photo, index) => (
						<Card key={index} imgSrc={photo.path} />
					))}
				</div>
			</div>
		</>
	)
}

export default App
