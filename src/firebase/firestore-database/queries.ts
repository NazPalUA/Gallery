import { useQuery } from "@tanstack/react-query"
import { getStocks } from "./endPoints"

export const useGetStocksQuery = (searchText?: string) => {
	return useQuery({
		queryKey: ["stocks", searchText],
		queryFn: async () => {
			const data = await getStocks()
			if (searchText) {
				return data.filter(item =>
					item.title.toLowerCase().includes(searchText.toLowerCase())
				)
			} else {
				return data
			}
		},
	})
}
