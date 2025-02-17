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

  const handleSave = (name: string, rating: number, comment: string) => {
    // Handle the save logic here
    console.log("Review saved:", { name, rating, comment });
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
