import { User } from "firebase/auth"

export function getUsername(currentUser: User | null) {
	const username = currentUser?.displayName?.split(" ")[0] || "anonymous"
	return username.toLowerCase()
}
