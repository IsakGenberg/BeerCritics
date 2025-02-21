import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewButton from "../../components/review/AddReviewButton";
import Review from "../../components/review/Review";
import { Beer } from "../../interfaces/beer";
import { getBeer } from "../../api";

const BeerPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);

  async function loadBeer(name: string) {
    const b = await getBeer(name);
    setBeer(b);
  }
  
  useEffect(() => {
    if (name) {
      loadBeer(name);
    }
  }, [name]);

  if (!beer) {
    return <div>Beer doesn't exist</div>;
  }

  return (
    <div className="product-page">
      <h1>{beer.name}</h1>
      <p>Rating: {beer.rating}</p>
      <p>Brewery: {beer.brewery}</p>
      <p>Style: {beer.style}</p>
      <p>Alcohol Perc: {beer.abv} %</p>
      <img src={beer.imagePath} alt={`${beer.name} image`} />
      <Review
        rating={beer.rating}
        author="beerlover1337"
        comment={`I think ${beer.name} is the best beer I've ever had!`}
        date={new Date()}
      />
      <AddReviewButton />
    </div>
  );
};

export default BeerPage;
