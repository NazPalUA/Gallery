import { BrowserRouter } from "react-router-dom"
import "./App.css"
import AppRoutes from "./components/AppRoutes"
import Layout from "./components/Layout"

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<AppRoutes />
			</Layout>
		</BrowserRouter>
	)
}

export default App
