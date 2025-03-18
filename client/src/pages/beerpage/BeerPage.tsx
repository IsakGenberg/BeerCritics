import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewButton from "../../components/reviewButton/ReviewButton";
import { Beer } from "../../interfaces/beer";
import { getBeer } from "../../api";
import StarRating from "../../components/review/StarRating";
import { Col, Row } from "react-bootstrap";
import "./BeerPage.css";
import { getBeerReviews } from "../../api";
import { Review } from "../../interfaces/review";
import { useAuth } from "../../authcontext";
import ReviewList from "../../components/review/ReviewList";

/**
 *
 * @returns BeerPage component which displays the details of a specific beer and its reviews.
 * If the beer does not exist, a message is displayed instead.
 */
const BeerPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { isLoggedIn } = useAuth();

  // This function is passed to the AddReviewButton to update the state with the new review
  const handleAddReview = (newReview: Review) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]); // Add the new review to the front of the list
  };

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
        <Col>
          <ReviewList
            fetchReviews={() => getBeerReviews(name!)}
            onReviewsFetched={setReviews}
          />
          {isLoggedIn && (
            <ReviewButton
              beer={beer.name}
              mode="add"
              onAddReview={handleAddReview}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BeerPage;
