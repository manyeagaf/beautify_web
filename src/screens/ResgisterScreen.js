import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { register, login } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
function ResgisterScreen() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(
        register({
          username: username,
          email: email,
          password: password,
        })
      );
    } else {
      setMessage("passwords do not match");
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(login(username, password));
      navigate("/");
    }
  });
  return (
    <div className="py-5">
      <FormContainer>
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="email" className="py-3">
            <Form.Label column sm={3}>
              Email :
            </Form.Label>
            <Col>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="username" className="py-3">
            <Form.Label column sm={3}>
              Username :
            </Form.Label>
            <Col>
              <Form.Control
                type="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password" className="py-3">
            <Form.Label column sm={3}>
              Password :
            </Form.Label>
            <Col>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password2" className="py-3">
            <Form.Label column sm={3}>
              Confirm password :
            </Form.Label>
            <Col>
              <Form.Control
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Col>
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-lg btn-border mt-2 px-5"
              type="submit"
              style={{ backgroundColor: "#E75175", color: "white" }}
            >
              Register
            </button>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}

export default ResgisterScreen;
