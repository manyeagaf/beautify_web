import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Container,
  NavDropdown,
  Nav,
  Dropdown,
  Col,
  Row,
} from "react-bootstrap";

function Categories() {
  const [showMakeup, setShowMakeup] = useState(false);
  const [showSkinCare, setShowSkinCare] = useState(false);
  const [showFace, setShowFace] = useState(false);
  const [showMen, setShowMen] = useState(false);
  const [showMomAndBaby, setShowMomAndBaby] = useState(false);
  const [showHair, setShowHair] = useState(false);
  const [showPersonalCare, setShowPersonalCare] = useState(false);
  const [showHealthAndWellness, setShowHealthAndWellness] = useState(false);

  const [showAppliances, setShowAppliances] = useState(false);

  return (
    <div className="categories">
      <Container>
        <Nav>
          <NavDropdown
            title={<span className="category-header">Make up</span>}
            show={showMakeup}
            onMouseOver={() => setShowMakeup(true)}
            onMouseLeave={() => setShowMakeup(false)}
          >
            <LinkContainer to="/c/skin-care">
              <NavDropdown.Item>Skin Care</NavDropdown.Item>
            </LinkContainer>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Pet Care</span>}
            show={showSkinCare}
            onMouseOver={() => setShowSkinCare(true)}
            onMouseLeave={() => setShowSkinCare(false)}
          >
            <NavDropdown.Item>Dog</NavDropdown.Item>
            <NavDropdown.Item>Cat</NavDropdown.Item>
            <NavDropdown.Item>Bird</NavDropdown.Item>
            <NavDropdown.Item>Horses</NavDropdown.Item>
            <NavDropdown.Item>Fish & Aquatic Pets</NavDropdown.Item>
            <NavDropdown.Item>Reptiles & Amphibians</NavDropdown.Item>
            <NavDropdown.Item>Small Animals</NavDropdown.Item>
            <LinkContainer to={"/c/pet_supplies"}>
              <NavDropdown.Item>Pet Food</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Get High</span>}
            show={showMen}
            onMouseOver={() => setShowMen(true)}
            onMouseLeave={() => setShowMen(false)}
          >
            <LinkContainer to={"/c/get-high"}>
              <NavDropdown.Item>Weed</NavDropdown.Item>
            </LinkContainer>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Face</span>}
            show={showFace}
            onMouseOver={() => setShowFace(true)}
            onMouseLeave={() => setShowFace(false)}
          >
            <NavDropdown.Item>Pet Care</NavDropdown.Item>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Mom & Baby</span>}
            show={showMomAndBaby}
            onMouseOver={() => setShowMomAndBaby(true)}
            onMouseLeave={() => setShowMomAndBaby(false)}
          >
            <NavDropdown.Item>Pet Care</NavDropdown.Item>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Hair</span>}
            show={showHair}
            onMouseOver={() => setShowHair(true)}
            onMouseLeave={() => setShowHair(false)}
          >
            <NavDropdown.Item>Pet Care</NavDropdown.Item>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Health & Wellness</span>}
            show={showHealthAndWellness}
            onMouseOver={() => setShowHealthAndWellness(true)}
            onMouseLeave={() => setShowHealthAndWellness(false)}
          >
            <NavDropdown.Item>Pet Care</NavDropdown.Item>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Personal Care</span>}
            show={showPersonalCare}
            onMouseOver={() => setShowPersonalCare(true)}
            onMouseLeave={() => setShowPersonalCare(false)}
          >
            <NavDropdown.Item>Pet Care</NavDropdown.Item>

            <NavDropdown.Item>Men</NavDropdown.Item>

            <NavDropdown.Item>Women</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="category-header">Health & Wellness</span>}
            show={showAppliances}
            onMouseOver={() => setShowAppliances(true)}
            onMouseLeave={() => setShowAppliances(false)}
            id="basic-nav-dropdown"
          >
            <Container className="eventsNav pt-0 mt-0">
              <Row>
                <Col xs="12" md="6" className="text-left">
                  <Dropdown.Header>Catering</Dropdown.Header>
                  <Dropdown.Item>Corporate</Dropdown.Item>
                  <Dropdown.Item>Private</Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Header>Classes</Dropdown.Header>
                  <Dropdown.Item>Barista 101</Dropdown.Item>
                  <Dropdown.Item>History of Coffee</Dropdown.Item>
                  <Dropdown.Item>Intro to Cafe Snobbery</Dropdown.Item>
                  <Dropdown.Divider className="d-md-none" />
                </Col>

                <Col xs="12" md="6" className="text-left">
                  <Dropdown.Header>Rentals</Dropdown.Header>
                  <Dropdown.Item>Fireside Room</Dropdown.Item>
                  <Dropdown.Item>Roasting Room</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Seasonal</Dropdown.Header>
                  <Dropdown.Item>Coldbrew Night</Dropdown.Item>
                  <Dropdown.Item>Campfire Coffee Class</Dropdown.Item>
                </Col>
              </Row>
            </Container>
          </NavDropdown>
        </Nav>
      </Container>
    </div>
  );
}

export default Categories;
