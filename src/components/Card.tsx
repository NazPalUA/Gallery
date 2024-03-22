import { Timestamp } from "firebase/firestore"
import { useMemo } from "react"
import { Item } from "../types"

type CardProps = Item

function Card({ path, title, createdAt }: CardProps) {
	const timestamp = useMemo(() => {
		if (!createdAt) return
		const date = `${new Date((createdAt as Timestamp).seconds * 1000)}`.split(
			" "
		)
		return `${date[1]} ${date[2]}, ${date[3]}`
	}, [])

	return (
		<div className="col mb-5">
			<div className="card" style={{ width: "18rem" }}>
				<div
					style={{
						height: "220px",
						backgroundImage: `url(${path || ""})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
				<h5 className="text-center mt-1">{title}</h5>
				<div className="d-flex justify-content-between p-2">
					<p>{timestamp}</p>
					<i>@username</i>
				</div>
			</div>
		</div>
	)
}
export default Card
