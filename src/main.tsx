import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { AuthProvider } from "./context/AuthContext.tsx"
import { Provider as FirestoreProvider } from "./context/FirestoreContext.tsx"
import "./index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<FirestoreProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</FirestoreProvider>
		</AuthProvider>
	</React.StrictMode>
)
