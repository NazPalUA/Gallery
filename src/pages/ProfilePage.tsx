import { Container, Image, ListGroup } from "react-bootstrap"
import { useGetUserQuery } from "../firebase/authentication/queries"
import { getUsername } from "../utils/getUsername"

export default function ProfilePage() {
  const { data: currentUser } = useGetUserQuery()

  return (
    <>
      <h1 className="text-center">Profile</h1>
      <hr style={{ width: "50%", margin: "3rem auto" }} />
      <Container className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3">
        <Image
          className="mb-3 mb-md-0 rounded"
          src={currentUser?.photoURL || ""}
          alt={currentUser?.displayName || "User"}
          width="150"
          height="150"
        />
        <ListGroup className="mx-5">
          <ListGroup.Item>
            <span className="fs-5 text-capitalize">name:</span>{" "}
            {currentUser?.displayName}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fs-5 text-capitalize">nickname:</span>{" "}
            {currentUser ? getUsername(currentUser) : "anonymous"}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fs-5 text-capitalize">email:</span>{" "}
            {currentUser?.email}{" "}
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  )
}
