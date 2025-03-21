import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";
import { useAuth } from "../../authcontext";
/**
 *
 * @returns Footer component with links to home, all beers and account page. Also contains mock contact information.
 */

function Footer() {
  const { isLoggedIn } = useAuth();

  return (
    <Container fluid className="Footer">
      <Row className="Footer-row">
        <Col xs={7}>
          <h1 className="footer-logo">BeerCritics</h1>
          <p className="footer-logo-subtext">We critique beer</p>
        </Col>
        <Col>
          <Nav className="flex-column">
            <h4 className="footer-text">Useful links</h4>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allbeers">All Beers</Nav.Link>
            {isLoggedIn && (
              <Nav.Link href="/user/account">Account page</Nav.Link>
            )}
          </Nav>
        </Col>
        <Col>
          <h4 className="footer-text">Drunk call us!</h4>
          <p className="footer-number">+11235423</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
