import { useNavigate } from "react-router-dom"
import { useGetUserQuery } from "../../firebase/authentication/queries"
import { StockItem } from "../../types"
import CardFooter from "./SubComponents/CardFooter"
import CardImage from "./SubComponents/CardImage"
import DeleteButton from "./SubComponents/DeleteButton"

type CardProps = StockItem & { maxHeight?: boolean }

function Card({
  path,
  title,
  createdAt,
  username,
  stockId,
  userId,
  storagePath,
  maxHeight,
}: CardProps) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/images/${stockId}`)
  }

  const { data: currentUser } = useGetUserQuery()

  return (
    <div className={`mb-5 w-100 card `} onClick={handleClick}>
      {currentUser?.uid === userId && (
        <DeleteButton
          type={maxHeight ? "rectangle" : "cross"}
          stockId={stockId}
          storagePath={storagePath}
        />
      )}
      <CardImage path={path} title={title} type={maxHeight ? "page" : "card"} />
      <h5 className="text-center mt-1">{title}</h5>
      <CardFooter timestamp={createdAt} username={username} />
    </div>
  )
}
export default Card
