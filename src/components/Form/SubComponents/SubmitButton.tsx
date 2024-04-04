// import { useFormContext } from "react-hook-form"
// import { FormData } from "../validationSchema"

const SubmitButton = () => {
	// const {
	// 	formState: { isValid },
	// } = useFormContext<FormData>()

	return (
		<button
			type="submit"
			className="btn btn-success  float-end"
			// disabled={!isValid}
		>
			Submit
		</button>
	)
}

export default SubmitButton
