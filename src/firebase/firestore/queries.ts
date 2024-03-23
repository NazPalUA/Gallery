import { useQuery } from "@tanstack/react-query"
import { getStocks } from "./endPoints"

export const useGetStocksQuery = () => {
	return useQuery({
		queryKey: ["stocks"],
		queryFn: getStocks,
	})
}
