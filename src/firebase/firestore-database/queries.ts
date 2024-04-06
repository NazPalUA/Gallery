import { useQuery } from "@tanstack/react-query"
import { getStocks } from "./endPoints"

export const useGetStocksQuery = (searchText?: string) => {
	return useQuery({
		queryKey: ["stocks", searchText],
		queryFn: async () => {
			const data = await getStocks()
			const sortedData = data.sort(
				(a, b) =>
					b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime()
			)
			if (searchText) {
				return sortedData.filter(item =>
					item.title.toLowerCase().includes(searchText.toLowerCase())
				)
			} else {
				return sortedData
			}
		},
	})
}
