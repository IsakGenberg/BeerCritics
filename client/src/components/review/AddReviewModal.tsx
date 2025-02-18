import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AddReviewModal.css";
import StarRating from "./StarRating";

interface AddReviewModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (
    rating: number,
    author: string,
    comment: string,
    date: Date
  ) => void;
}
// TODO - Connect review to a specific beer
const AddReviewModal: React.FC<AddReviewModalProps> = ({
  show,
  handleClose,
  handleSave,
}) => {
  const [rating, setRating] = useState(0);
  // TODO - get author from user authentication
  const [author] = useState("");
  const [comment, setComment] = useState("");
  const [date] = useState(new Date());

  const handleSubmit = () => {
    handleSave(rating, author, comment, date);
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
              value={comment}
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
