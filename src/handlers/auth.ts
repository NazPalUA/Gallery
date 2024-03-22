import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
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
	signOut: async () => {
		try {
			await signOut(auth)
			console.log("User signed out successfully!")
		} catch (e) {
			console.error("Error signing out: ", e)
			throw e
		}
	},
	getCurrentUser: () => {
		return auth.currentUser
	},
}

export default FirebaseAuth
