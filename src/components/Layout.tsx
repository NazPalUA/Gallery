import useAppState from "../appState"
import { useGetUserQuery } from "../firebase/authentication/queries"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { setIsUploadFormCollapsed, isUploadFormCollapsed } = useAppState()

	const toggle = (bool: boolean) => setIsUploadFormCollapsed(bool)

	const { data: user } = useGetUserQuery()

	return (
		<>
			<Navbar />
			<div className="container-lg mt-5">
				{user && (
					<>
						<button
							className="btn btn-success float-end"
							onClick={() => toggle(!isUploadFormCollapsed)}
						>
							{isUploadFormCollapsed ? "Add" : "+ Close"}
						</button>
						<div className="clearfix mb-4" />
						<UploadForm />
					</>
				)}
				{children}
			</div>
		</>
	)
}
