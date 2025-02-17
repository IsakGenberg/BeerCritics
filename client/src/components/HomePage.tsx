import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
//import Cards när Irre är klar

// Mock beer data (Replace with API data later)
const beers = [
  {
    id: 1,
    name: "Golden Ale",
    image: "https://source.unsplash.com/200x200/?beer",
    rating: 4.8,
    description: "A smooth golden ale with hints of citrus and hops.",
  },
  {
    id: 2,
    name: "Dark Stout",
    image: "https://source.unsplash.com/200x200/?stout",
    rating: 4.6,
    description: "A rich and creamy stout with notes of coffee and chocolate.",
  },
  {
    id: 3,
    name: "Hoppy IPA",
    image: "https://source.unsplash.com/200x200/?ipa",
    rating: 4.5,
    description: "A bold IPA with a strong hoppy flavor and citrusy finish.",
  },
  {
    id: 4,
    name: "Amber Lager",
    image: "https://source.unsplash.com/200x200/?lager",
    rating: 4.4,
    description: "A crisp amber lager with a smooth malt finish.",
  },
];

// Sort beers by rating (highest first)
const sortedBeers = beers.sort((a, b) => b.rating - a.rating);

function HomePage() {
  return (
    <Container className="homepage">
      <h1 className="text-center my-4">Find the best beers here!🍺</h1>

      {/* Search Bar, ingen funktionalitet än */}
      <SearchBar />

      {/* Top Beers */}
      <h2 className="text-center my-4">Top rated beers:</h2>
      <Row>
        {sortedBeers.map((beer) => (
          <Col key={beer.id} xs={12} md={6} lg={4} className="mb-4">
            {/* <BeerCard beer={beer} />{" "} */}
            {/* Using predefined BeerCard component */}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
