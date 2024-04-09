import { Button } from "react-bootstrap"
import useAppState from "../../../appState"

const SubmitButton = () => {
  const { isUploadFormSubmitting } = useAppState()

  return (
    <Button
      variant="success"
      className="float-end"
      disabled={isUploadFormSubmitting}
      type="submit"
    >
      {isUploadFormSubmitting ? "Loading…" : "Submit"}
    </Button>
  )
}

export default SubmitButton
