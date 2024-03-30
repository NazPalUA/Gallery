import { useMutation } from "@tanstack/react-query"
import { uploadFileToStorage } from "./endPoints"

export const useUploadFileToStorageMutation = () => {
	type MutationInputs = {
		title: string
		file: File
	}

	return useMutation({
		mutationFn: (inputs: MutationInputs) => {
			return uploadFileToStorage(inputs)
		},
	})
}
