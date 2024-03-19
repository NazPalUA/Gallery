import { Item } from "../App"

type CardProps = Item

function Card({ path, title }: CardProps) {
	return (
		<div className="col mb-5">
			<div className="card" style={{ width: "18rem" }}>
				{path ? (
					<img src={path} className="card-img-top" alt={title || "image"} />
				) : (
					<div className="card-body">
						<p className="card-text">No Image</p>
					</div>
				)}
			</div>
		</div>
	)
}
export default Card
