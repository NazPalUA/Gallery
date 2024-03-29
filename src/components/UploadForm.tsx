import useAppState from "../appState"
import { useCreateStockMutation } from "../firebase/firestore-database/mutations"
import { useUploadFileToStorageMutation } from "../firebase/storage/mutations"
import Form from "./Form/Form"
import Preview from "./UI/Preview"

export default function UploadForm() {
	const { mutate: createStock } = useCreateStockMutation()

	const { isUploadFormCollapsed, previewUrl } = useAppState()

	const { mutate: uploadToStorage } = useUploadFileToStorageMutation()

	function handleOnSubmit(file: File, title: string) {
		uploadToStorage(
			{ file, title },
			{
				onSuccess: async ({ name, url }) => {
					createStock({ path: url, title: name })
				},
			}
		)
	}

	return (
		isUploadFormCollapsed && (
			<>
				<p className="display-6 text-center mb-3">Upload Stock Image</p>
				<div className="mb-5 d-flex align-items-center justify-content-center">
					<Preview path={previewUrl} />
					<Form onSubmit={handleOnSubmit} />
				</div>
			</>
		)
	)
}
