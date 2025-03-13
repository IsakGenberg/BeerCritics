import React, { useState } from "react";
import { deleteReview } from "../../api";
import "./DeleteReviewButton.css";
import { Review } from "../../interfaces/review";
import { getUser } from "../../api";

interface DeleteReviewButtonProps {
  review: Review;
}

const DeleteReviewButton: React.FC<DeleteReviewButtonProps> = ({ review }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
    };
    fetchUser();
  }, []);

  if (review.user !== currentUser) return null;

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    setLoading(true);
    try {
      await deleteReview(review);
      alert("Review successfully deleted!");
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
