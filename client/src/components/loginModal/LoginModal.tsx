import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./LoginModal.css";

interface LoginModalProps {
  show: boolean;
  handleClose: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Access denied</Modal.Title>
      </Modal.Header>
      <Modal.Body>You need to be logged in to perform that action</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* TODO: Add href to register page */}
        <Button variant="primary" type="submit" href="#">
          Register
        </Button>
        {/* TODO: Add href to login page */}
        <Button variant="primary" type="submit" href="#">
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
