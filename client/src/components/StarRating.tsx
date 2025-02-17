import React from "react";
import "../styles/StarRating.css";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return <span id="Rating">{"★".repeat(rating) + "☆".repeat(5 - rating)}</span>;
};

export default StarRating;
