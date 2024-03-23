import { FieldValue } from "firebase/firestore"

export type StockItem = {
	title: string | null
	file?: File | null
	path: string | null
	createdAt: FieldValue | null
	username: string | null
}

export type StockUploadInputs = {
	title: string | null
	file?: File | null
	path: string | null
	username: string | null
}

export type State = {
	inputs: StockUploadInputs
	items: StockItem[]
	isCollapsed: boolean
	count: number
}
