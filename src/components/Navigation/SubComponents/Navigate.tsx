import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

type NavigateProps = {
  to: string
  children: React.ReactNode
}

export default function Navigate({ to, children }: NavigateProps) {
  return (
    <Navbar.Text>
      <NavLink
        className="nav-link"
        style={({ isActive }) => ({
          fontWeight: isActive ? "600" : "normal",
        })}
        to={to}
      >
        {children}
      </NavLink>
    </Navbar.Text>
  )
}
