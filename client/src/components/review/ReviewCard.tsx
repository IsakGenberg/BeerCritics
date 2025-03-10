import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "./Review.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EditReviewButton from "../editReview/editReviewButton";
import { useAuth } from "../../authcontext";

interface ReviewProps {
  beer: string;
  user: string;
  rating: number;
  date: Date;
  description?: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  beer,
  rating,
  user,
  description,
  date,
}) => {
  const { isLoggedIn } = useAuth();

  return (
    <StrictMode>
      <Card id="Review">
        <Card.Body>
          <Card.Title>
            <StarRating rating={rating} />
            {isLoggedIn && (
              <EditReviewButton
                beer={beer}
                review={{ beer, user, rating, date, description }}
              />
            )}
          </Card.Title>
          <Card.Subtitle id="Author">{user}</Card.Subtitle>
          <Card.Text id="Beer">{beer}</Card.Text>
          <Card.Text id="Description">{description}</Card.Text>
          <Card.Text id="Date">{date.toLocaleDateString()}</Card.Text>
        </Card.Body>
      </Card>
    </StrictMode>
  );
};

export default ReviewCard;
