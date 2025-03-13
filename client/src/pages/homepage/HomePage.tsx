import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/searchbar/SearchBar";
import BeerCard from "../../components/beerCard/BeerCard";
import "./homepage.css";
import { getAllBeers } from "../../api";

const beers = await getAllBeers();

// Sort the beers by rating in a descending order
const sortedBeers = beers.sort((a, b) => b.rating - a.rating);

/**
 * 
 * @returns HomePage component which displays the search bar and the top rated beers in the database
 */
function HomePage() {
  return (
    <Container className="homepage">
      <h1 className="text-beer1">Find the best beers here!🍺</h1>
      <SearchBar />
      <h2 className="text-beer2">Your top rated beers:</h2>
      <Row>
        {sortedBeers.map((beer) => (
          <Col key={beer.name} xs={12} md={6} lg={3} className="mb-4">
            <BeerCard
              imagePath={beer.imagePath}
              name={beer.name}
              brewery={beer.brewery}
              style={beer.style}
              abv={beer.abv}
              rating={beer.rating}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
