import { User as AuthUser } from "firebase/auth"
import { createContext, useContext, useState } from "react"
import FirebaseAuth from "../handlers/auth"

const { signIn, signOut } = FirebaseAuth

type User = AuthUser | null

type ContextType = {
	currentUser: User
	authenticate: (user: User) => void
	login: () => Promise<void>
	logout: () => Promise<void>
} | null

const Context = createContext<ContextType>(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User>(null)

	const login = () => signIn().then(setCurrentUser)
	const logout = () => signOut().then(() => setCurrentUser(null))
	const authenticate = (user: User) => setCurrentUser(user)

	return (
		<Context.Provider value={{ login, logout, authenticate, currentUser }}>
			{children}
		</Context.Provider>
	)
}

const useAuthContext = () => {
	const context = useContext(Context)
	if (context === null) {
		throw new Error("useAuthContext must be used within a Context.Provider")
	}
	return context
}

export { AuthProvider, useAuthContext }
