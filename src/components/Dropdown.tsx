import { useMemo } from "react"
import { NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useGetUserQuery } from "../firebase/authentication/queries"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
import Avatar from "./UI/Avatar"

export default function Dropdown() {
  const { data: userData } = useGetUserQuery()

  const username = useMemo(() => {
    return userData?.displayName || "Profile"
  }, [userData])

  return (
    <NavDropdown
      title={<Avatar url={userData?.photoURL || null} />}
      id="basic-nav-dropdown"
      align={{ lg: "end" }}
      className="p-2"
    >
      <NavDropdown.Item>
        {userData && (
          <Link className="dropdown-item text-center" to="/profile">
            {username}
          </Link>
        )}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <LogIn />
        <LogOut />
      </NavDropdown.Item>
    </NavDropdown>
  )
}
