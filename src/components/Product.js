import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Product({ product }) {
  const [show, setShow] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  var wishlistItems = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];
  const handeleMouseOver = () => {
    setShow(true);
  };
  const handeleMouseLeave = () => {
    setShow(false);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${product.slug}/p/${product.id}`);
  };
  function isInWishList() {
    let exist = false;
    wishlistItems.find((item) => {
      if (item.id === product.id) {
        exist = true;
      }
    });
    return exist;
  }
  const handleAddToWishlist = () => {
    !isInWishList() && wishlistItems.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  };

  return (
    <div>
      <Card
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ backgroundColor: "#ffffff" }}
        className="product-card"
      >
        <Card.Header>
          {product.is_on_sale && (
            <span className="card-header-featured card-header-text">
              Featured
            </span>
          )}

          <span className="card-header-bestseller">Bestseller</span>
        </Card.Header>
        <Link to={`/${product.slug}/p/${product.id}`} className="link">
          <Card.Img src={product.image1} height="250px"></Card.Img>
        </Link>

        <Card.Body>
          <Link
            to={`/${product.slug}/p/${product.id}`}
            className="link"
            target="_blank"
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
            <span style={{ fontWeight: "600" }}>₵{product.store_price}</span>
            <span style={{ color: "green" }}> 50% off</span>
          </Card.Text>
          <Card.Text as="div">
            <p style={{ color: "#E75175" }}>Enjoy free gift</p> ★★★☆☆
            <span style={{ fontWeight: "300", fontSize: "13px" }}>
              ( {product.number_of_reviews} )
            </span>
          </Card.Text>
          <div style={{ height: "60px" }}>
            {show ? (
              <div className="top-border">
                <div className="d-flex flex-row">
                  <button
                    onClick={handleAddToWishlist}
                    style={{
                      padding: "0px",
                      border: "none",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <BsHeart
                      className="m-3"
                      style={{
                        color: "#E75175",
                        fontSize: "25px",
                      }}
                    />
                  </button>

                  <button
                    className="btn btn-lg  btn-block flex-fill me-1"
                    onClick={handleNavigate}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-3">
                <span>14 Shades</span>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>

    // </Link>
  );
}

export default Product;
