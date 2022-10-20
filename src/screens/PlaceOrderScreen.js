import React, { useState, useEffect } from "react";
import { createOrder, } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, ListGroup, Image, Form } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link, useNavigate } from "react-router-dom";

function PlaceOrderScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, error, order } = orderCreate;

  console.log(order);
  console.log(success);
  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2);
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const placeOrder = () => {
    
    dispatch(
      createOrder({
        order_items: cart.cartItems,
        total_price: cart.itemsPrice,
        shipping_address: cart.shippingAddress,
        payment_method: cart.paymentMethod,
      })
    );
  };

  useEffect(() => {
    
    if (success) {
      navigate(`/order/${order.id}`);
    }
  },[dispatch,navigate,success,order]);
  return (
    <div>
      <Container>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping Address</h2>
                <p>
                  <strong>Shipping:</strong>
                  {cart.shippingAddress.address +
                    ", " +
                    cart.shippingAddress.city +
                    ", " +
                    cart.shippingAddress.country}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method:</strong>
                  {cart.paymentMethod}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <ListGroup variant="flush">
                  <h2>Order Items</h2>
                  {cart.cartItems.map((item,index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2} sm={2}>
                          <Image src={item.image} fluid />
                        </Col>
                        <Col>
                          <Link to={`/${item.slug}/p/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4} sm={4}>
                          {item.quantity} x {item.price} ={" "}
                          {item.quantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form onSubmit={placeOrder}>
                  <button
                    className="btn btn-sm btn-block btn-border mt-4"
                    type="submit"
                  >
                    Place Order
                  </button>
                </Form>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlaceOrderScreen;
