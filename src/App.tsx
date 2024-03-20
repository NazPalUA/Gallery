import { useMemo } from "react"
import "./App.css"
import Card from "./components/Card"
import Layout from "./components/Layout"
import { useAppContext } from "./context"

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

function App() {
	const { state } = useAppContext()

	const count = useMemo(() => {
		return `you have ${state.count} image${state.count > 1 ? "s" : ""}`
	}, [state.count])

	return (
		<Layout>
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
