import { Timestamp } from "firebase/firestore"

export type StockItem = {
	title: string
	path: string
	createdAt: Timestamp
	username: string
}

export type StockUploadFormInputs = {
	title: string
	file: File
}
