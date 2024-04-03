import { ChangeEvent, FormEvent } from "react"
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
		<form className="d-flex" onSubmit={handleOnSubmit}>
			<input
				onChange={handleOnChange}
				value={searchText || ""}
				className="form-control me-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
			/>
			<button className="btn btn-outline-success" type="submit">
				Search
			</button>
		</form>
	)
}
