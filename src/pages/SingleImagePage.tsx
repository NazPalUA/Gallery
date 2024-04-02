import { useNavigate, useParams } from "react-router-dom"
import Card from "../components/UI/Card"
import { useGetStocksQuery } from "../firebase/firestore-database/queries"

export default function SingleImagePage() {
	const navigate = useNavigate()
	const { stockId } = useParams()

	const { data: stocksData } = useGetStocksQuery()
	const item = stocksData?.find(item => item.stockId === stockId)

	return (
		<>
			<button className="btn btn-link" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="d-flex justify-content-center mb-5">
				{item && <Card {...item} />}
			</div>
		</>
	)
}
