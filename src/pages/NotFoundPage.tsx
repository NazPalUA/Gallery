import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
	const navigate = useNavigate()

	return (
		<>
			<button className="btn btn-link mb-5" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="d-flex justify-content-center align-items-center">
				<h1>
					Sorry, the page you're looking for doesn't exist or you don't have
					access to it.
				</h1>
			</div>
		</>
	)
}
