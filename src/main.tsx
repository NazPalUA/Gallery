import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./components/AppRoutes.tsx"
import Layout from "./components/Layout.tsx"
import "./index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<AppRoutes />
				</Layout>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
)
