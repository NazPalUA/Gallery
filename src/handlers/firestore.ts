import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../lib/firebase.config"

type Inputs = {
	title: string | null
	path: string | null
}

const Firestore = {
	writeDoc: async (
		inputs: Inputs,
		collection_name: string
	): Promise<string> => {
		const randomIndex = Math.floor(Math.random() * 1000000)
		try {
			const docRef = doc(db, collection_name, `${randomIndex}`)
			await setDoc(docRef, {
				title: inputs.title,
				path: inputs.path,
				createdAt: serverTimestamp(),
			})
			return "Document successfully written!"
		} catch (e) {
			console.error("Error adding document: ", e)
			throw e
		}
	},
}

export default Firestore
