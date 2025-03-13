import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./ReviewModal.css";
import StarRating from "./StarRating";
import { getUser } from "../../api";
import { Review } from "../../interfaces/review";

interface ReviewModalProps {
  show: boolean;
  beer: string;
  handleClose: () => void;
  handleSave: (
    beer: string,
    user: string,
    rating: number,
    date: Date,
    description?: string
  ) => void;
  review?: Review;
}

/**
 * 
 * @param ReviewModalProps - An object containing the following properties:
 * - show: boolean - a boolean that determines whether the modal is displayed
 * - beer: string - the name of the beer being reviewed
 * - handleClose: () => void - a function that closes the modal
 * - handleSave: (beer: string, user: string, rating: number, date: Date, description?: string) => void - a function that saves the review
 * - review?: Review - an optional review object, prefills input fields if provided
 * @returns A modal that allows the user to input values in order to add a review for a beer
 */
const ReviewModal: React.FC<ReviewModalProps> = ({
  show,
  handleClose,
  handleSave,
  beer,
  review,
}) => {
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState("");
  const [description, setComment] = useState("");
  const [date] = useState(new Date());

  React.useEffect(() => {
    if (review) {
      setRating(review.rating);
      setComment(review.description || "");
    }
  }, [review]);

  React.useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = () => {
    handleSave(beer, user, rating, date, description);

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRating">
            <Form.Label>Rating </Form.Label>
            <StarRating
              rating={rating}
              onRatingChange={(newRating) => setRating(newRating)}
              isClickable={true}
            />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter comment"
              value={description}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
