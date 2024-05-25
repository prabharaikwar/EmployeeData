import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Container, Alert, Col } from "react-bootstrap";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.token);
      setIsAuthenticated(true);
      Navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center height-100vh">
      <Col md={6} lg={4} className="p-4 bg-light rounded shadow">
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>
          <div className="mt-2">
            Don't have an account? <Link to="/signup">Register</Link> now.
          </div>
        </Form>
      </Col>
    </Container>
  );
};

export default SignIn;
