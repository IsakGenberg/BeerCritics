import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import LogoutButton from "../logoutButton/LogoutButton";

function LoggedInNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">BeerCritics</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Top Beers</Nav.Link>
          <Nav.Link href="/allbeers">All Beers</Nav.Link>
          <Nav.Link href="/user/myreviews">My Reviews</Nav.Link>
          <Nav.Link href="/user/account">My Account</Nav.Link>
          <LogoutButton />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default LoggedInNavbar;
