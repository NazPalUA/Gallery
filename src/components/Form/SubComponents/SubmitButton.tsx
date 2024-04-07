// import { useFormContext } from "react-hook-form"
// import { FormData } from "../validationSchema"

import useAppState from "../../../appState"

const SubmitButton = () => {
	const { isUploadFormSubmitting } = useAppState()

	return isUploadFormSubmitting ? (
		<button className="btn btn-success float-end" type="button" disabled>
			<span
				className="spinner-border spinner-border-sm"
				aria-hidden="true"
			></span>
			<span role="status"> Loading...</span>
		</button>
	) : (
		<button type="submit" className="btn btn-success  float-end">
			Submit
		</button>
	)
}

export default SubmitButton
