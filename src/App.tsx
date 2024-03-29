import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import "./App.css"
import Layout from "./components/Layout"
import Card from "./components/UI/Card"
import { useAuthContext } from "./context/AuthContext"
import { auth } from "./firebase/firebase.config"
import { useGetStocksQuery } from "./firebase/firestore-database/queries"

const CountMessage = ({ count }: { count: number }) => {
	return <span>{`you have ${count} image${count > 1 ? "s" : ""}`}</span>
}

function App() {
	const { authenticate } = useAuthContext()

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
			{!data ? (
				<p className="text-center">No images found</p>
			) : (
				<>
					<CountMessage count={data.length} />
					<div className="row">
						{data?.map((item, index) => (
							<Card key={index} {...item} />
						))}
					</div>
				</>
			)}
		</Layout>
	)
}

export default App
