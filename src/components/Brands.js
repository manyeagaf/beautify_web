import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { carouselItems } from "../products";

function Brands() {
  return (
    <Container fluid className="brands content-padder">
      <h1>Big Brands,Bigger Offers</h1>

      <Row>
        {carouselItems.map((item) => (
          <Col sm={12} md={4} key={item.id}>
            <Card className="card">
              <Image src={item.image} height={400} />

              <Card.Title className="card-title">{item.name}</Card.Title>
              <Card.Text>{item.deccription}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Brands;
