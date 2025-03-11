import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "./Review.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewButton from "../reviewButton/ReviewButton";
import { useAuth } from "../../authcontext";
import { getUser } from "../../api";

interface ReviewProps {
  beer: string;
  user: string;
  rating: number;
  date: Date;
  description?: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  beer,
  rating,
  user,
  description,
  date,
}) => {
  const { isLoggedIn } = useAuth();
  const [isCreator, setIsCreator] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setIsCreator(user === currentUser);
    };
    fetchUser();
  }, [user]);

  return (
    <StrictMode>
      <Card id="Review">
        <Card.Body>
          <Card.Title>
            <StarRating rating={rating} />
            {isLoggedIn && isCreator && (
              <ReviewButton
                beer={beer}
                review={{ beer, user, rating, date, description }}
                mode="edit"
              />
            )}
          </Card.Title>
          <Card.Subtitle id="Author">{user}</Card.Subtitle>
          <Card.Text id="Beer">{beer}</Card.Text>
          <Card.Text id="Description">{description}</Card.Text>
          <Card.Text id="Date">{date.toLocaleDateString()}</Card.Text>
        </Card.Body>
      </Card>
    </StrictMode>
  );
};

export default ReviewCard;
