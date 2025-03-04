import React, { useState } from "react";
import AddReviewModal from "./AddReviewModal";
import "./AddReviewButton.css";
import { addReview } from "../../api";
import { Review } from "../../interfaces/review";

interface AddReviewButtonProps {
  beer: string;
}

const AddReviewButton: React.FC<AddReviewButtonProps> = ({ beer }) => {
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
    const review: Review = {
      beer: beer,
      user: user,
      rating: rating,
      date: date,
      description: description,
    };
    await addReview(review);
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
