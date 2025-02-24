import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewButton from "../../components/review/AddReviewButton";
import Review from "../../components/review/Review";
import { Beer } from "../../interfaces/beer";
import { getBeer } from "../../api";
import StarRating from "../../components/review/StarRating";
import { Col, Row } from "react-bootstrap";
import "./BeerPage.css";

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
          <Row className="rating-section">
            <p className="beer-rating">
              <StarRating rating={beer.rating} />{" "}
              <a href="#review-list" id="num-reviews">
                ({4} Reviews)
              </a>
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="reviews-section">
        <h2>Reviews</h2>
        <Col id="review-list">
          <div className="reviews">
            <Review
              rating={beer.rating}
              author="beerlover1337"
              comment={`I think ${beer.name} is the best beer I've ever had!`}
              date={new Date()}
            />
            <Review
              rating={1}
              author="Not beerlover1337"
              comment={`I think ${beer.name} is terrible!`}
              date={new Date()}
            />
          </div>
          <AddReviewButton />
        </Col>
      </Row>
    </div>
  );
};

export default BeerPage;
