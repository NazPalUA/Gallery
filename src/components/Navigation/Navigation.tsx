import { Nav } from "react-bootstrap"
import { useGetUserQuery } from "../../firebase/authentication/queries"
import Navigate from "./SubComponents/Navigate"

export default function Navigation() {
  const { data: userData } = useGetUserQuery()

  return (
    <Nav className="me-auto">
      <Navigate to="/">Home</Navigate>
      {userData && (
        <>
          <Navigate to="/my-images">My Images</Navigate>
          <Navigate to="/profile">Profile</Navigate>
        </>
      )}
    </Nav>
  )
}
