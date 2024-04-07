import { useMutation } from "@tanstack/react-query"
import { useGetUserQuery } from "../authentication/queries"
import { uploadFileToStorage } from "./endPoints"

export const useUploadFileToStorageMutation = () => {
	type MutationInputs = {
		title: string
		file: File
	}
	const { data: userData } = useGetUserQuery()
	return useMutation({
		mutationFn: ({ title, file }: MutationInputs) => {
			return uploadFileToStorage({ title: title + userData?.uid, file })
		},
	})
}
