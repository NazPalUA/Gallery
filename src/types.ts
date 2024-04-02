import { Timestamp } from "firebase/firestore"

export type StockItem = {
	title: string
	path: string
	createdAt: Timestamp
	username: string
	userId: string
}
