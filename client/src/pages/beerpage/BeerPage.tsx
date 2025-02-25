import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewButton from "../../components/review/AddReviewButton";
import ReviewCard from "../../components/review/ReviewCard";
import { Beer } from "../../interfaces/beer";
import { getBeer } from "../../api";
import StarRating from "../../components/review/StarRating";
import { Col, Row } from "react-bootstrap";
import "./BeerPage.css";
import { getBeerReviews } from "../../api";
import { Review } from "../../interfaces/review";

const BeerPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  async function loadReviews() {
    if (name) {
      const r = await getBeerReviews(name);
      setReviews(
        (r ?? []).map((review) => ({
          ...review,
          date: new Date(review.date),
        }))
      );
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);
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
            <img src={`/${beer.imagePath}`} alt={`${beer.name} image`} />
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
                ({reviews.length} Reviews)
              </a>
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="reviews-section">
        <h2>Reviews</h2>
        <Col id="review-list">
          <div className="reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewCard key={index} {...review} beer={review.beer} />
              ))
            ) : (
              <p>No reviews found.</p>
            )}
          </div>
          <AddReviewButton />
        </Col>
      </Row>
    </div>
  );
};

export default BeerPage;
