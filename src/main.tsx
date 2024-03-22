import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { AuthProvider } from "./context/AuthContext.tsx"
import { Provider as FirestoreProvider } from "./context/FirestoreContext.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<FirestoreProvider>
				<App />
			</FirestoreProvider>
		</AuthProvider>
	</React.StrictMode>
)
