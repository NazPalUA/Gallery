import { Button } from "react-bootstrap"
import useAppState from "../appState"

export default function UploadFormToggleButton() {
  const { setIsUploadFormCollapsed, isUploadFormCollapsed } = useAppState()

  const toggle = (bool: boolean) => setIsUploadFormCollapsed(bool)
  return (
    <>
      <Button
        variant="success"
        className="float-end"
        onClick={() => toggle(!isUploadFormCollapsed)}
      >
        {isUploadFormCollapsed ? "Add" : "+ Close"}
      </Button>
      <div className="clearfix mb-4" />
    </>
  )
}
