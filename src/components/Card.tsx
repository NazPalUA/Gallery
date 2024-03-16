type CardProps = {
	imgSrc: string
}

function Card({ imgSrc }: CardProps) {
	return (
		<div className="col mb-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src={imgSrc} className="card-img-top" alt="image" />
			</div>
		</div>
	)
}
export default Card
