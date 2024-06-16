import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logoVTB from "../assets/vtb_solutions.jpg";
import logoDokdex from "../assets/dokdex.jpg";
import logoJeep3 from "../assets/jeep.jpg";
import ModalCourse from "./HomePage/ModalCarouse";
import ModalContent from "./../assets/modalCarouse.json";

const CarouseComponents: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = React.useState(ModalContent[0]);
  const handleHide = () => setModalShow(false);

  const handleShowModal = (id: number) => {
    const selectedData = ModalContent.find((item) => item.id === id);
    if (selectedData) {
      setModalData(selectedData);
      setModalShow(true);
    }
  };

  return (
    <div className="px-4">
      <Carousel wrap={true} pause="hover">
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src={logoVTB}
              className="carousel-image"
              onClick={() => handleShowModal(1)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
          <p className="teste mt-3 pb-4 text-center text-light">
            Business Intelligence (BI) and Artificial Intelligence solutions to optimize your management and boost your
            results.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src={logoDokdex}
              className="carousel-image"
              onClick={() => handleShowModal(2)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
          <p className="teste mt-3 pb-4 text-center text-light">
            A startup providing innovative solutions tailored to the cryptocurrency market, seeking to develop solutions
            in this emerging sector.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src={logoJeep3}
              className="carousel-image"
              onClick={() => handleShowModal(3)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
          <p className="teste mt-3 pb-4 text-center text-light">
            Jeep is an iconic brand known for its rugged, versatile vehicles designed for off-road performance and
            adventure.
          </p>
        </Carousel.Item>
      </Carousel>

      <ModalCourse
        show={modalShow}
        onHide={handleHide}
        title={modalData.title}
        date={modalData.date}
        description={modalData.description}
        activities={modalData.activities}
      />
    </div>
  );
};

export default CarouseComponents;
