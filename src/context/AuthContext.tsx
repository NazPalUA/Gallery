import { User as AuthUser } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import FirebaseAuth from "../handlers/auth"

const { signIn, signOut, getCurrentUser } = FirebaseAuth

type User = AuthUser | null

type ContextType = {
	currentUser: User
	login: () => Promise<void>
	logout: () => Promise<void>
} | null

const Context = createContext<ContextType>(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User>(null)

	useEffect(() => {
		const user = getCurrentUser()
		if (user) {
			setCurrentUser(user)
		}
	}, [])

	const login = () => signIn().then(setCurrentUser)

	const logout = () => signOut().then(() => setCurrentUser(null))

	return (
		<Context.Provider value={{ login, logout, currentUser }}>
			{children}
		</Context.Provider>
	)
}

const useAuthContext = () => {
	const context = useContext(Context)
	if (context === null) {
		throw new Error(
			"useFirestoreContext must be used within a Context.Provider"
		)
	}
	return context
}

export { AuthProvider, useAuthContext }
