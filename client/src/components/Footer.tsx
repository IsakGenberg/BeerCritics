import { Container, Row, Col, Nav } from "react-bootstrap";
import '../styles/Footer.css';

function Footer() {
  return (
    <Container>
      <Row className="Footer">
        <Col>
          <h1>BeerCritics</h1>
          <p>We critique beer</p>
        </Col>
        <Col>
          <Nav className="flex-column">
            <h4>Useful links</h4>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>All Beers</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <h4>Drunk call us!</h4>
          <p>+11235423</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
