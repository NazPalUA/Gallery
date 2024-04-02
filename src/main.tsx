import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App.tsx"
import Layout from "./components/Layout.tsx"
import Stocks from "./components/MyImages.tsx"
import "./index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/my-images" element={<Stocks />} />
					</Routes>
				</Layout>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
)
