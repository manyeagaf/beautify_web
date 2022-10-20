import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsQuestionCircle, BsFillQuestionCircleFill } from "react-icons/bs";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container">
      <Container>
        {cartItems.length > 0 && (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2} sm={4}>
                    <Image src={item.image} height="100px" />
                  </Col>

                  <Col
                    md={6}
                    sm={8}
                    style={{ justifyContent: "space-between" }}
                  >
                    <Row>
                      <Col>
                        <div>
                          <p>{item.name}</p>
                        </div>
                      </Col>

                      <Col>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-close"></i>
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ padding: "30px 0px 0px 0px" }}>
                      <Col>
                        <Form.Group as={Col} md={3}>
                          <Form.Select
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(10).keys()].map((value) => (
                              <option key={value}>{value}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col>
                        <div style={{ alignSelf: "end", color: "#E75175" }}>
                          <p>₵{item.price * item.quantity}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <Row>
                <Form.Label column="lg" md={2}>
                  Coupon Code
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Enter Coupon Code"
                  ></Form.Control>
                </Col>
                <Col md={2}>
                  <button className="btn-block btn-lg">Apply</button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p>
                  place order & save Points <BsQuestionCircle />
                </p>
              </div>
              <Row>
                <Col>
                  <div>
                    <p>Subtotal :</p>
                  </div>{" "}
                </Col>
                <Col>
                  <div>
                    <p>
                      {cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>Shipping : </Col>
                <Col>
                  {cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  ) > 500 ? (
                    <div>
                      <p>Free</p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        {cartItems.reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        ) * 0.05}
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
              <Row style={{ fontWeight: "bold" }}>
                <Col>
                  <div>
                    <p>Items</p>
                  </div>
                </Col>
                <Col>
                  <div>
                    <p>
                      {cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      ) > 500
                        ? cartItems.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          )
                        : cartItems.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          ) +
                          cartItems.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          ) *
                            0.05}
                    </p>
                  </div>
                </Col>
              </Row>
              <button
                className="btn btn-block btn-lg"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </ListGroup.Item>
          </ListGroup>
        )}
      </Container>
    </div>
  );
}

export default CartScreen;
