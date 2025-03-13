import React, { useState } from "react";
import { deleteReview } from "../../api";
import "./DeleteReviewButton.css";
import { Review } from "../../interfaces/review";

interface DeleteReviewButtonProps {
  review: Review;
  currentUser: string;
  onDelete: () => void;
}

const DeleteReviewButton: React.FC<DeleteReviewButtonProps> = ({
  review,
  currentUser,
  onDelete,
}) => {
  const [loading, setLoading] = useState(false);

  if (review.user !== currentUser) return null;

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    setLoading(true);
    try {
      await deleteReview(review);
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
