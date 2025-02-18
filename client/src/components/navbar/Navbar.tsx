import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">BeerCritics</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Top Beers</Nav.Link>
          <Nav.Link href="#">All Beers</Nav.Link>
          <Nav.Link href="#">My Reviews</Nav.Link>
          <Nav.Link href="#">My Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
