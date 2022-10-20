import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function CheckoutScreen() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [checkoutMethod, setCheckoutMethod] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/shipping");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <div
              className="justify-content-center mt-3 primary-color"
              style={{ textAlign: "center" }}
            >
              <h4>SECURE CHECKOUT</h4>
            </div>
            <CheckoutSteps step1 />
            <Row>
              <Col md={4}>
                <div className="primary-color">
                  <h5>Login</h5>
                </div>
                <Form>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control placeholder="Enter Email Address"></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter Password"></Form.Control>
                  </Form.Group>
                  <div className="mt-3 justify-content-end">
                    <a href="/password-reset">Forgot your password</a>
                  </div>
                  <button className="btn btn-sm btn-block btn-border mt-3">
                    Login
                  </button>
                </Form>
              </Col>
              <Col md={4} className="ml-2">
                <div className="primary-color mt-2">
                  <h5>Checkout as a Guest or Register</h5>
                </div>
                <Form className="mt-3" onSubmit={submitHandler}>
                  <Form.Group controlId="guest">
                    <Form.Check
                      label="Checout as guest"
                      id="guest"
                      name="guest"
                      checked={checkoutMethod === "guest"}
                      onChange={(e) =>
                        checkoutMethod !== "guest"
                          ? setCheckoutMethod("guest")
                          : setCheckoutMethod("")
                      }
                    ></Form.Check>
                  </Form.Group>
                  <Form.Group controlId="guest">
                    <Form.Check
                      label="Sign Up"
                      id="signup"
                      name="signup"
                      checked={checkoutMethod === "signup"}
                      onChange={(e) =>
                        checkoutMethod !== "signup"
                          ? setCheckoutMethod("signup")
                          : setCheckoutMethod("")
                      }
                    ></Form.Check>
                  </Form.Group>
                  <div className="mt-4">
                    <p>Register with us for future convenience</p>
                  </div>
                  <button
                    className="btn btn-sm btn-block btn-border mt-4"
                    type="submit"
                  >
                    Continue
                  </button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div
              className="justify-content-center mt-3 primary-color"
              style={{ textAlign: "center" }}
            >
              <h5>Your checkout progress</h5>
            </div>
            <hr />
            <Row>
              <Col>Shipping Address</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>Payment Method</Col>
              <Col></Col>
            </Row>

            <div
              className="justify-content-center mt-3 primary-color"
              style={{ textAlign: "center" }}
            >
              <h5>Order Summary</h5>
            </div>
            <hr />
            <Row className="mt-2">
              <Col>Items : </Col>
              <Col>1</Col>
            </Row>
            <Row className="mt-2">
              <Col>Sub Total : </Col>
              <Col>345</Col>
            </Row>
            <Row className="mt-2">
              <Col>Shipping : </Col>
              <Col>Free</Col>
            </Row>
            <Row className="mt-2">
              <Col>Amount Payable : </Col>
              <Col>345</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckoutScreen;
