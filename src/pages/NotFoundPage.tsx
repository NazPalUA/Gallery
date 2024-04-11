import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <Button variant="link" className="mb-5" onClick={() => navigate(-1)}>
        Back
      </Button>

      <h1>
        Sorry, the page you're looking for doesn't exist or you don't have
        access to it.
      </h1>
    </>
  )
}
