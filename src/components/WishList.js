import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
function WishList() {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")));
  }, []);
  const removeFromWishlist = (product) => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <h2 className="border-bottom">Wishlist ({wishlist.length})</h2>
      <Row>
        {localStorage.getItem("wishlist") &&
          wishlist.map((product) => (
            <Col md={4}>
              <Card>
                <Card.Header>
                  <button onClick={() => removeFromWishlist(product)}>
                    <AiOutlineClose />
                  </button>
                </Card.Header>
                <Link to={`/${product.slug}/p/${product.id}`} className="link">
                  <Card.Img
                    src={
                      product.media !== undefined && product.media[0]?.img_url
                    }
                    height="250px"
                  ></Card.Img>
                </Link>

                <Card.Body>
                  <Link
                    to={`/${product.slug}/p/${product.id}`}
                    className="link"
                  >
                    <Card.Title>
                      <strong>{product.name}</strong>{" "}
                    </Card.Title>
                  </Link>
                  <Card.Text>
                    GH:{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      ₵{product.sale_price}
                    </span>{" "}
                    <span style={{ fontWeight: "600" }}>
                      ₵{product.store_price}
                    </span>
                    <span style={{ color: "green" }}> 50% off</span>
                  </Card.Text>
                  <Card.Text as="div">
                    ★★★☆☆
                    <span style={{ fontWeight: "300", fontSize: "13px" }}>
                      ( {product.number_of_reviews} )
                    </span>
                  </Card.Text>
                  <button className="btn btn-lg  flex-fill me-1 primary-color">
                    move to cart
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default WishList;
