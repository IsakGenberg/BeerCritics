import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { login } from "../../api";
import { useAuth } from "../../authcontext";
import axios from "axios";

function LoginPage() {
  const { checkAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    general?: string;
  }>({});
  const navigate = useNavigate();

  const checkUserLogin = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username) newErrors.username = "Username is required";

    if (!password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    const formErrors = checkUserLogin();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      await login(username, password);

      // Call context provider method update isLoggedIn variable.
      await checkAuth();
      navigate("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setErrors({ general: "Invalid Username or Password" });
        } else if (error.response?.status === 500) {
          setErrors({ general: "Server error! Please try again later." });
        } else {
          setErrors({
            general:
              error.response?.data?.message ||
              "Login failed. Please try again.",
          });
        }
      } else {
        setErrors({ general: "Network error! Please check your connection." });
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Login</h2>

        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          {errors.general && <p className="text-danger">{errors.general}</p>}
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
