import { FieldValue } from "firebase/firestore"

export type StockItem = {
	title: string | null
	file?: File | null
	path: string | null
	createdAt: FieldValue | null
	username: string | null
}

export type Inputs = {
	title: string | null
	file?: File | null
	path: string | null
	username: string | null
}

export type State = {
	inputs: Inputs
	items: StockItem[]
	isCollapsed: boolean
	count: number
}
