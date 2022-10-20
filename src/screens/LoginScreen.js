import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Row, Col, Form, Link, Container, Image } from "react-bootstrap";
import { login, getUserDetails } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import { BsX } from "react-icons/bs";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { success, loading,userInfo } = userLogin;

  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    console.log(success);
  };
  useEffect(() => {
    if (success) {
      navigate("/");
    }
    if(userInfo){
      navigate("/");
    }
  }, [success,navigate, userInfo]);

  
  return (
    <div className="mt-4" style={{ textAlign: "center" }}>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="username" as={Row} className="mb-4">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group controlId="password" as={Row} className="mb-4">
            <Form.Label column sm={3}>
              Password
            </Form.Label>

            <Col>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Col>
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-lg btn-border mt-2 px-5"
              type="submit"
              style={{ color: "white", backgroundColor: "#E75175" }}
            >
              Continue
            </button>
          </div>
        </Form>
        <div className="py-3">
          <span>Dont have an Account?</span>
          <a href="/register"> Register</a>
        </div>
      </FormContainer>
      {/* <Container>
        <Row className="justify-content-center">
          <Col md={3} className="shadow-sm p-3 mb-5 bg-white rounded">
            <div className="d-flex justify-content-start ">
              <BsX />
            </div>
            <div className="d-flex justify-content-start py-3">
              <h2>Sign In</h2>
            </div>

            <div style={{ textAlign: "start" }}>
              <p>
                To Quickely find your favourite items,saved address and payments
              </p>
            </div>
            <div style={{ borderBottom: "3px solid" }}></div>
            <div style={{ textAlign: "start" }} className="py-2">
              <p>Resgister for an amazing offer</p>
            </div>
            <Image
              src="images/login2.webp"
              fluid
              className="d-flex justify-content-start"
            />
            <div className="py-2">
              <button className="btn-block" style={{ width: "100%" }}>
                Enter Email
              </button>
            </div>
            <div className="py-3">
              <button
                style={{ border: "none" }}
                className="shadow-lg p-2 bg-white rounded"
              >
                <Image
                  src="images/google1.png"
                  fluid
                  height="25px"
                  width="25px"
                />{" "}
                Sign in
              </button>
            </div>
            <div>
              <button
                style={{ border: "none" }}
                className="shadow-sm p-2 bg-white rounded"
              >
                <Image
                  src="images/facebook.png"
                  fluid
                  height="25px"
                  width="25px"
                />{" "}
                Sign in
              </button>
            </div>
            <FacebookLogin
              apaId="595627678349336"
              fields="name,emil,picture"
              callback={responseFacebook}
            />
            <p style={{ textAlign: "start" }}>
              By continuing,you agree that you have read and accept our T&Cs and
              privacy policy
            </p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default LoginScreen;

