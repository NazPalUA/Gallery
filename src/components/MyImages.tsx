import { useGetUserQuery } from "../firebase/authentication/queries"
import { useGetStocksQuery } from "../firebase/firestore-database/queries"
import List from "./List"
import CountMessage from "./UI/CountMessage"

export default function MyImages() {
	const { data } = useGetStocksQuery()
	const { data: userData } = useGetUserQuery()

	const filteredData = data?.filter(item => item.userId === userData?.uid)

	return (
		<>
			<h1 className="text-center">My Images</h1>
			{!filteredData ? (
				<p className="text-center">No images found</p>
			) : (
				<>
					<CountMessage count={filteredData.length} />
					<List items={filteredData} />
				</>
			)}
		</>
	)
}
