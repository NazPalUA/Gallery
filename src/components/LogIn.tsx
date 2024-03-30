import { useLoginMutation } from "../firebase/authentication/mutations"
import { useGetUserQuery } from "../firebase/authentication/queries"

export default function LogIn() {
	const { data: currentUser } = useGetUserQuery()

	const { mutate: login } = useLoginMutation()
	return (
		!currentUser && (
			<button type="button" className="btn btn-warning" onClick={() => login()}>
				Login
			</button>
		)
	)
}
