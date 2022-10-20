import React, { useState, useEffect } from "react";
import { Row, Col, Container, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getOrderDetails } from "../actions/orderActions";
import Message from "../components/Message";

function OrderScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log(order);
  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name:</strong>
                    {order?.user.username}
                  </p>
                  <p>
                    <strong>Email:</strong>
                    {order?.user.email}
                  </p>
                  <p>
                    <strong>Shipping:</strong>
                    {order?.shipping_address.address +
                      ", " +
                      order?.shipping_address.city +
                      ", " +
                      order?.shipping_address.country}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h1>Order Items</h1>
                  <ListGroup variant="flush">
                    {order?.order_items.length === 0 && (
                      <Message variant="info">Your cart is empty</Message>
                    )}
                    {order?.order_items.map((item, index) => {
                      return (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                rounded
                                fluid
                              />
                            </Col>
                            <Col>
                              <Link to={`/${item.slug}/p/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.quantity} X ${item.price} ={" "}
                              {(item.quantity * item.price).toFixed(2)}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default OrderScreen;
