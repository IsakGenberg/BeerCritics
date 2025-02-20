import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewButton from "../../components/review/AddReviewButton";
import Review from "../../components/review/Review";
import { Beer } from "../../../../server/src/model/beer";
import StarRating from "../../components/review/StarRating";
import { Col, Row } from "react-bootstrap";
import "./BeerPage.css";

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
      <Row className="product-info">
        <Col className="product-image">
          <div className="image-container">
            <img src={beer.imagePath} alt={`${beer.name} image`} />
          </div>
        </Col>
        <Col className="product-details">
          <h1 className="beer-name">{beer.name}</h1>
          <p className="beer-brewery">{beer.brewery}</p>
          <p className="beer-style">{beer.style}</p>
          <p className="beer-abv">{beer.abv} % vol</p>
          <StarRating rating={beer.rating} className="beer-rating" />
        </Col>
      </Row>
      <Row className="reviews-section">
        <h2>Reviews</h2>
        <Col className="review-list">
          <Review
            rating={beer.rating}
            author="beerlover1337"
            comment={`I think ${beer.name} is the best beer I've ever had!`}
            date={new Date()}
          />
          <AddReviewButton />
        </Col>
      </Row>
    </div>
  );
};

export default BeerPage;
