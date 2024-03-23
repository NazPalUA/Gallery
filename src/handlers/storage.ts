import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase/firebase.config"

const Storage = {
	uploadFile: async (file: File | null | undefined, title: string | null) => {
		if (!file || !title) {
			console.error("File or title is missing!")
			return
		}
		try {
			const fileRef = ref(storage, `images/${title}`)
			return await uploadBytes(fileRef, file).then(snapshot => {
				console.log("File uploaded successfully!")
				return { path: snapshot.metadata.fullPath, name: title }
			})
		} catch (e) {
			console.error("Error uploading file: ", e)
			throw e
		}
	},
	downloadFile: async (path: string) => {
		try {
			const fileRef = ref(storage, path)
			const url = await getDownloadURL(fileRef)
			return url
		} catch (e) {
			console.error("Error downloading file: ", e)
			throw e
		}
	},
}

export default Storage
