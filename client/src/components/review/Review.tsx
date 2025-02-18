import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "./Review.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface ReviewProps {
  rating: number;
  author: string;
  comment?: string;
  date: Date;
}

const Review: React.FC<ReviewProps> = ({ rating, author, comment, date }) => {
  return (
    <StrictMode>
      <Card id="Review">
        <Card.Body>
          <Card.Title>
            <StarRating rating={rating} />
          </Card.Title>
          <Card.Subtitle id="Author">{author}</Card.Subtitle>
          <Card.Text id="Comment">{comment}</Card.Text>
          <Card.Text id="Date">{date.toLocaleDateString()}</Card.Text>
        </Card.Body>
      </Card>
    </StrictMode>
  );
};

export default Review;
