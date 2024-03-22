import { useFirestoreContext } from "../context/FirestoreContext"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { state, dispatch } = useFirestoreContext()
	const toggle = (bool: boolean) =>
		dispatch({ type: "collapse", payload: { bool } })
	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<button
					className="btn btn-success float-end"
					onClick={() => toggle(!state.isCollapsed)}
				>
					{state.isCollapsed ? "Close" : "+ Add"}
				</button>
				<div className="clearfix mb-4"></div>
				<UploadForm />
				{children}
			</div>
		</>
	)
}
