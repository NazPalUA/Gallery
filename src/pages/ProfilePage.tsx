import { useGetUserQuery } from "../firebase/authentication/queries"
import { getUsername } from "../utils/getUsername"

export default function ProfilePage() {
  const { data: currentUser } = useGetUserQuery()

  return (
    <>
      <h1 className="text-center">Profile</h1>
      <hr style={{ width: "50%", margin: "3rem auto" }} />
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3">
        <img
          className=" mb-3 mb-md-0"
          style={{ borderRadius: "4px " }}
          src={currentUser?.photoURL || ""}
          alt={currentUser?.displayName || "User"}
          width="150"
          height="150"
        />
        <ul className="list-group mx-5">
          <li className="list-group-item">
            <span className="fs-5 text-capitalize">name:</span>{" "}
            {currentUser?.displayName}
          </li>
          <li className="list-group-item">
            <span className="fs-5 text-capitalize">nickname:</span>{" "}
            {currentUser ? getUsername(currentUser) : "anonymous"}
          </li>
          <li className="list-group-item">
            <span className="fs-5 text-capitalize">email:</span>{" "}
            {currentUser?.email}{" "}
          </li>
        </ul>
      </div>
    </>
  )
}
