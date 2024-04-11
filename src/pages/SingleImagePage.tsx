import { Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../components/Card/Card"
import { useGetStocksQuery } from "../firebase/firestore-database/queries"

export default function SingleImagePage() {
  const navigate = useNavigate()
  const { stockId } = useParams()

  const { data: stocksData } = useGetStocksQuery()
  const item = stocksData?.find((item) => item.stockId === stockId)

  return (
    <>
      <Button variant="link" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div className="d-flex justify-content-center mb-5">
        {item && <Card {...item} maxHeight={true} />}
      </div>
    </>
  )
}
