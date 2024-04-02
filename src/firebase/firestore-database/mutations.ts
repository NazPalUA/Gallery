import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getUsername } from "../../utils/getUsername"
import { useGetUserQuery } from "../authentication/queries"
import { addStock } from "./endPoints"

type MutationInputs = {
	title: string
	path: string
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
