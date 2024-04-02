import { NavLink } from "react-router-dom"
import { useGetUserQuery } from "../../firebase/authentication/queries"

export default function Navigation() {
	const { data: userData } = useGetUserQuery()

	return (
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			{/* remove all links except HOME */}
			<li className="nav-item">
				<NavLink
					className={({ isActive }) =>
						`${isActive ? "nav-link active" : "nav-link"}`
					}
					aria-current="page"
					to="/"
				>
					Home
				</NavLink>
			</li>
			{userData && (
				<>
					<li className="nav-item">
						<NavLink
							className={({ isActive }) =>
								`${isActive ? "nav-link active" : "nav-link"}`
							}
							aria-current="page"
							to="/my-images"
						>
							My Images
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className={({ isActive }) =>
								`${isActive ? "nav-link active" : "nav-link"}`
							}
							aria-current="page"
							to="/profile"
						>
							Profile
						</NavLink>
					</li>
				</>
			)}
		</ul>
	)
}
