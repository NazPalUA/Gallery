import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { uploadSchema } from "./validationSchema" // Assuming the schema is exported from this file

type FormData = z.infer<typeof uploadSchema>

const UploadForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setValue,
		trigger,
	} = useForm<FormData>({
		resolver: zodResolver(uploadSchema),
	})
	const [previewUrl, setPreviewUrl] = useState<string | null>(null)
	const [fileName, setFileName] = useState<string>("")

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

	const onSubmit = (data: FormData) => {
		// TODO: Upload the image to the cloud
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<input
					type="text"
					{...register("title")}
					className="form-control"
					placeholder="Title"
				/>
				{errors.title && <p className="text-danger">{errors.title.message}</p>}
			</div>

			<div className="mb-3" {...getRootProps()}>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Choose file..."
						value={fileName}
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

			{previewUrl && (
				<img
					src={previewUrl}
					alt="Image preview"
					className="img-thumbnail mb-3"
				/>
			)}

			<button
				type="submit"
				className="btn btn-success  float-end"
				disabled={!isValid}
			>
				Submit
			</button>
		</form>
	)
}

export default UploadForm
