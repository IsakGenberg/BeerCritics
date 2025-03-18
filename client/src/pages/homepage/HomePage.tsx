import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/searchbar/SearchBar";
import BeerCard from "../../components/beerCard/BeerCard";
import "./homepage.css";
import { getAllBeers } from "../../api";
import AboutSection from "../../components/aboutSection/AboutSection";

const beers = await getAllBeers();

// Sort the beers by rating in a descending order
const sortedBeers = beers
  .sort((a, b) => b.rating - a.rating)
  .slice(0, Math.min(beers.length, 8));
/**
 *
 * @returns HomePage component which displays the search bar and the top rated beers in the database
 */
function HomePage() {
  return (
    <Container className="homepage">
      <div className="margin-top"></div>
      <div className="start">
        <h1 className="text-beer1">Find the best beers here</h1>
        <SearchBar />
      </div>

      <div className="trending-beers-section">
        <h1 className="trending-beer-text">Trending Beers</h1>
        <div className="line"></div>
        <div className="carousel">
          <Row className="beercard-row">
            {sortedBeers.map((beer) => (
              <Col key={beer.name} xs={12} md={6} lg={3} className="mb-4">
                <BeerCard
                  imagePath={beer.imagePath}
                  style={beer.style}
                  name={beer.name}
                  rating={beer.rating}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Row>
        <AboutSection />
      </Row>
    </Container>
  );
}

export default HomePage;
