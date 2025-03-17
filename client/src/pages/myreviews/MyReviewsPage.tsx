import { useEffect, useState } from "react";
import { getMyReviews } from "../../api";
import ReviewCard from "../../components/review/ReviewCard";
import { Review } from "../../interfaces/review";
/**
 *
 * @returns MyReviewsPage component which displays the reviews written by the logged in user
 */
const MyReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  async function loadReviews() {
    const r = await getMyReviews();
    setReviews(
      (r ?? []).map((review) => ({
        ...review,
        date: new Date(review.date),
      }))
    );
  }

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className="container">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard key={index} {...review} user={review.user} />
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default MyReviewsPage;
