import { ChangeEvent, FormEvent } from "react"
import { Button, Form, FormControl } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import useAppState from "../../appState"

export default function SearchForm() {
  const { searchText, setSearchText } = useAppState()
  const navigate = useNavigate()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <Form className="d-flex" onSubmit={handleOnSubmit}>
      <FormControl
        onChange={handleOnChange}
        value={searchText || ""}
        className="me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  )
}
