import { useDropzone } from "react-dropzone"
import { useFormContext } from "react-hook-form"
import useAppState from "../../../appState"
import { FormData } from "../validationSchema"

const FileInput = () => {
	const { previewUrl, setPreviewUrl, fileName, setFileName } = useAppState()

	const {
		setValue,
		trigger,
		register,
		formState: { errors },
	} = useFormContext<FormData>()

	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/jpeg": [],
			"image/png": [],
			"image/gif": [],
		},
		onDrop: (acceptedFiles, fileRejections) => {
			if (fileRejections.length > 0) {
				// Invalid file selected, reset previewUrl
				setPreviewUrl(null)
				setFileName("")
				setValue("file", null)
				trigger("file")
			} else {
				// Valid file selected
				setValue("file", acceptedFiles[0])
				setPreviewUrl(URL.createObjectURL(acceptedFiles[0]))
				setFileName(acceptedFiles[0].name)
				trigger("file")
			}
		},
	})

	return (
		<div className="mb-3" {...getRootProps()}>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Choose image..."
					value={fileName || ""}
					readOnly
				/>
				<input
					{...getInputProps()}
					{...register("file")}
					className="form-control"
					style={{ display: "none" }}
				/>
				<button type="button" className="btn btn-outline-secondary">
					{previewUrl ? "Change Image" : "Upload Image"}
				</button>
			</div>
			{errors.file && <p className="text-danger">{errors.file.message}</p>}
		</div>
	)
}

export default FileInput
