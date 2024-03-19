type CardProps = {
	imgSrc: string | null
}

function Card({ imgSrc }: CardProps) {
	return (
		<div className="col mb-5">
			<div className="card" style={{ width: "18rem" }}>
				{imgSrc ? (
					<img src={imgSrc} className="card-img-top" alt="image" />
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
