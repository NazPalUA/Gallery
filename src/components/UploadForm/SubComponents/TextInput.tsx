import { useFormContext } from "react-hook-form"
import { FormData } from "../validationSchema"

const TextInput = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormData>()

	return (
		<div className="mb-3">
			<input
				type="text"
				{...register("title")}
				className="form-control"
				placeholder="Title"
			/>
			{errors.title && <p className="text-danger">{errors.title.message}</p>}
		</div>
	)
}

export default TextInput
