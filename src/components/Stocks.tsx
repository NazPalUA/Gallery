import { useGetStocksQuery } from "../firebase/firestore-database/queries"
import List from "./List"
import CountMessage from "./UI/CountMessage"

export default function Stocks() {
	const { data } = useGetStocksQuery()
	return (
		<>
			<h1 className="text-center">My Stocks</h1>
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
