import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "./endPoints"

export const useGetUserQuery = () => {
	return useQuery({
		queryKey: ["user"],
		queryFn: getCurrentUser,
		staleTime: Infinity,
	})
}
