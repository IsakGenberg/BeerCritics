import "./navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../../authcontext";
import LogoutButton from "../logoutButton/LogoutButton";
/**
 *
 * @returns Navbar component that displays LoggedInNavbar if the user is logged in, LoggedOutNavBar if the user is logged out.
 */
function MyNavbar() {
  const { isLoggedIn } = useAuth();
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">BeerCritics</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Top Beers</Nav.Link>
          <Nav.Link href="/allbeers">All Beers</Nav.Link>
          {isLoggedIn && <Nav.Link href="/user/myreviews">My Reviews</Nav.Link>}
          {!isLoggedIn && (
            <Nav.Link href="/user/register">Register Account</Nav.Link>
          )}
          {isLoggedIn && <Nav.Link href="/user/account">My Account</Nav.Link>}
          {!isLoggedIn && <Nav.Link href="/user/login">Login</Nav.Link>}
          {isLoggedIn && <LogoutButton />}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
