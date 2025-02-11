import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import "../styles/Review.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface ReviewProps {
  rating: number;
  author: string;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({ rating, author, comment }) => {
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <StrictMode>
      <Card id="Review">
        <Card.Body>
          <Card.Title id="Rating">{renderStars(rating)}</Card.Title>
          <Card.Subtitle id="Author">{author}</Card.Subtitle>
          <Card.Text id="Comment">{comment}</Card.Text>
        </Card.Body>
      </Card>
    </StrictMode>
  );
};

export default Review;
