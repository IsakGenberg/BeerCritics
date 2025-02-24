import React, { useEffect, useState } from "react";
import { Beer } from "../../interfaces/beer";
import BeerCard from "../../components/beerCard/BeerCard";
import "./allbeerspage.css";
import { Col, Row } from "react-bootstrap";
import { getAllBeers } from "../../api";



function AllBeersPage() {
  const [beers, setBeers] = useState<Beer[] | null>(null);

  async function getBeerList() {
    const bs = await getAllBeers();
    setBeers(bs);
  }

  useEffect(() => {
    getBeerList();
  }, []);

  if (!beers) {
    return <div>Loading beers<div className="loader"></div></div>;
  }

  const beersList = beers.map((beer) => (
      <BeerCard
        imagePath={beer.imagePath}
        name={beer.name}
        brewery={beer.brewery}
        style={beer.style}
        abv={beer.abv}
        rating={beer.rating}
        numReviewers={4}
      />
  ));

  return (
    <div className="all-beers-page">
      <p className="beers-page-text">Here are all of the beers that are available in the backend.</p>
      <div className="beer-list">{beersList}</div>
    </div>
  );
}

export default AllBeersPage;
