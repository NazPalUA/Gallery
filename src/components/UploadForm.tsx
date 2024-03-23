import { useMemo } from "react"
import { useAuthContext } from "../context/AuthContext"
import { useFirestoreContext } from "../context/FirestoreContext"
import Firestore from "../handlers/firestore"
import Storage from "../handlers/storage"
import { getUsername } from "../utils/getUsername"

const { writeDoc } = Firestore
const { uploadFile, downloadFile } = Storage

const Preview = () => {
	const { path } = useFirestoreContext().state.inputs

	return (
		path && (
			<div
				className="rounded p-1 m-5"
				style={{
					width: "30%",
					height: "300px",
					backgroundImage: `url(${path}`,
					backgroundSize: "cover",
				}}
			></div>
		)
	)
}

const UploadForm = () => {
	const { state, dispatch } = useFirestoreContext()
	const { currentUser } = useAuthContext()

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch({ type: "setInputs", payload: { value: e } })

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		uploadFile(state.inputs.file, state.inputs.title).then(async data => {
			if (!data) return
			const url = await downloadFile(data.path)
			const newDoc = await writeDoc(
				{ ...state.inputs, path: url, username: getUsername(currentUser) },
				"stocks"
			)
			console.log(newDoc)

			dispatch({
				type: "setItem",
				payload: { item: { ...newDoc, file: null } },
			})
			dispatch({ type: "collapse", payload: { bool: false } })
		})
	}

	const isDisabled = useMemo(() => {
		return !!Object.values(state.inputs).some(input => !input)
	}, [state.inputs])

	return (
		state.isCollapsed && (
			<>
				<p className="display-6 text-center mb-3">Upload Stock Image</p>
				<div className="mb-5 d-flex align-items-center justify-content-center">
					<Preview />
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
