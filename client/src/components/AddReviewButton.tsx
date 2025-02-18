import React, { useState } from "react";
import AddReviewModal from "./AddReviewModal";
import "../styles/AddReviewButton.css";

const AddReviewButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = (rating: number, author: string, comment: string, date: Date) => {
    //TODO - save review to database
    console.log("Review saved:", { rating, author, comment, date });
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
      />
    </>
  );
};

export default AddReviewButton;
