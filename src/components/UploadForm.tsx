import { useCreateStockMutation } from "../firebase/firestore/mutations"
import Storage from "../handlers/storage"
import useStore from "../store"
import Form from "./Form/Form"
import Preview from "./UI/Preview"

export default function UploadForm() {
	const { mutate } = useCreateStockMutation()
	const { uploadFile, downloadFile } = Storage
	const { isUploadFormCollapsed, previewUrl } = useStore()

	function handleOnSubmit(file: File, title: string) {
		uploadFile(file, title).then(async data => {
			if (!data) return
			const url = await downloadFile(data.path)
			mutate({ path: url, title: data.name })
		})
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
