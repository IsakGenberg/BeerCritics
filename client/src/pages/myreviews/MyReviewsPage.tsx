import React from "react";
import { getMyReviews } from "../../api";
import ReviewList from "../../components/review/ReviewList";

const MyReviewsPage: React.FC = () => {
  return (
    <div>
      <h2>My Reviews</h2>
      <ReviewList fetchReviews={getMyReviews} showUserName={true} />
    </div>
  );
};

export default MyReviewsPage;
