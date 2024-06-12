import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logoVTB from "../assets/vtb_solutions.jpg";

const CarouseComponents: React.FC = () => {
  return (
    <div className="px-4">
      <Carousel wrap={true} pause="hover">
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logoVTB} className="carousel-image" />
          </div>
          <Carousel.Caption></Carousel.Caption>
          <p className="teste mt-3 pb-4 text-center text-light">
            Business Intelligence (BI) and Artificial Intelligence solutions to optimize your management and boost your
            results.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logoVTB} className="carousel-image" />
          </div>
          <Carousel.Caption></Carousel.Caption>
          <p className="teste mt-3 pb-4 text-center text-light">
            Business Intelligence (BI) and Artificial Intelligence solutions to optimize your management and boost your
            results.
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouseComponents;
