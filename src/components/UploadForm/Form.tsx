import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import useStore from "../../store"
import Preview from "../UI/Preview"

import FileInput from "./SubComponents/FileInput"
import SubmitButton from "./SubComponents/SubmitButton"
import TextInput from "./SubComponents/TextInput"
import { FormData, uploadSchema } from "./validationSchema"

type UploadFormProps = {
	onSubmit: (file: File, title: string) => Promise<void> | void
}

const UploadForm = ({ onSubmit }: UploadFormProps) => {
	const methods = useForm<FormData>({
		resolver: zodResolver(uploadSchema),
		// defaultValues: defaultValues,
	})

	const { setPreviewUrl, setFileName, isUploadFormCollapsed, previewUrl } =
		useStore()

	const { handleSubmit, reset } = methods

	const onSubmitForm = async (data: FormData) => {
		if (!data.file || !(data.file instanceof File)) return
		else {
			await onSubmit(data.file, data.title)
			reset()
			setPreviewUrl(null)
			setFileName(null)
		}
	}

	return (
		isUploadFormCollapsed && (
			<>
				<p className="display-6 text-center mb-3">Upload Stock Image</p>
				<div className="mb-5 d-flex align-items-center justify-content-center">
					<Preview path={previewUrl} />
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmitForm)}>
							<TextInput />
							<FileInput />
							<SubmitButton />
						</form>
					</FormProvider>
				</div>
			</>
		)
	)
}

export default UploadForm
