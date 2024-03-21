import {
	FieldValue,
	collection,
	doc,
	getDocs,
	serverTimestamp,
	setDoc,
} from "firebase/firestore"
import { db } from "../lib/firebase.config"

type Inputs = {
	title: string | null
	path: string | null
}

type Doc = {
	title: string | null
	path: string | null
	createdAt: FieldValue | null
}

const Firestore = {
	readDocs: async (collection_name: string) => {
		const docs: Doc[] = []
		const ref = collection(db, collection_name)
		try {
			const snapshot = await getDocs(ref)
			snapshot.forEach(doc => {
				const data = doc.data() as Doc
				docs.push(data)
			})
			return docs
		} catch (e) {
			console.error("Error reading documents: ", e)
			throw e
		}
	},

	writeDoc: async (inputs: Inputs, collection_name: string): Promise<Doc> => {
		const randomIndex = Math.floor(Math.random() * 1000000)
		try {
			const docRef = doc(db, collection_name, `${randomIndex}`)
			const newDoc = {
				title: inputs.title,
				path: inputs.path,
				createdAt: serverTimestamp(),
			}
			await setDoc(docRef, newDoc)
			console.log("Document successfully written!")
			return newDoc
		} catch (e) {
			console.error("Error adding document: ", e)
			throw e
		}
	},
}

export default Firestore
