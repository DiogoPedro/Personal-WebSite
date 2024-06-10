import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgFake from "../assets/img-fake.svg";
import netSvg from "../assets/net_svg.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouseComponents: React.FC = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={netSvg} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={netSvg} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={netSvg} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouseComponents;
