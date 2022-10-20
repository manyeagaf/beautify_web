import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/checkout">
            <Nav.Link>
              <span style={{ color: "#E75175" }}>Checkout Method</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Checkout Method</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <span style={{ color: "#E75175" }}>Shipping Information</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping Information</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <span style={{ color: "#E75175" }}>Payment Method</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment Method</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/review">
            <Nav.Link>
              <span style={{ color: "#E75175" }}>Order Review</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Order Review</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
