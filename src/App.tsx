import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<div className="container text-center mt-5">
				<h1>Gallery</h1>
				<div className="row">
					{Array(9)
						.fill(null)
						.map((_, index) => (
							<Card key={index} />
						))}
				</div>
			</div>
		</>
	)
}

export default App
