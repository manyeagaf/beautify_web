import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Badge,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout, getUserDetails } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const [showBrands, setShowBrands] = useState(false);
  const [showBeautifyFashion, setShowBeautifyFashion] = useState(false);
  const [showBeautifyAdvice, setShowBeautifyAdvice] = useState(false);
  const [showBeautifyNetwork, setShowBeautifyNetwork] = useState(false);

  const currentUser = useSelector((state) => state.currentUser);
  const { userDetails, loading, error } = currentUser;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const { cartItems } = cart;
  // useEffect(() => {
  //   if (!userDetails) {
  //     dispatch(getUserDetails());
  //   }
  // }, [dispatch, userDetails]);
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand href="/" className="brand order-md-0 order-1">
            BEAUTIFY
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="-navbar-nav"
            className="order-md-1 order-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-links">Categories</Nav.Link>
              <NavDropdown
                title={<span className="nav-links">Brands</span>}
                show={showBrands}
                onMouseOver={() => setShowBrands(true)}
                onMouseLeave={() => setShowBrands(false)}
              >
                <NavDropdown.Item>Pet Care</NavDropdown.Item>

                <NavDropdown.Item>Men</NavDropdown.Item>

                <NavDropdown.Item>Women</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<span className="nav-links">Beautify Fashion</span>}
                show={showBeautifyFashion}
                onMouseOver={() => setShowBeautifyFashion(true)}
                onMouseLeave={() => setShowBeautifyFashion(false)}
              >
                <NavDropdown.Item>Pet Care</NavDropdown.Item>

                <NavDropdown.Item>Men</NavDropdown.Item>

                <NavDropdown.Item>Women</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<span className="nav-links">Beauty Advice</span>}
                show={showBeautifyAdvice}
                onMouseOver={() => setShowBeautifyAdvice(true)}
                onMouseLeave={() => setShowBeautifyAdvice(false)}
              >
                <NavDropdown.Item>Pet Care</NavDropdown.Item>

                <NavDropdown.Item>Men</NavDropdown.Item>

                <NavDropdown.Item>Women</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<span className="nav-links">Beautify Network</span>}
                show={showBeautifyNetwork}
                onMouseOver={() => setShowBeautifyNetwork(true)}
                onMouseLeave={() => setShowBeautifyNetwork(false)}
              >
                <NavDropdown.Item>Pet Care</NavDropdown.Item>

                <NavDropdown.Item>Men</NavDropdown.Item>

                <NavDropdown.Item>Women</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search on Beautify"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline">Search</Button> */}
            </Form>
            {userInfo ? (
              <Link to={"/profile"} target="_blank" className="cart-account">
                <i className="fas fa-user" aria-hidden="true"></i>{" "}
                {userInfo.name}
              </Link>
            ) : (
              <LinkContainer to={"/profile"}>
                <Nav.Link className="cart-account">
                  <i className="fas fa-user" aria-hidden="true"></i> Account
                </Nav.Link>
              </LinkContainer>
            )}

            <LinkContainer to="/cart">
              <Nav.Link className="cart-account">
                <i
                  className="fa fa-shopping-bag"
                  aria-hidden="true"
                  style={{ fontSize: "30px" }}
                ></i>
                <Badge bg="danger">{cartItems ? cartItems.length : "0"}</Badge>
              </Nav.Link>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
