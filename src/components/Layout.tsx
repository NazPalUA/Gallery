import useAppState from "../appState"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { setIsUploadFormCollapsed, isUploadFormCollapsed } = useAppState()

	const toggle = (bool: boolean) => setIsUploadFormCollapsed(bool)

	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<button
					className="btn btn-success float-end"
					onClick={() => toggle(!isUploadFormCollapsed)}
				>
					{isUploadFormCollapsed ? "Close" : "+ Add"}
				</button>
				<div className="clearfix mb-4"></div>
				<UploadForm />
				{children}
			</div>
		</>
	)
}
