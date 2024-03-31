import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"

const queryClient = new QueryClient()

function Stocks() {
	return <h1>Stocks</h1>
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/stocks" element={<Stocks />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
)
