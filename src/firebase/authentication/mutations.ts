import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginWithGoogle, logout } from "./endPoints"

export const useLoginMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: loginWithGoogle,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["user"],
			})
		},
	})
}

export const useLogoutMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["user"],
			})
		},
	})
}
