import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuthContext } from "../../context/AuthContext"
import { getUsername } from "../../utils/getUsername"
import { addStock } from "./endPoints"

type MutationInputs = {
	title: string
	path: string
}

export const useCreateStockMutation = () => {
	const queryClient = useQueryClient()
	const { currentUser } = useAuthContext()
	const username = getUsername(currentUser)

	return useMutation({
		mutationFn: (inputs: MutationInputs) => {
			if (!username) {
				throw new Error("User not found")
			}
			return addStock({ ...inputs, username: username })
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stocks"],
			})
		},
	})
}
