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
		<div className="mb-5" onClick={handleClick}>
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
					<i>@{username}</i>
				</div>
			</div>
		</div>
	)
}
export default Card
