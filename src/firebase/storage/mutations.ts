import { useMutation } from "@tanstack/react-query"
import { useAuthContext } from "../../context/AuthContext"
import { getUsername } from "../../utils/getUsername"
import { uploadFileToStorage } from "./endPoints"

export const useUploadFileToStorageMutation = () => {
	const { currentUser } = useAuthContext()
	const username = getUsername(currentUser)

	type MutationInputs = {
		title: string
		file: File
	}

	return useMutation({
		mutationFn: (inputs: MutationInputs) => {
			if (!username) {
				throw new Error("User not found")
			}
			return uploadFileToStorage(inputs)
		},
	})
}
