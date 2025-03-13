import { Navbar, Nav, Container, Col } from "react-bootstrap";
import "./navbar.css";
import LogoutButton from "../logoutButton/LogoutButton";

/**
 *
 * @returns Navbar component that displays links to home, top beers, all beers, my reviews, my account and a logout button.
 */
function LoggedInNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Col xs={3}>
          {" "}
          {/* Same width as footer logo */}
          <Navbar.Brand href="/">BeerCritics</Navbar.Brand>
        </Col>
        <Col>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Top Beers</Nav.Link>
            <Nav.Link href="/allbeers">All Beers</Nav.Link>
            <Nav.Link href="/user/myreviews">My Reviews</Nav.Link>
            <Nav.Link href="/user/account">My Account</Nav.Link>
            <LogoutButton />
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
}

export default LoggedInNavbar;
