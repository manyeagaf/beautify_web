import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { categoryList, products } from "../products";

function CategoryHorizontalScroll() {
  return (
    <Container>
      <Row className="scrolling-wrapper flex-row flex-nowrap mt-4 pb-4 pt-2">
        {categoryList.map((category) => (
          <Col className="col-5" key={category.id}>
            <Card>
              <Image src={products[category.id].image} height={400} />
              <Card.Title>{category.name}</Card.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryHorizontalScroll;
