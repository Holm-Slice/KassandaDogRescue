import React from "react";
import { Carousel } from "react-bootstrap";
import "./ImageCarousel.css";
import dogrescue1 from "../images/dogrescue1.jpeg";
import dogrescue2 from "../images/dogrescue2.jpeg";
import dogrescue3 from "../images/dogrescue3.jpeg";
import dogrescue4 from "../images/dogrescue4.jpeg";
import dogrescue5 from "../images/dogrescue5.jpeg";
import dogrescue6 from "../images/dogrescue6.jpeg";

const ImageCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={dogrescue1} alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={dogrescue2} alt="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={dogrescue3} alt="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={dogrescue4} alt="Fourth slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={dogrescue5} alt="Fifth slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={dogrescue6} alt="Sixth slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default ImageCarousel;
