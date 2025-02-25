import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./navbar.css";

function MyNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">BeerCritics</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Top Beers</Nav.Link>
          <Nav.Link href="#">All Beers</Nav.Link>
          {isLoggedIn && <Nav.Link href="#">My Reviews</Nav.Link>}
          <Nav.Link href={isLoggedIn ? "#" : "/login"}>
            {isLoggedIn ? "Logout" : "My Account"}
          </Nav.Link>
          <Nav.Link href="#">My Reviews</Nav.Link>
          <Nav.Link href="/login">My Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
