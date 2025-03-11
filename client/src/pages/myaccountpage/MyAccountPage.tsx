import { useEffect, useState } from "react";
import { getMyReviews, getUser } from "../../api";
import { Review } from "../../interfaces/review";
import "./myaccountpage.css";
import ReviewCard from "../../components/review/ReviewCard";
import { Col, Container, Row } from "react-bootstrap";
import { UserDataModalType } from "./UserDataModalType";
import ChangeUserDataModal from "../../components/changeuserdatamodal/ChangeUserDatamodal";
import { useAuth } from "../../authcontext";
import { useNavigate } from "react-router-dom";



function MyAccountPage() {
  const {isLoggedIn, checkAuth} = useAuth();
  const navigate = useNavigate();

  
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentUser, setUser] = useState<string >("User not found");

  // Do not allow unauthorized users to reach the page.
  if(!isLoggedIn){
    navigate("/user/login");
  }

  const updateUsername = (newUsername: string) => {
    setUser(newUsername);
    window.location.reload();
  };

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
    if(user){
      setUser(user);
    }
  }

  useEffect(() => {
    checkAuth();
    loadReviews();
    loadCurrentUser();
  }, []);

  return (
    <Container className="account-page">
      <Row>
        <Col>
          <div className="user">
            <h1>{currentUser}</h1>
            <div className="items">
              <ChangeUserDataModal
                btnText="Change Username"
                currentUser={currentUser}
                type = {UserDataModalType.USERNAME}
                update = {updateUsername}
              />
            </div>
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
