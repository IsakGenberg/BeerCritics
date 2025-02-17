import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/AddReviewModal.css";

interface AddReviewModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (name: string, rating: number, comment: string) => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({
  show,
  handleClose,
  handleSave,
}) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    handleSave(name, rating, comment);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBeerName">
            <Form.Label>Beer Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter beer name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min={0}
              max={5}
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
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReviewModal;
