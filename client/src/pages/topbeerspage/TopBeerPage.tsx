import { Container, Row, Col } from "react-bootstrap";
import BeerCard from "../../components/beerCard/BeerCard";
import { getAllBeers } from "../../api";

const beers = await getAllBeers();
const sortedBeers = beers.sort((a, b) => b.rating - a.rating);

/**
 * TopBeerPage component renders a list of top-rated beers in a responsive grid layout.
 *
 * This component uses Bootstrap's Container, Row, and Col components to create a responsive
 * layout that adjusts based on the screen size. Each beer is displayed using the BeerCard component.
 *
 * @component
 * @example
 * // Example usage:
 * // Assuming `sortedBeers` is an array of beer objects with `name`, `imagePath`, and `rating` properties.
 * <TopBeerPage />
 *
 * @returns {JSX.Element} A JSX element representing the top beers page.
 */
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
