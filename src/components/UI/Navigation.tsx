import { Link } from "react-router-dom"

export default function Navigation() {
	return (
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			{/* remove all links except HOME */}
			<li className="nav-item">
				<Link className="nav-link active" aria-current="page" to="/">
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link active" aria-current="page" to="/my-images">
					My Images
				</Link>
			</li>
		</ul>
	)
}
