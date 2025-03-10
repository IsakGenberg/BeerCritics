import React, { useState } from "react";
import AddReviewModal from "./AddReviewModal";
import "./AddReviewButton.css";
import { addReview } from "../../api";
import { Review } from "../../interfaces/review";

interface AddReviewButtonProps {
  beer: string;
  onAddReview: (review: Review) => void; // Update to pass the new review directly
}

const AddReviewButton: React.FC<AddReviewButtonProps> = ({
  beer,
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

    // Add the new review via the API (assuming the API saves it)
    await addReview(newReview);

    // After adding the review to the database, update the parent component's state
    onAddReview(newReview); // Pass the new review back to the parent
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-primary">
        Add Review
      </button>
      <AddReviewModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
        beer={beer}
      />
    </>
  );
};

export default AddReviewButton;
