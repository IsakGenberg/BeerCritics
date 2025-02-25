import { useEffect, useState } from "react";
import { Beer } from "../../interfaces/beer";
import BeerCard from "../../components/beerCard/BeerCard";
import "./allbeerspage.css";
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
    return (
      <div className="loading-state">
        Loading beers<div className="loader"></div>
      </div>
    );
  }

  const beersList = beers.map((beer) => (
    <div className="beer-card">
      <BeerCard
        imagePath={beer.imagePath}
        name={beer.name}
        brewery={beer.brewery}
        style={beer.style}
        abv={beer.abv}
        rating={beer.rating}
        numReviewers={4}
      />
    </div>
  ));

  return (
    <div className="all-beers-page">
      <p className="beers-page-text">
        Here are all of the beers that are available in the database.
      </p>
      <div className="beer-list">{beersList}</div>
    </div>
  );
}

export default AllBeersPage;
