import React, { useState } from "react";
import AddReviewModal from "../../components/review/AddReviewModal";
import { updateReview } from "../../api";
import { Review } from "../../interfaces/review";
import { BsPencilSquare } from "react-icons/bs";
import "./editReviewButton.css";

interface AddReviewButtonProps {
  review: Review;
  beer: string;
}

const EditReviewButton: React.FC<AddReviewButtonProps> = ({ review, beer }) => {
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
    await updateReview(review);
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-primary">
        <BsPencilSquare size={20} />
      </button>
      <AddReviewModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
        review={review}
        beer={beer}
      />
    </>
  );
};

export default EditReviewButton;
