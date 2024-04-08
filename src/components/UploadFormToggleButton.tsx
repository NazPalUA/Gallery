import useAppState from "../appState"

export default function UploadFormToggleButton() {
	const { setIsUploadFormCollapsed, isUploadFormCollapsed } = useAppState()

	const toggle = (bool: boolean) => setIsUploadFormCollapsed(bool)
	return (
		<button
			className="btn btn-success float-end"
			onClick={() => toggle(!isUploadFormCollapsed)}
		>
			{isUploadFormCollapsed ? "Add" : "+ Close"}
		</button>
	)
}
