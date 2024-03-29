import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import useStore from "../../store"

import FileInput from "./SubComponents/FileInput"
import SubmitButton from "./SubComponents/SubmitButton"
import TextInput from "./SubComponents/TextInput"
import { FormData, uploadSchema } from "./validationSchema"

type UploadFormProps = {
	onSubmit: (file: File, title: string) => Promise<void> | void
}

const Form = ({ onSubmit }: UploadFormProps) => {
	const methods = useForm<FormData>({
		resolver: zodResolver(uploadSchema),
	})

	const { setPreviewUrl, setFileName } = useStore()

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
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmitForm)}>
				<TextInput />
				<FileInput />
				<SubmitButton />
			</form>
		</FormProvider>
	)
}

export default Form
