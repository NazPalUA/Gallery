import { useNavigate } from "react-router-dom"
import { useGetUserQuery } from "../../firebase/authentication/queries"
import { useDeleteStockMutation } from "../../firebase/firestore-database/mutations"
import { useDeleteFileFromStorageMutation } from "../../firebase/storage/mutations"
import { StockItem } from "../../types"
import { getDateFromTimestamp } from "../../utils/getDateFromTimestamp"

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

  const { mutate: deleteStock } = useDeleteStockMutation()
  const { mutate: deleteFromStorage } = useDeleteFileFromStorageMutation()
  const { data: currentUser } = useGetUserQuery()

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    deleteStock(stockId, {
      onSuccess: () => {
        deleteFromStorage(storagePath)
      },
    })
  }

  const timestamp = getDateFromTimestamp(createdAt)

  const maxHeightImageStyle: React.CSSProperties = maxHeight
    ? {
        height: "100%",
        maxHeight: "70vh",
        width: "auto",
        objectFit: "contain",
      }
    : {}

  const imageStyle: React.CSSProperties = {
    objectFit: "cover",
    height: "350px",
    ...maxHeightImageStyle,
  }

  return (
    <div className={`mb-5 w-100 card `} onClick={handleClick}>
      {currentUser?.uid === userId &&
        (maxHeight ? (
          <button
            type="button"
            className="btn btn-danger position-absolute bottom-0 end-0 start-0"
            style={{ transform: "translateY(130%)" }}
          >
            Delete
          </button>
        ) : (
          <button
            onClick={handleDelete}
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ position: "absolute", top: "5px", right: "5px" }}
          ></button>
        ))}
      <img
        style={imageStyle}
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
