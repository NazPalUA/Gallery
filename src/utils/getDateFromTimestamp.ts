import { FieldValue, Timestamp } from "firebase/firestore"

export function getDateFromTimestamp(createdAt: Timestamp | FieldValue | null) {
	if (!createdAt) return ""
	const date = `${new Date((createdAt as Timestamp).seconds * 1000)}`.split(" ")
	return `${date[1]} ${date[2]}, ${date[3]}`
}
