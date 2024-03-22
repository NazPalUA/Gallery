import { useAuthContext } from "../context/AuthContext"

export default function LogOut() {
	const { logout, currentUser } = useAuthContext()
	return (
		!!currentUser && (
			<button type="button" className="btn btn-danger" onClick={logout}>
				Logout
			</button>
		)
	)
}
