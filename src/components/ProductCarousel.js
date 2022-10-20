import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { carouselItems } from "../products";

function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel bg-dark"
    >
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            className="d-block w-100"
            src={item.image}
            alt="First slide"
            height={500}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
