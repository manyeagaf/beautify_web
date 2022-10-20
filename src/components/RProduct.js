import React from "react";
import { Row, Col, Card, Container, Button, Image } from "react-bootstrap";

function RProduct({ product }) {
  return (
    <div>
      <Card>
        <Image className="card-img-top" src={product.image} />
        <Card.Body>
          <div className="text-center mt-1">
            <Card.Title>{product.name}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RProduct;
