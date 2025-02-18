import React from "react";
import "./StarRating.css";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (newRating: number) => void;
  isClickable?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  isClickable = false,
}) => {
  const handleClick = (newRating: number) => {
    if (isClickable && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <span id="Rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={isClickable ? "clickable" : ""}
          onClick={() => handleClick(index + 1)}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
};

export default StarRating;
