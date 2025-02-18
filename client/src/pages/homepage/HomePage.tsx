import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/searchbar/SearchBar";
import React from "react";
import BeerCard from "../components/BeerCard";
import "../styles/homepage.css";
//mock data
const beers = [
  {
    id: 1,
    name: "Heineken",
    imagePath: "heineken.png",
    brewery: "Spendrups Brewery",
    style: "Lager",
    abv: 5.2,
    rating: 4.8,
    numReviewers: 120,
  },
  {
    id: 2,
    name: "Guinness",
    imagePath: "guinness.png",
    brewery: "Midnight Brewery",
    style: "Stout",
    abv: 6.5,
    rating: 4.6,
    numReviewers: 98,
  },
  {
    id: 3,
    name: "Corona",
    imagePath: "corona.png",
    brewery: "Hop Valley",
    style: "IPA",
    abv: 7.0,
    rating: 4.5,
    numReviewers: 150,
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
