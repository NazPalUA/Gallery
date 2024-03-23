import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Inputs } from "../../types"
import { addStock } from "./endPoints"

export const useCreateStockMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (inputs: Inputs) => addStock(inputs),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stocks"],
			})
		},
	})
}
