import Navbar from "./Navbar"
import UploadForm from "./UploadForm"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			<div className="container-lg mt-5">
				<UploadForm />
				{children}
			</div>
		</>
	)
}
