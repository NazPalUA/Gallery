import {
	Timestamp,
	collection,
	doc,
	getDocs,
	serverTimestamp,
	setDoc,
} from "firebase/firestore"
import { nanoid } from "nanoid"
import { StockItem, StockUploadInputs } from "../../types"
import { db } from "../firebase.config"

const stocksCollection = collection(db, "stocks")

const stockRef = (id: string) => doc(db, `stocks/${id}`)

// QUERIES:
export const getStocks = async () => {
	return getDocs(stocksCollection).then(stocksSnapshot => {
		return stocksSnapshot.docs.map(doc => doc.data()) as StockItem[]
	})
}

// MUTATIONS:
export const addStock = async ({
	title,
	path,
	username,
}: StockUploadInputs) => {
	const stockId = nanoid()
	const newStock = {
		title: title,
		path: path,
		createdAt: serverTimestamp(),
		username: username,
	}
	return setDoc(stockRef(stockId), newStock).then(() => ({
		...newStock,
		createdAt: Timestamp.fromDate(new Date()),
	}))
}
