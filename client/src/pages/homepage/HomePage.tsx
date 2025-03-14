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
      <div className="margin-top"></div>
      <div className="start">
        <h1 className="text-beer1">Find the best beers here</h1>
        <SearchBar />
      </div>

      <div className="trending-beers-section">
        <h1 className="trending-beer-text">Trending Beers</h1>
        <div className="line"></div>
        <div className="carousel">
          <Row>
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

      <div className="about-section">
        <h1 className="about-title">About</h1>
        <div className="line"></div>
        <p className="about-text">
          BeerCritics is a cutting-edge platform dedicated to beer enthusiasts
          worldwide. Founded in 2024 by a team of passionate brewers and tech
          innovators, our mission is to create a vibrant community where beer
          lovers can discover, review, and discuss their favorite brews. Our
          platform allows users to explore a vast selection of beers, rate and
          critique them, and connect with like-minded individuals. With an
          intuitive interface, expert recommendations, and user-driven rankings,
          BeerCritics Inc. helps both casual drinkers and connoisseurs find the
          best beers. At BeerCritics, we believe that every sip tells a
          story—join us in shaping the ultimate beer experience!
        </p>
      </div>
    </Container>
  );
}

export default HomePage;
