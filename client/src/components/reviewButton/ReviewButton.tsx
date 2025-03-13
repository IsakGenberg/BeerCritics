import React, { useState } from "react";
import ReviewModal from "../review/ReviewModal";
import "./ReviewButton.css";
import { addReview, updateReview } from "../../api";
import { Review } from "../../interfaces/review";
import { BsPencilSquare } from "react-icons/bs";

interface ReviewButtonProps {
  beer: string;
  review?: Review;
  mode: "add" | "edit";
  onAddReview?: (review: Review) => void;
}
/**
 * 
 * @param ReviewButtonProps - An object containing the following properties:
 * - beer: string - the name of the beer being reviewed
 * - review?: Review - an optional review object to edit
 * - mode: "add" | "edit" - a string that determines whether the review is being added or edited 
 * @returns A button that opens a modal to add or edit a review
 */
const ReviewButton: React.FC<ReviewButtonProps> = ({
  beer,
  review,
  mode,
  onAddReview,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = async (
    beer: string,
    user: string,
    rating: number,
    date: Date,
    description?: string
  ) => {
    const newReview: Review = {
      beer: beer,
      user: user,
      rating: rating,
      date: date,
      description: description,
    };

    if (mode === "edit" && review) {
      await updateReview(newReview);
    } else {
      await addReview(newReview);
    }
    if (onAddReview) {
      onAddReview(newReview);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-primary">
        {mode === "edit" ? <BsPencilSquare size={20} /> : "Add Review"}
      </button>
      <ReviewModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
        beer={beer}
        review={review}
      />
    </>
  );
};

export default ReviewButton;
