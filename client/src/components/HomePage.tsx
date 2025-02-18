import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import React from "react";
import BeerCard from "../components/BeerCard";
import "../styles/homepage.css";
//mock data
const beers = [
  {
    id: 1,
    name: "Golden Ale",
    imagePath: "https://source.unsplash.com/200x200/?beer",
    brewery: "Sunrise Brewing",
    style: "Golden Ale",
    abv: 5.2,
    rating: 4.8,
    numReviewers: 120,
  },
  {
    id: 2,
    name: "Dark Stout",
    imagePath: "https://source.unsplash.com/200x200/?stout",
    brewery: "Midnight Brewery",
    style: "Stout",
    abv: 6.5,
    rating: 4.6,
    numReviewers: 98,
  },
  {
    id: 3,
    name: "Hoppy IPA",
    imagePath: "https://source.unsplash.com/200x200/?ipa",
    brewery: "Hop Valley",
    style: "IPA",
    abv: 7.0,
    rating: 4.5,
    numReviewers: 150,
  },
  {
    id: 4,
    name: "Amber Lager",
    imagePath: "https://source.unsplash.com/200x200/?lager",
    brewery: "Classic Brews",
    style: "Lager",
    abv: 5.0,
    rating: 4.4,
    numReviewers: 85,
  },
];

const sortedBeers = beers.sort((a, b) => b.rating - a.rating);

function HomePage() {
  return (
    <Container className="homepage">
      <h1 className="text-beer1">Find the best beers here!🍺</h1>
      <SearchBar />
      <h2 className="text-beer2">Your top rated beers:</h2>
      <Row>
        {sortedBeers.map((beer) => (
          <Col key={beer.id} xs={12} md={6} lg={4} className="mb-4">
            <BeerCard
              imagePath={beer.imagePath}
              name={beer.name}
              brewery={beer.brewery}
              style={beer.style}
              abv={beer.abv}
              rating={beer.rating}
              numReviewers={beer.numReviewers}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
