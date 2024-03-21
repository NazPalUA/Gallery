import { FieldValue } from "firebase/firestore"

export type Item = {
	title: string | null
	file?: File | null
	path: string | null
	createdAt: FieldValue | null
}

export type Inputs = {
	title: string | null
	file?: File | null
	path: string | null
}

export type State = {
	inputs: Inputs
	items: Item[]
	isCollapsed: boolean
	count: number
}
