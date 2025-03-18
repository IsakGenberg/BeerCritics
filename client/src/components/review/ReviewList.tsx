import React, { useEffect, useState } from "react";
import ReviewCard from "../../components/review/ReviewCard";
import { Review } from "../../interfaces/review";

interface ReviewListProps {
  fetchReviews: () => Promise<Review[]>;
  onAddReview?: (review: Review) => void;
  onReviewsFetched?: (reviews: Review[]) => void;
}

/**
 * A list of reviews that fetches reviews from the API and displays them as ReviewCards.
 * @param ReviewListProps - An object containing the following properties:
 * - fetchReviews: () => Promise<Review[]> - a function that fetches reviews from an API
 * - onAddReview?: (review: Review) => void - an optional function that is called when a review is added
 */
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
