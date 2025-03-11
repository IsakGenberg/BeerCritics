import { useEffect, useState } from "react";
import { getMyReviews, getUser } from "../../api";
import { Review } from "../../interfaces/review";
import "./myaccountpage.css";
import ReviewCard from "../../components/review/ReviewCard";
import { Col, Container, Row } from "react-bootstrap";
import { UserDataModalType } from "./UserDataModalType";
import ChangeUserDataModal from "../../components/changeuserdatamodal/ChangeUserDatamodal";



function MyAccountPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentUser, setUser] = useState<string >("User not found");

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
              <ChangeUserDataModal 
                btnText="Change Password"
                currentUser={currentUser}
                type = {UserDataModalType.PASSWORD}
                update = {()=>{}}
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
