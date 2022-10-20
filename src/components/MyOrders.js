import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../actions/orderActions";
import { Row, Col, Image } from "react-bootstrap";

function MyOrders() {
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.myOrders);
  const { myOrdersList, loading, error } = myOrders;

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);
  return (
    <div>
      {myOrdersList?.map((order) => (
        <Row className="d-flex justify-content-center">
          <Col>
            <Image
              src={order.order_items[0]?.image}
              width="200px"
              height="200px"
            />
          </Col>
          <Col className="">
            {order.order_items[0]?.name
              ? order.order_items[0]?.name
              : "The name of the oreder goes here"}
            <Row>
              <Col>Qty:{order.order_items.length}</Col>
              <Col>{order.total_price}</Col>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default MyOrders;
