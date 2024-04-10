import { Button } from "react-bootstrap"
import { useLoginMutation } from "../firebase/authentication/mutations"
import { useGetUserQuery } from "../firebase/authentication/queries"

export default function LogIn() {
  const { data: currentUser } = useGetUserQuery()

  const { mutate: login } = useLoginMutation()
  return (
    !currentUser && (
      <Button variant="warning" onClick={() => login()}>
        Login
      </Button>
    )
  )
}
