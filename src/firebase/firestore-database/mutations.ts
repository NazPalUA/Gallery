import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getUsername } from "../../utils/getUsername"
import { useGetUserQuery } from "../authentication/queries"
import { addStock, deleteStock } from "./endPoints"

type MutationInputs = {
	title: string
	path: string
	storagePath: string
}

export const useCreateStockMutation = () => {
	const queryClient = useQueryClient()

	const { data: currentUser } = useGetUserQuery()

	const username = getUsername(currentUser || null)

	return useMutation({
		mutationFn: (inputs: MutationInputs) => {
			return addStock({
				...inputs,
				username: username,
				userId: currentUser?.uid || "",
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stocks"],
			})
		},
	})
}

export const useDeleteStockMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (stockId: string) => {
			return deleteStock(stockId)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stocks"],
			})
		},
	})
}
