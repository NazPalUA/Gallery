import { useFormContext } from "react-hook-form"
import useAppState from "../../../appState"
import { FormData } from "../validationSchema"

const FileInput = () => {
	const { previewUrl } = useAppState()

	const {
		register,
		getValues,
		formState: { errors },
	} = useFormContext<FormData>()

	const file = getValues().file as File

	return (
		<div className="mb-3">
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Choose image..."
					value={file?.name || ""}
					readOnly
				/>
				<input
					{...register("file")}
					type="file"
					accept="image/png, image/jpeg, image/gif"
					className="form-control"
					style={{
						display: "block",
						opacity: 0,
						position: "absolute",
						zIndex: 71,
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
					}}
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
