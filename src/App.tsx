import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useMemo } from "react"
import "./App.css"
import Card from "./components/Card"
import Layout from "./components/Layout"
import { useAuthContext } from "./context/AuthContext"
import { useFirestoreContext } from "./context/FirestoreContext"
import { auth } from "./lib/firebase.config"

function App() {
	const { state, read } = useFirestoreContext()
	const { authenticate } = useAuthContext()

	const count = useMemo(() => {
		return `you have ${state.count} image${state.count > 1 ? "s" : ""}`
	}, [state.count])

	useEffect(() => {
		read()
		onAuthStateChanged(auth, user => {
			if (user) {
				authenticate(user)
				console.log("User is signed in")
			} else {
				console.log("User is signed out")
			}
		})
	}, [])

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
