import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { changeUsername } from "../../api";
import axios from "axios";

interface ChangeUserDataModalProps {
  btnText: string;
  currentUser: string;
  update: (newUsername: string) => void;
}

function ChangeUserDataModal({
  btnText,
  currentUser,
  update,
}: ChangeUserDataModalProps) {
  const [show, setShow] = useState(false);
  const [formText, setFormtext] = useState("parameters");
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState<{ general?: string }>({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    if (inputValue == "") {
      return;
    }
    try {
      await changeUsername(currentUser, inputValue);
      update(inputValue);
      handleClose();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          setErrors({ general: "Username already exists" });
        } else if (error.response?.status === 500) {
          setErrors({ general: "Internal server error" });
        }
      }
    }
  };

  function getTextAfterChange(input: string): string | null {
    const match = input.match(/^Change\s+(.+)$/);
    return match ? match[1] : null;
  }

  useEffect(() => {
    const formText: string | null = getTextAfterChange(btnText);
    if (formText) {
      setFormtext(formText);
    }
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{btnText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formInput">
              <Form.Label>Enter your new {formText.toLowerCase()}:</Form.Label>
              <Form.Control
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`New ${formText.toLowerCase()}`}
                isInvalid={!!errors.general}
              />
              <Form.Control.Feedback type="invalid">
                {errors.general}
              </Form.Control.Feedback>
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
    </>
  );
}
export default ChangeUserDataModal;
