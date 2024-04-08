import { useGetUserQuery } from "../firebase/authentication/queries"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm"
import UploadFormToggleButton from "./UploadFormToggleButton"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { data: user } = useGetUserQuery()

	return (
		<>
			<Navbar />
			<div className="container-lg mt-5">
				{user && (
					<>
						<UploadFormToggleButton />
						<div className="clearfix mb-4" />
						<UploadForm />
					</>
				)}
				{children}
			</div>
		</>
	)
}
