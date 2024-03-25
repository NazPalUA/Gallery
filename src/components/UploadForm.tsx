import { useMemo } from "react"
import { useCreateStockMutation } from "../firebase/firestore/mutations"
import Storage from "../handlers/storage"
import useStore from "../store"
import Preview from "./UI/Preview"

const { uploadFile, downloadFile } = Storage

const UploadForm = () => {
	const {
		setIsUploadFormCollapsed,
		isUploadFormCollapsed,
		inputs,
		setInputs,
		setInputsToNull,
	} = useStore()

	const { mutate } = useCreateStockMutation()

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInputs(e)

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		uploadFile(inputs.file, inputs.title).then(async data => {
			if (!data) return
			const url = await downloadFile(data.path)
			mutate({ path: url, title: inputs.title || "" })
			setIsUploadFormCollapsed(false)
			setInputsToNull()
		})
	}

	const isDisabled = useMemo(() => {
		return !!Object.values(inputs).some(input => !input)
	}, [inputs])

	const { path: inputImgSrc } = inputs

	return (
		isUploadFormCollapsed && (
			<>
				<p className="display-6 text-center mb-3">Upload Stock Image</p>
				<div className="mb-5 d-flex align-items-center justify-content-center">
					<Preview path={inputImgSrc} />
					<form
						className="mb-2"
						style={{ textAlign: "left" }}
						onSubmit={handleOnSubmit}
					>
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								name="title"
								placeholder="title"
								aria-describedby="text"
								onChange={handleOnChange}
							/>
						</div>
						<div className="mb-3">
							<input
								type="file"
								className="form-control"
								name="file"
								onChange={handleOnChange}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-success float-end"
							disabled={isDisabled}
						>
							Save changes
						</button>
					</form>
				</div>
			</>
		)
	)
}
export default UploadForm
