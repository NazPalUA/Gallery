import { Button, CloseButton } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useDeleteStockMutation } from "../../../firebase/firestore-database/mutations"
import { useDeleteFileFromStorageMutation } from "../../../firebase/storage/mutations"

type DeleteButtonProps = {
  type: "cross" | "rectangle"
  stockId: string
  storagePath: string
}

export default function DeleteButton({
  type,
  stockId,
  storagePath,
}: DeleteButtonProps) {
  const navigate = useNavigate()

  const { mutate: deleteStock } = useDeleteStockMutation()
  const { mutate: deleteFromStorage } = useDeleteFileFromStorageMutation()

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    deleteStock(stockId, {
      onSuccess: () => {
        deleteFromStorage(storagePath)
        navigate(-1)
      },
    })
  }

  if (type === "cross")
    return (
      <CloseButton
        onClick={handleButtonClick}
        style={{ position: "absolute", top: "5px", right: "5px" }}
      />
    )
  return (
    <Button
      onClick={handleButtonClick}
      variant="danger"
      className="position-absolute bottom-0 end-0 start-0"
      style={{ transform: "translateY(130%)" }}
    >
      Delete
    </Button>
  )
}
