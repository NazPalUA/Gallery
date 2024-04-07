import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	serverTimestamp,
	setDoc,
} from "firebase/firestore"
import { nanoid } from "nanoid"
import { StockItem } from "../../types"
import { db } from "../firebase.config"

const stocksCollection = collection(db, "stocks")

const stockRef = (id: string) => doc(db, `stocks/${id}`)

// QUERIES:
export const getStocks = async () => {
	return getDocs(stocksCollection).then(stocksSnapshot => {
		return stocksSnapshot.docs.map(doc => ({
			...doc.data(),
			stockId: doc.id,
		})) as StockItem[]
	})
}
// MUTATIONS:
type AddStockInputs = {
	title: string
	path: string
	username: string
	userId: string
	storagePath: string
}
export const addStock = async ({
	title,
	path,
	username,
	userId,
	storagePath,
}: AddStockInputs) => {
	const stockId = nanoid()
	const newStock = {
		title,
		path,
		createdAt: serverTimestamp(),
		username,
		userId,
		storagePath,
	}
	return setDoc(stockRef(stockId), newStock)
}

export const deleteStock = async (stockId: string) => {
	return deleteDoc(stockRef(stockId))
}
