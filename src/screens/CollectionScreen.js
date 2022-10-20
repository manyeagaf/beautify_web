import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import {
  Row,
  Col,
  Card,
  DropDown,
  Container,
  ListGroup,
  Button,
  Accordion,
  Form,
} from "react-bootstrap";
import { products } from "../products";
import ProductCarousel from "../components/ProductCarousel";
import Product from "../components/Product";

import { useDispatch, useSelector } from "react-redux";
import {
  listCategoryProducts,
  listProductDetails,
} from "../actions/productActions";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function CollectionScreen() {
  const { slug } = useParams();
  console.log(slug)
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const categoryProductsList = useSelector(
    (state) => state.categoryProductsList
  );
  const { error, loading, categoryProducts } = categoryProductsList;

  useEffect(() => {
    dispatch(listCategoryProducts(slug));
  }, [dispatch, slug]);
  return (
    <div className="collection-screen">
      <Container fluid="sm">
        <ProductCarousel />
        {/* <h1>{categoryProducts[1].category.name}</h1> */}
        <h1>All Products</h1>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col md={3}>
              <StickyBox offsetTop={0} offsetBottom={0}>
                <Card className="accodion-card">
                  <Accordion flush defaultActiveKey={0}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Short By: Popularity</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>

                <Card className="accodion-card">
                  <Accordion flush>
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header>Category</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check type="checkbox" aria-label="option 1">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Brand</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check type="checkbox" aria-label="option 1">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check type="checkbox" aria-label="option 1">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Price</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Discount</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Preference</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Skin Type</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Discount</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Name</Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:High To Low
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-2"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                              Price:Low To High
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check
                            type="checkbox"
                            aria-label="option 1"
                            className="mb-3"
                          >
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>New Arrivals</Form.Check.Label>
                          </Form.Check>
                          <Form.Check type="checkbox" aria-label="option 1">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>Customer Top</Form.Check.Label>
                          </Form.Check>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </StickyBox>
            </Col>
            <Col xs={9}>
              <Row>
                {categoryProducts?.map((product) => (
                  <Col sm={6} md={4} key={product.id}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default CollectionScreen;
