import { Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useGetUserQuery } from "../firebase/authentication/queries"

export default function Navigation() {
  const { data: userData } = useGetUserQuery()

  return (
    <Nav className="me-auto">
      <Navbar.Text>
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          to="/"
        >
          Home
        </NavLink>
      </Navbar.Text>
      {userData && (
        <>
          <Navbar.Text>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "normal",
              })}
              to="/my-images"
            >
              My Images
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "normal",
              })}
              to="/profile"
            >
              Profile
            </NavLink>
          </Navbar.Text>
        </>
      )}
    </Nav>
  )
}
