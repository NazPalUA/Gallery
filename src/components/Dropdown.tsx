import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useGetUserQuery } from "../firebase/authentication/queries"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
import Avatar from "./UI/Avatar"

export default function Dropdown() {
	const { data: currentUser } = useGetUserQuery()

	const username = useMemo(() => {
		return currentUser?.displayName || "Profile"
	}, [currentUser])

	return (
		<ul className="navbar-nav mb-2 mb-lg-0">
			{" "}
			{/* remove ms-auto */}
			<li className="nav-item dropdown">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<Avatar url={currentUser?.photoURL || null} />
				</a>
				<ul
					className="dropdown-menu"
					aria-labelledby="navbarDropdown"
					style={{ right: "0", left: "auto" }}
				>
					<li>
						{currentUser && (
							<Link className="dropdown-item text-center" to="/profile">
								{username}
							</Link>
						)}
					</li>
					<li>
						<hr className="dropdown divider" />
					</li>
					<li className="d-flex justify-content-center">
						<LogIn />
						<LogOut />
					</li>
				</ul>
			</li>
		</ul>
	)
}
