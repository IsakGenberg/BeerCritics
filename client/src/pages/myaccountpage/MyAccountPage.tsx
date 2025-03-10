import { useEffect, useState } from "react";
import { getMyReviews, getUser } from "../../api";
import { Review } from "../../interfaces/review";
import { useAuth } from "../../authcontext";
import { useNavigate } from "react-router-dom";
import "./myaccountpage.css";
import ReviewCard from "../../components/review/ReviewCard";
import { Button, Col, Container, Row } from "react-bootstrap";

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
    <Container className="account-page">
      <Row>
        <Col>
          <div className="user">
            <h1>{currentUser}</h1>
            <button type="button">Change username</button>
            <button type="button">Change password</button>
          </div>
        </Col>
        <Col xs={6}>
          <div className="review-list">
            <h2>Your Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewCard key={index} {...review} beer={review.beer} />
              ))
            ) : (
              <p>No reviews found.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyAccountPage;
