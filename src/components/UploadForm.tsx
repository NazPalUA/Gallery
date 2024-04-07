import useAppState from "../appState"
import { useCreateStockMutation } from "../firebase/firestore-database/mutations"
import { useUploadFileToStorageMutation } from "../firebase/storage/mutations"
import Form from "./Form/Form"
import Preview from "./UI/Preview"

export default function UploadForm() {
	const { mutate: createStock } = useCreateStockMutation()

	const {
		isUploadFormCollapsed,
		previewUrl,
		setIsUploadFormCollapsed,
		setIsUploadFormSubmitting,
		setPreviewUrl,
	} = useAppState()

	const { mutate: uploadToStorage } = useUploadFileToStorageMutation()

	async function handleOnSubmit(file: File, title: string) {
		setIsUploadFormSubmitting(true)
		uploadToStorage(
			{ file, title },
			{
				onSuccess: async ({ url, storagePath }) => {
					createStock({ path: url, title, storagePath })
				},
				onSettled: () => {
					setIsUploadFormCollapsed(true)
					setIsUploadFormSubmitting(false)
					setPreviewUrl(null)
				},
			}
		)
	}

	return (
		!isUploadFormCollapsed && (
			<>
				<p className="display-6 text-center mb-3">Upload Stock Image</p>
				<div className="mb-5 d-flex flex-column flex-sm-row align-items-center justify-content-center">
					<Preview path={previewUrl} />
					<Form onSubmit={handleOnSubmit} />
				</div>
			</>
		)
	)
}
