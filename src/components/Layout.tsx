import { State } from "../App"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm"

type LayoutProps = {
	children: React.ReactNode
	state: State
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	toggle: (bool: boolean) => void
}

export default function Layout({
	children,
	state,
	onChange,
	onSubmit,
	toggle,
}: LayoutProps) {
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
				<UploadForm
					inputs={state.inputs}
					isVisible={state.isCollapsed}
					onChange={onChange}
					onSubmit={onSubmit}
				/>
				{children}
			</div>
		</>
	)
}
