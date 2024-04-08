import Navbar from "./Navbar"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			<div className="container-lg mt-5">{children}</div>
		</>
	)
}
