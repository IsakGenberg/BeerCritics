import React from "react";
import "./StarRating.css";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (newRating: number) => void;
  isClickable?: boolean;
  className?: string;
}
/**
 * 
 * @param StarRatingProps - An object containing the following properties:
 * - rating: number - the rating to display
 * - onRatingChange?: (newRating: number) => void - a function that is called when the rating is changed
 * - isClickable?: boolean - a boolean that determines whether the rating can be changed
 * - className?: string - an optional class name to apply to the component 
 * @returns Five stars that represent a rating, with the ability to change the rating if isClickable is true
 */
const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  isClickable = false,
  className,
}) => {
  const handleClick = (newRating: number) => {
    if (isClickable && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <span id="Rating" className={className}>
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
