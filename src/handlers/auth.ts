import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../lib/firebase.config"

const provider = new GoogleAuthProvider()

const FirebaseAuth = {
	signIn: async () => {
		try {
			return await signInWithPopup(auth, provider).then(response => {
				console.log("User signed in successfully!")
				return response.user
			})
		} catch (e) {
			console.error("Error signing in: ", e)
			throw e
		}
	},
}

export default FirebaseAuth
