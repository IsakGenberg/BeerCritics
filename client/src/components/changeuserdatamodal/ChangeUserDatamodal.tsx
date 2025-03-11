import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { UserDataModalType } from "../../pages/myaccountpage/UserDataModalType";
import { changeUsername } from "../../api";

interface ChangeUserDataModalProps {
  btnText: string;
  currentUser: string;
  type: UserDataModalType;
  update: (newUsername: string) => void;
}

function ChangeUserDataModal({
  btnText,
  currentUser,
  type,
  update,
}: ChangeUserDataModalProps) {
  const [show, setShow] = useState(false);
  const [formText, setFormtext] = useState("parameters");
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    if (inputValue == "") {
      return;
    }
    switch (type) {
      case UserDataModalType.PASSWORD: {
        update(inputValue);
        break;
      }
      case UserDataModalType.USERNAME: {
        await changeUsername(currentUser, inputValue);
        update(inputValue);
        break;
      }
    }
    handleClose();
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
    </>
  );
}
export default ChangeUserDataModal;
