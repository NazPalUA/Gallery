import { useDropzone } from "react-dropzone"
import { useFormContext } from "react-hook-form"
import useAppState from "../../../appState"
import { FormData } from "../validationSchema"

const FileInputDesktop = () => {
	const { previewUrl, setPreviewUrl } = useAppState()

	const {
		setValue,
		trigger,
		register,
		watch,
		formState: { errors },
	} = useFormContext<FormData>()

	const file = watch("file") as FileList | undefined

	const { getRootProps, getInputProps, open } = useDropzone({
		// Disable click and keydown behavior
		noClick: true,
		noKeyboard: true,
		accept: {
			"image/jpeg": [],
			"image/png": [],
			"image/gif": [],
		},
		onDrop: (acceptedFiles, fileRejections) => {
			if (fileRejections.length > 0) {
				// Invalid file selected, reset previewUrl
				setPreviewUrl(null)
				setValue("file", null)
				trigger("file")
			} else {
				// Valid file selected
				const acceptedFile = acceptedFiles[0] // Get the first file from the acceptedFiles array

				// Create a new DataTransfer object
				const dataTransfer = new DataTransfer()

				// Add the file to the DataTransfer object
				dataTransfer.items.add(acceptedFile)

				// Get the FileList from the DataTransfer object
				const fileList = dataTransfer.files

				// Set the value of the file field to the FileList
				setValue("file", fileList)

				setPreviewUrl(URL.createObjectURL(acceptedFile))
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
					value={file && file[0] ? file[0].name : ""}
					readOnly
				/>
				<input
					{...getInputProps()}
					{...register("file")}
					className="form-control"
					style={{ display: "none" }}
				/>
				<button
					type="button"
					className="btn btn-outline-secondary"
					onClick={open}
				>
					{previewUrl ? "Change Image" : "Upload Image"}
				</button>
			</div>
			{errors.file && <p className="text-danger">{errors.file.message}</p>}
		</div>
	)
}

export default FileInputDesktop
