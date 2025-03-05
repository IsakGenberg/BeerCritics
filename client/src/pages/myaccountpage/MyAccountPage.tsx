import { useEffect, useState } from "react";
import { getMyReviews, getUser } from "../../api";
import { Review } from "../../interfaces/review";
import { useAuth } from "../../authcontext";
import { useNavigate } from "react-router-dom";
import "./myaccountpage.css";
import ReviewCard from "../../components/review/ReviewCard";

function MyAccountPage() {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentUser, setUser] = useState<string | null>("");

  async function loadReviews() {
    const r = await getMyReviews();
    setReviews(
      (r ?? []).map((review) => ({
        ...review,
        date: new Date(review.date),
      }))
    );
  }

  async function loadCurrentUser() {
    const user = await getUser();
    setUser(user);
  }

  useEffect(() => {
    loadReviews();
    loadCurrentUser();
  }, []);

  // if(!isLoggedIn){
  //     navigate("/user/login");
  // }

  //FIXME might not be needed here, used when no user record exist in database
  if (!currentUser) {
    setUser("user not found");
  }

  return (
    <div className="account-page">
      <div className="user"><p>{currentUser}</p></div>
      <div className="review-list">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard key={index} {...review} beer={review.beer} />
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </div>
    </div>
  );
}

export default MyAccountPage;
