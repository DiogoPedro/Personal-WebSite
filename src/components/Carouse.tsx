import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import imgUfpe from "../assets/ufpe.png";

const CarouseComponents: React.FC = () => {
  return (
    <>
      <Carousel wrap={true} pause="hover">
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image src={imgUfpe} width={200} height={350} alt="350x350" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image src={imgUfpe} width={200} height={350} alt="350x350" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image src={imgUfpe} width={200} height={350} alt="350x350" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouseComponents;
