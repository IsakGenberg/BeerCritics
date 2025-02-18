import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewButton from "../components/AddReviewButton";
import Review from "../components/Review";

interface Beer {
  name: string;
  rating: number;
  reviewer: number;
}

const BeerPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/beer/${name}`)
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((error) => console.error("Error fetching beer data:", error));
  }, [name]);

  if (!beer) {
    return <div>Beer doesn't exist</div>;
  }

  return (
    <div className="product-page">
      <h1>{beer.name}</h1>
      <p>Rating: {beer.rating}</p>
      <p>Reviewer ID: {beer.reviewer}</p>
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
