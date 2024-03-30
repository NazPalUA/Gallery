import { useLogoutMutation } from "../firebase/authentication/mutations"
import { useGetUserQuery } from "../firebase/authentication/queries"

export default function LogOut() {
	const { data: currentUser } = useGetUserQuery()

	const { mutate: logout } = useLogoutMutation()
	return (
		!!currentUser && (
			<button type="button" className="btn btn-danger" onClick={() => logout()}>
				Logout
			</button>
		)
	)
}
