import { Button } from "react-bootstrap"
import {
  useLoginMutation,
  useLogoutMutation,
} from "../firebase/authentication/mutations"
import { useGetUserQuery } from "../firebase/authentication/queries"

export default function AuthBtn() {
  const { data: currentUser } = useGetUserQuery()

  const { mutate: login } = useLoginMutation()
  const { mutate: logout } = useLogoutMutation()

  return currentUser ? (
    <Button variant="danger" onClick={() => logout()}>
      Logout
    </Button>
  ) : (
    <Button variant="warning" onClick={() => login()}>
      Login
    </Button>
  )
}
