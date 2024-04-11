import { Timestamp } from "firebase/firestore"
import { getDateFromTimestamp } from "../../../utils/getDateFromTimestamp"

type CardFooterProps = {
  username: string
  timestamp: Timestamp
}

export default function CardFooter({ username, timestamp }: CardFooterProps) {
  const date = getDateFromTimestamp(timestamp)
  return (
    <div className="d-flex justify-content-between p-2">
      <p>{date}</p>
      <i>@{username}</i>
    </div>
  )
}
