import { useMutation, useQueryClient } from "@tanstack/react-query"
import { StockUploadInputs } from "../../types"
import { addStock } from "./endPoints"

export const useCreateStockMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (inputs: StockUploadInputs) => addStock(inputs),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stocks"],
			})
		},
	})
}
