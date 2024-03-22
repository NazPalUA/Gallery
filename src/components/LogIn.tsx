import { useAuthContext } from "../context/AuthContext"

export default function LogIn() {
	const { login, currentUser } = useAuthContext()
	return (
		!currentUser && (
			<button type="button" className="btn btn-warning" onClick={login}>
				Login
			</button>
		)
	)
}
