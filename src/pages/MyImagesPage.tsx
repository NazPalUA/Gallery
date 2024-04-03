import useAppState from "../appState"
import List from "../components/List"
import CountMessage from "../components/UI/CountMessage"
import { useGetUserQuery } from "../firebase/authentication/queries"
import { useGetStocksQuery } from "../firebase/firestore-database/queries"

export default function MyImagesPage() {
	const { searchText } = useAppState()
	const { data } = useGetStocksQuery(searchText || undefined)
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
