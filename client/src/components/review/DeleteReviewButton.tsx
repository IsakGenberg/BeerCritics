import React, { useState } from "react";
import { deleteReview } from "../../api";
import "./DeleteReviewButton.css";

interface DeleteReviewButtonProps {
  reviewId: string;
  user: string;
  currentUser: string;
  onDelete: () => void;
}

const DeleteReviewButton: React.FC<DeleteReviewButtonProps> = ({
  reviewId,
  user,
  currentUser,
  onDelete,
}) => {
  const [loading, setLoading] = useState(false);

  if (user !== currentUser) return null;

  //error handling
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    setLoading(true);
    try {
      await deleteReview(reviewId);
      alert("Review successfully deleted!");
      onDelete();
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Failed to delete review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="delete-review-button"
      disabled={loading}
      title="Delete review"
    >
      <img src="/bin.png" alt="Delete" className="bin-icon" />
    </button>
  );
};

export default DeleteReviewButton;
