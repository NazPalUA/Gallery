import "./App.css"
import List from "./components/List"
import { useGetStocksQuery } from "./firebase/firestore-database/queries"

const CountMessage = ({ count }: { count: number }) => {
	return <span>{`you have ${count} image${count > 1 ? "s" : ""}`}</span>
}

function App() {
	const { data } = useGetStocksQuery()

	return (
		<>
			<h1 className="text-center">Gallery</h1>
			{!data ? (
				<p className="text-center">No images found</p>
			) : (
				<>
					<CountMessage count={data.length} />
					<List items={data} />
				</>
			)}
		</>
	)
}

export default App
