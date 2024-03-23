import {
	Timestamp,
	collection,
	doc,
	getDocs,
	serverTimestamp,
	setDoc,
} from "firebase/firestore"
import { db } from "../lib/firebase.config"
import { Inputs, Item } from "../types"

const Firestore = {
	readDocs: async (collection_name: string) => {
		const docs: Item[] = []
		const ref = collection(db, collection_name)
		try {
			const snapshot = await getDocs(ref)
			snapshot.forEach(doc => {
				const data = doc.data() as Item
				docs.push(data)
			})
			return docs
		} catch (e) {
			console.error("Error reading documents: ", e)
			throw e
		}
	},

	writeDoc: async (inputs: Inputs, collection_name: string): Promise<Item> => {
		const randomIndex = Math.floor(Math.random() * 1000000)
		try {
			const docRef = doc(db, collection_name, `${randomIndex}`)
			const newDoc = {
				title: inputs.title,
				path: inputs.path,
				createdAt: serverTimestamp(),
				username: inputs.username,
			}
			await setDoc(docRef, newDoc)
			console.log("Document successfully written!")
			return { ...newDoc, createdAt: Timestamp.fromDate(new Date()) }
		} catch (e) {
			console.error("Error adding document: ", e)
			throw e
		}
	},
}

export default Firestore
