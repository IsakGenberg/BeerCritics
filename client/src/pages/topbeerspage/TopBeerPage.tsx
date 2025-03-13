import { Container, Row, Col } from "react-bootstrap";
import BeerCard from "../../components/beerCard/BeerCard";
import { getAllBeers } from "../../api";

const beers = await getAllBeers();
const sortedBeers = beers.sort((a, b) => b.rating - a.rating);

function TopBeerPage() {
  return (
    <Container className="homepage">
      <Row>
        {sortedBeers.map((beer) => (
          <Col key={beer.name} xs={12} md={6} lg={3} className="mb-4">
            <BeerCard
              imagePath={beer.imagePath}
              name={beer.name}
              rating={beer.rating}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TopBeerPage;
