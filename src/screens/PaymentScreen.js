import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col, ListGroup } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { getPaymentMethods } from '../actions/orderActions'
function PaymentScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { paymentMethod } = cart;
  const paymentMethods  = useSelector((state)=>state.paymentMethods);
  const { paymentsList,success,loading } = paymentMethods;
  console.log(paymentsList);
  const [payment, setpaymentMethod] = useState(paymentMethod);
  const handleSubmit = () => {
    dispatch(savePaymentMethod(payment));
    navigate("/place-order");
  };
  useEffect(()=>{
    dispatch(getPaymentMethods());
  },[dispatch,]);
  return (
    <div>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <div style={{ fontSize: "30px", textAlign: "center" }} className="mb-3">
          <p>Select Payment Method</p>
        </div>

        <div style={{ alignment: "center" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Check
                label="MOMO"
                className="mb-3"
                checked={payment === "MOMO"}
                onChange={(e) =>
                  payment !== "MOMO"
                    ? setpaymentMethod("MOMO")
                    : setpaymentMethod("")
                }
              ></Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check
                label="Vodafone Cash"
                className="mb-3"
                checked={payment === "Vodafone Cash"}
                onChange={(e) =>
                  payment !== "Vodafone Cash"
                    ? setpaymentMethod("Vodafone Cash")
                    : setpaymentMethod("")
                }
              ></Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check
                label="Paypal or Credit Card"
                className="mb-3"
                checked={payment === "Paypal or Credit Card"}
                onChange={(e) =>
                  payment !== "Paypal or Credit Card"
                    ? setpaymentMethod("Paypal or Credit Card")
                    : setpaymentMethod("")
                }
              ></Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check
                label="Tigo Cash"
                className="mb-3"
                checked={payment === "Tigo Cash"}
                onChange={(e) =>
                  payment !== "Tigo Cash"
                    ? setpaymentMethod("Tigo Cash")
                    : setpaymentMethod("")
                }
              ></Form.Check>
            </Form.Group>
            <button
              className="btn btn-sm btn-block btn-border mt-4"
              type="submit"
            >
              Continue
            </button>
          </Form>
        </div>
      </FormContainer> 
      {/* <Container>
        <CheckoutSteps step1 step2 step3 />
        <Row>
          <h5>Choose payment method</h5>
          <Col md={3}>
            <ListGroup variant="flush">
              {paymentsList.map((item)=>(
                <ListGroup.Item>{item.name}</ListGroup.Item>
              ))}
              
              
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>Credit/Debit Card</ListGroup.Item>
              <Form onSubmit={handleSubmit}>
                <ListGroup.Item>
                  <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control></Form.Control>
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Group>
                    <Form.Label>Expiry</Form.Label>
                    <Form.Control placeholder="MM /YY"></Form.Control>
                    <Form.Control placeholder="CVV"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save for future" />
                  </Form.Group>
                </ListGroup.Item>
                <button
                  className="btn btn-lg btn-block my-2"
                  style={{ width: "100%" }}
                  
                >
                  PAY₵450NOW <BsChevronRight />
                </button>
              </Form>
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
            <div>
              <p>Gafaru Manyea</p>
              <p>Trade fair-Tse addo,La Dadekotopon</p>
              <p>40090</p>
              <p>500565</p>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default PaymentScreen;
