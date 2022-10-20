import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
function ShippingScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [postalCode, setPostaCode] = useState(shippingAddress.postal_code);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address: address,
        postal_code: postalCode,
        city,
        country,
      })
    );
    navigate("/payment");
  };

  const navigate = useNavigate();

  return (
    <div>
    <Container>
        <CheckoutSteps step1 step2 />
        <Row className="justify-content-center">
          <div
            style={{ fontSize: "30px", textAlign: "center" }}
            className="mb-3"
          >
            <p>Add Shipping Address</p>
          </div>

          <Col md={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group as={Row} controlId="address" className="mb-4">
                <Form.Label column sm={3}>
                  Address
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="postalCode" className="mb-4">
                <Form.Label column sm={3}>
                  Postal Code
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    value={postalCode}
                    onChange={(e) => setPostaCode(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="city" className="mb-4">
                <Form.Label column sm={3}>
                  City
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="country" className="mb-4">
                <Form.Label column sm={3}>
                  Country
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <button
                  className="btn btn-lg btn-block btn-border mt-2"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container> 
      {/* <Container>
        <CheckoutSteps step1 step2 />
        <Row>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>Saved Addresses</ListGroup.Item>
              <ListGroup.Item>New Address</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div>
                  <p>Gafaru Manyea</p>
                  <p>Trade fair-Tse addo,La Dadekotopon</p>
                  <p>40090</p>
                  <p>500565</p>
                </div>
                <Row>
                  <Col md={3}>
                    <button>
                      <span>
                        <MdOutlineModeEditOutline />
                        EDIT
                      </span>
                    </button>
                  </Col>
                  <Col md={8}>
                    <button
                      className="btn btn-block my-2"
                      style={{ width: "100%" }}
                      onClick={submitHandler}
                    >
                      SHIP TO THIS ADDRESS <BsChevronRight />
                    </button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <span style={{ color: "#F3A738" }}>2 Items in your cart</span>{" "}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="my-2">
              <ListGroup.Item>
                <span style={{ color: "#F3A738" }}>Grand Totals</span>{" "}
              </ListGroup.Item>
            </ListGroup>
            <Row>
              <Col>Shipping Address</Col>
              <Col style={{ color: "#E75175" }}>Change</Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default ShippingScreen;
