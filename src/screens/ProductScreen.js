import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Image,
  Card,
  Form,
  Table,
  Tab,
  Tabs,
  Breadcrumb,
} from "react-bootstrap";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Product from "../components/Product";
import StickyBox from "react-sticky-box";
import { addToCart } from "../actions/cartActions";

function ProductScreen() {
  const [size, setSize] = useState("M");
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(1);
  const { slug, id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const handleAddToCart = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Container style={{ backgroundColor: "#ffffff" }}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Product</Breadcrumb.Item>
              <Breadcrumb.Item>Collection</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col className="col-lg-1 order-lg-1 order-2 ">
                <ul>
                  {product.image1 && (
                    <li className="unselected-images">
                      <div>
                        <Image
                          src={product.image1}
                          className="product-image-unselected"
                          onMouseMove={() => setSelectedImage(1)}
                        />
                      </div>
                    </li>
                  )}
                  {product.image2 && (
                    <li className="unselected-images">
                      <div>
                        <Image
                          src={product.image2}
                          className="product-image-unselected"
                          onMouseMove={() => setSelectedImage(2)}
                        />
                      </div>
                    </li>
                  )}
                  {product.image3 && (
                    <li className="unselected-images">
                      <div>
                        <Image
                          src={product.image3}
                          className="product-image-unselected"
                          onMouseMove={() => setSelectedImage(3)}
                        />
                      </div>
                    </li>
                  )}
                  {product.image4 && (
                    <li className="unselected-images">
                      <div>
                        <Image
                          src={product.image4}
                          className="product-image-unselected"
                          onMouseMove={() => setSelectedImage(4)}
                        />
                      </div>
                    </li>
                  )}
                </ul>
              </Col>
              <Col className="col-lg-3 order-lg-2 order-1 right-border">
                <div>
                  {selectedImage === 1 ? (
                    <Image src={product.image1} width="200px" />
                  ) : selectedImage === 2 ? (
                    <Image src={product.image2} width="200px" />
                  ) : selectedImage === 3 ? (
                    <Image src={product.image3} width="200px" />
                  ) : (
                    <Image src={product.image4} width="200px" />
                  )}
                </div>
              </Col>
              <Col className="col-lg-6 order-3">
                <div>
                  <h4>{product.name}</h4>
                </div>
                <div>
                  ★★★☆☆
                  <span style={{ fontWeight: "300", fontSize: "13px" }}>
                    {" "}
                    ( 300 )
                  </span>
                </div>
                <div>GHC:₵ {product.store_price}</div>
                <p>Inclusive all taxes</p>

                <Form.Group as={Col} md={2}>
                  <Form.Select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    as={Col}
                    md={2}
                  >
                    {["S", "M", "L", "XL", "XXL", "Monster Size"].map(
                      (value) => (
                        <option key={value}>{value}</option>
                      )
                    )}
                  </Form.Select>
                </Form.Group>

                <div className="sizes">
                  {["S", "M", "L", "XL", "XXL", "Monster Size"].map((value) =>
                    value === size ? (
                      <span className="border size-selected" key={value}>
                        {value}
                      </span>
                    ) : (
                      <span className="border" key={value}>
                        {value}
                      </span>
                    )
                  )}
                </div>
                <Form.Group as={Col} md={3}>
                  <Form.Select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    style={{ margin: "30px 0px 0px 0px" }}
                    as={Col}
                    md={2}
                  >
                    Quatity
                    {[...Array(10).keys()].map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <div style={{ margin: "30px 0px 0px 0px" }}>
                  <button
                    className="btn btn-lg btn-block flex-fill me-1 pp-btn"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <div className="product-details-section">
              <h2>Product Description</h2>
            </div>

            <Row>
              <Col md={8}>
                <div
                  style={{ backgroundColor: "#ffffff" }}
                  className="product-description"
                >
                  <div>
                    <span className="product-description-title">
                      Style Number:
                    </span>
                    <span> FP04</span>
                  </div>
                  <div>
                    <span className="product-description-title">
                      Collection Name:
                    </span>
                    <span> POP</span>
                  </div>
                  <div>
                    <span className="product-description-title">
                      Product Color:
                    </span>
                    <span> Grey</span>

                    <ul>
                      <li>Super Combed Cotton fabric.</li>
                      <li>Modern fit for perfect shape & comfort.</li>
                      <li>Contoured armholes for ease of movement.</li>
                      <li>Neon colour back neck tape for a trendy look.</li>
                      <li>Authentic Jockey branding label in Neon colour.</li>
                      <li>
                        To be worn as sportswear, loungewear and innerwear.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="product-description-title">
                      Material :
                    </span>
                    <span> Cotton</span>
                  </div>

                  <div>
                    <span className="product-description-title">
                      Wash Care :
                    </span>
                    <ul>
                      <li>Do not bleach</li>
                      <li>Do not dry clean</li>
                      <li>Do not iron</li>
                      <li>Gentle wash</li>
                      <li>Wash inside out</li>
                      <li>Wash with like colours</li>
                      <li>Tumble dry low</li>
                      <li>Line dry in the shade</li>
                    </ul>
                  </div>
                  <div className="size-table">
                    <Table
                      striped
                      hover
                      responsive
                      className="table-sm "
                      bordered
                    >
                      <thead>
                        <tr>
                          <th>Sizes</th>
                          <th>To fit chest (In.)</th>
                          <th>To fit chest (cm.)</th>
                          <th>CB Length(EXR) (In.)</th>
                          <th>CB Length(EXR) (cm.)</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="table-c-size">S</td>
                          <td>33</td>
                          <td>84</td>
                          <td>26</td>
                          <td>66</td>
                        </tr>
                        <tr>
                          <td className="table-c-size">M</td>
                          <td>33</td>
                          <td>84</td>
                          <td>26</td>
                          <td>66</td>
                        </tr>
                        <tr>
                          <td className="table-c-size">L</td>
                          <td>33</td>
                          <td>84</td>
                          <td>26</td>
                          <td>66</td>
                        </tr>
                        <tr>
                          <td className="table-c-size">Xl</td>
                          <td>33</td>
                          <td>84</td>
                          <td>26</td>
                          <td>66</td>
                        </tr>
                        <tr>
                          <td className="table-c-size">XXL</td>
                          <td>33</td>
                          <td>84</td>
                          <td>26</td>
                          <td>66</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div>
                    <p>
                      Alternatively, you can also find many more products from
                      the Jockey Grey Melange & Teal Green Vest range.
                    </p>
                  </div>
                  <div>
                    <span className="product-description-title">
                      Country of Origin:
                    </span>
                    <span> Ghana</span>
                  </div>
                  <div>
                    <span className="product-description-title">
                      Manufacturer:
                    </span>
                    <span> The Zen of Python</span>
                  </div>
                </div>
              </Col>

              <Col md={3} sm={6} lg={3}>
                <StickyBox offsetTop={0} offsetBottom={0}>
                  <Product product={product} />
                </StickyBox>
              </Col>
            </Row>
          </Container>
          <Container>
            <div className="product-details-section">
              <h2>Product Details</h2>
            </div>
            <Row>
              <Col md={8}>
                <div
                  style={{ backgroundColor: "#ffffff" }}
                  className="product-details"
                >
                  <Tabs
                    defaultActiveKey="0"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="0" title="Ratings and Reviews">
                      3/5 Overall Rating
                      <div>{product.description}</div>
                    </Tab>
                    <Tab eventKey="1" title="Product Q&A"></Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
