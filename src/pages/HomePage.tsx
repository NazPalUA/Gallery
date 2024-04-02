import List from "../components/List"
import CountMessage from "../components/UI/CountMessage"
import { useGetStocksQuery } from "../firebase/firestore-database/queries"

function HomePage() {
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

export default HomePage
