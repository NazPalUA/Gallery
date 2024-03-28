import { useCreateStockMutation } from "../firebase/firestore/mutations"
import Storage from "../handlers/storage"
import useStore from "../store"
import Navbar from "./Navbar"
import UploadForm from "./UploadForm/Form"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { setIsUploadFormCollapsed, isUploadFormCollapsed } = useStore()

	const toggle = (bool: boolean) => setIsUploadFormCollapsed(bool)

	const { mutate } = useCreateStockMutation()
	const { uploadFile, downloadFile } = Storage

	function handleOnSubmit(file: File, title: string) {
		uploadFile(file, title).then(async data => {
			if (!data) return
			const url = await downloadFile(data.path)
			mutate({ path: url, title: data.name })
		})
	}
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
				<UploadForm onSubmit={handleOnSubmit} />
				{children}
			</div>
		</>
	)
}
