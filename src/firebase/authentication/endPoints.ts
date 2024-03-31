import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	User,
} from "firebase/auth"
import { auth } from "../firebase.config"

// QUERIES:
export const getCurrentUser = (): Promise<User | null> =>
	new Promise(resolve => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			resolve(user)
			unsubscribe()
		})
	})

// MUTATIONS:
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: "select_account",
})

export const loginWithGoogle = async (): Promise<User | null> => {
	const result = await signInWithPopup(auth, provider)
	return result.user
}

export const logout = async (): Promise<void> => {
	await signOut(auth)
}
