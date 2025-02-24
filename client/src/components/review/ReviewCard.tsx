import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "./Review.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  return (
    <StrictMode>
      <Card id="Review">
        <Card.Body>
          <Card.Title>
            <StarRating rating={rating} />
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
