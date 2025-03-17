import { useEffect, useState } from "react";
import { Beer } from "../../interfaces/beer";
import BeerCard from "../../components/beerCard/BeerCard";
import "./allbeerspage.css";
import { getAllBeers } from "../../api";
/**
 *
 * @returns AllBeersPage component which displays BeerCards for all beers in the database
 */
function AllBeersPage() {
  const [beers, setBeers] = useState<Beer[]>([]);

  async function getBeerList() {
    const bs = await getAllBeers();
    setBeers(bs);
  }

  useEffect(() => {
    getBeerList();
  }, []);

  if (beers.length == 0) {
    return (
      <div className="loading-state" data-testid="loading-state">
        Loading beers<div className="loader"></div>
      </div>
    );
  }

  const beersList = beers.map((beer) => (
    <div className="beer-card">
      <BeerCard
        imagePath={beer.imagePath}
        style={beer.style}
        name={beer.name}
        rating={beer.rating}
      />
    </div>
  ));

  return (
    <div className="all-beers-page" data-testid="all-beers-page">
      <h1 className="beers-page-text">All Beers 🍺</h1>
      <div className="beer-list">{beersList}</div>
    </div>
  );
}

export default AllBeersPage;
