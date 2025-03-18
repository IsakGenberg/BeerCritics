import React, { useEffect, useState } from "react";
import ReviewCard from "../../components/review/ReviewCard";
import { Review } from "../../interfaces/review";

interface ReviewListProps {
  fetchReviews: () => Promise<Review[]>;
  onAddReview?: (review: Review) => void;
  onReviewsFetched?: (reviews: Review[]) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({
  fetchReviews,
  onReviewsFetched,
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function loadReviews() {
      const r = await fetchReviews();
      const reviewsWithDate = (r ?? []).map((review) => ({
        ...review,
        date: new Date(review.date),
      }));
      setReviews(reviewsWithDate);
      if (onReviewsFetched) {
        onReviewsFetched(reviewsWithDate);
      }
    }
    loadReviews();
  }, [fetchReviews, onReviewsFetched]);

  return (
    <div id="review-list">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
            beer={review.beer}
            user={review.user}
          />
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default ReviewList;
