import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
/**
 * 
 * @returns Navbar component that displays links to home, top beers, all beers, my reviews, my account and a login button.
 */
function LoggedOutNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">BeerCritics</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Top Beers</Nav.Link>
          <Nav.Link href="/allbeers">All Beers</Nav.Link>
          <Nav.Link href="/user/register">Register Account</Nav.Link>
          <Nav.Link href="/user/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default LoggedOutNavbar;
