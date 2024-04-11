import Container from "react-bootstrap/Container"
import BtNavbar from "react-bootstrap/Navbar"
import Dropdown from "./Dropdown"
import Navigation from "./Navigation"
import SearchForm from "./SearchForm"

function Navbar() {
  return (
    <BtNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BtNavbar.Brand>⚡ Firestock</BtNavbar.Brand>
        <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BtNavbar.Collapse id="basic-navbar-nav">
          <Navigation />
          <SearchForm />
          <Dropdown />
        </BtNavbar.Collapse>
      </Container>
    </BtNavbar>
  )
}
export default Navbar
