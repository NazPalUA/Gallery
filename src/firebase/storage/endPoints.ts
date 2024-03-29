import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase.config"

// QUERIES:

// MUTATIONS:
type Inputs = {
	title: string
	file: File
}
export const uploadFileToStorage = async ({ title, file }: Inputs) => {
	const fileRef = ref(storage, `images/${title}`)
	return uploadBytes(fileRef, file)
		.then(snapshot => getDownloadURL(ref(storage, snapshot.metadata.fullPath)))
		.then(url => ({ url, name: title }))
}
