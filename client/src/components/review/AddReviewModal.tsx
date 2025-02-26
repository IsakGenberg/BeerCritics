import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AddReviewModal.css";
import StarRating from "./StarRating";
import { getUser } from "../../api";

interface AddReviewModalProps {
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
}
const AddReviewModal: React.FC<AddReviewModalProps> = ({
  show,
  handleClose,
  handleSave,
  beer,
}) => {
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState("");
  const [description, setComment] = useState("");
  const [date] = useState(new Date());

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

export default AddReviewModal;
