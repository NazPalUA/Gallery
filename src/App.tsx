import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import UploadForm from "./components/UploadForm"

type Input = {
	title: string | null
	file: File | null
	path: string | null
}

const photos = [
	"https://picsum.photos/id/1001/200/200",
	"https://picsum.photos/id/1002/200/200",
	"https://picsum.photos/id/1003/200/200",
	"https://picsum.photos/id/1004/200/200",
	"https://picsum.photos/id/1005/200/200",
	"https://picsum.photos/id/1006/200/200",
]

function App() {
	const [count, setCount] = useState("")
	const [inputs, setInputs] = useState<Input>({
		title: null,
		file: null,
		path: null,
	})
	const [items, setItems] = useState(photos)
	const [isCollapsed, collapse] = useState(false)
	const toggle = () => {
		collapse(!isCollapsed)
	}
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "file") {
			const file = e.target.files?.[0]
			const path = file ? URL.createObjectURL(file) : null
			setInputs({
				...inputs,
				file: file || null,
				path: path,
			})
		} else if (e.target.name === "title") {
			setInputs({ ...inputs, title: e.target.value })
		}
	}
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputs.path !== null) {
			setItems([inputs.path, ...items])
		}
	}

	useEffect(() => {
		setCount(`you have ${items.length} image${items.length > 1 ? "s" : ""}`)
	}, [items])

	return (
		<>
			<Navbar />
			<div className="container text-center mt-5">
				<button className="btn btn-success float-end" onClick={toggle}>
					{isCollapsed ? "Close" : "+ Add"}
				</button>
				<div className="clearfix mb-4"></div>
				<UploadForm
					isVisible={isCollapsed}
					onChange={handleOnChange}
					onSubmit={handleOnSubmit}
				/>
				<h2>{count}</h2>
				<h1>Gallery</h1>
				<div className="row">
					{items.map((photo, index) => (
						<Card key={index} imgSrc={photo} />
					))}
				</div>
			</div>
		</>
	)
}

export default App
