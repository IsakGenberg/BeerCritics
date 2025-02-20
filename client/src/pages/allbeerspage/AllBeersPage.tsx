import React, { useEffect, useState } from "react";
import { Beer } from "../../interfaces/beer";
import BeerCard from "../../components/beerCard/BeerCard";

function AllBeersPage() {
  const [beers, setBeers] = useState<Beer[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/beer`)
      .then((res) => res.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error("Error fetching beer data:", error));
  }, []);

  if (!beers) {
    return <div>Error loading beers</div>;
  }

  const beersList = beers.map((beer) => (
    <li>
      <BeerCard
        imagePath={"corona.png"}
        name={beer.name}
        brewery={"eriks bryggeri"}
        style={"lager"}
        abv={1}
        rating={beer.rating}
        numReviewers={beer.reviewer}
      />
    </li>
  ));

  return (
    <div>
      <p>Here are all of the beers that are available in the backend.</p>
      <ul>{beersList}</ul>
    </div>
  );
}

export default AllBeersPage;
