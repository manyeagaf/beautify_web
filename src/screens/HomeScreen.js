
import React, { useState, useEffect } from "react";
import ProductCarousel from "../components/ProductCarousel";
import Brands from "../components/Brands";
import CategoryHorizontalScroll from "../components/CategoryHorizontalScroll";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, listProductDetails } from "../actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { Row, Col, Container } from "react-bootstrap";
import { getUserDetails } from "../actions/userActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
       <ProductCarousel /> 
      <Brands />  
     <CategoryHorizontalScroll /> 
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {products?.map((product) => (
              <Col sm={6} md={4} lg={3} key={product.id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default HomeScreen;
