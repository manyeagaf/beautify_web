import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import WishList from "../components/WishList";
import MyOrders from "../components/MyOrders";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function ProfileScreen() {
  const [selectedItem, setSelectedItem] = useState("myorders");

  const logoutHandler = () => {
    dispatch(logout());
  };
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>My Profile</ListGroup.Item>
              <ListGroup.Item>My Wallet</ListGroup.Item>
              <ListGroup.Item>My Orders</ListGroup.Item>
              <ListGroup.Item>My Wishlist</ListGroup.Item>
              <ListGroup.Item>My Saved Payments</ListGroup.Item>
              <ListGroup.Item>
                <Button onClick={logoutHandler} >Logout</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={7}>
            {/* <WishList /> */}
            <MyOrders />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileScreen;
