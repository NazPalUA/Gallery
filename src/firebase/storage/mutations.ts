import { useMutation } from "@tanstack/react-query"
import { useGetUserQuery } from "../authentication/queries"
import { deleteFileFromStorage, uploadFileToStorage } from "./endPoints"

type MutationInputs = {
	title: string
	file: File
}

export const useUploadFileToStorageMutation = () => {
	const data = new Date().toJSON()
	const { data: userData } = useGetUserQuery()
	return useMutation({
		mutationFn: ({ title, file }: MutationInputs) => {
			return uploadFileToStorage({
				title: `${title}_uid-${userData?.uid}_time-${data}`,
				file,
			})
		},
	})
}

export const useDeleteFileFromStorageMutation = () => {
	return useMutation({
		mutationFn: (path: string) => {
			return deleteFileFromStorage(path)
		},
	})
}
