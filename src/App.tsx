import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useMemo } from "react"
import "./App.css"
import Layout from "./components/Layout"
import Card from "./components/UI/Card"
import { useAuthContext } from "./context/AuthContext"
import { useFirestoreContext } from "./context/FirestoreContext"
import { auth } from "./firebase/firebase.config"
import { useGetStocksQuery } from "./firebase/firestore/queries"

function App() {
	const { state } = useFirestoreContext()
	const { authenticate } = useAuthContext()

	const count = useMemo(() => {
		return `you have ${state.count} image${state.count > 1 ? "s" : ""}`
	}, [state.count])

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				authenticate(user)
				console.log("User is signed in")
			} else {
				console.log("User is signed out")
			}
		})
	}, [])

	const { data } = useGetStocksQuery()

	return (
		<Layout>
			<h1 className="text-center">Gallery</h1>
			{count}
			<div className="row">
				{data?.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div>
		</Layout>
	)
}

export default App
