import { useNavigate } from "react-router-dom"
import { StockItem } from "../../types"
import { getDateFromTimestamp } from "../../utils/getDateFromTimestamp"

type CardProps = StockItem

function Card({ path, title, createdAt, username, stockId }: CardProps) {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/images/${stockId}`)
	}

	const timestamp = getDateFromTimestamp(createdAt)

	return (
		<div className={`mb-5 w-100 card `} onClick={handleClick}>
			<img
				style={{
					objectFit: "cover",
					height: "350px",
				}}
				src={path || ""}
				alt={title}
				className={`img-fluid rounded-top card-image`}
			/>
			<h5 className="text-center mt-1">{title}</h5>
			<div className="d-flex justify-content-between p-2">
				<p>{timestamp}</p>
				<i>@{username}</i>
			</div>
		</div>
	)
}
export default Card
