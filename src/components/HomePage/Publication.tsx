import React, { useEffect, useState } from "react";
import UfpeImg from "../../assets/ufpe.png";
import { Image } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

const Publication: React.FC = () => {
  const spanRef = React.useRef<HTMLDivElement>(null);
  const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (spanRef.current) {
        const rect = spanRef.current.getBoundingClientRect();
        setSpanPosition({ top: rect.bottom, left: rect.left });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-publication">
        <div className="trapezoid-quaternary">
          <h3
            className="text-center text-light"
            style={{
              fontSize: "4.4em",
              paddingTop: "1.3em",
              position: "sticky",
              top: "25vh", // 50% of the viewport height
            }}
          >
            Publications created by me.
          </h3>
          <div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-9 card-size">
                <Card>
                  <Card.Img
                    variant="bottom"
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />{" "}
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-7"></div>
              <div className="col-4 card-size">
                <Card>
                  <Card.Img
                    variant="bottom"
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />{" "}
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6 card-size">
                <Card>
                  <Card.Img
                    variant="bottom"
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />{" "}
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-1 card-size">
                <Card>
                  <Card.Img
                    variant="bottom"
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />{" "}
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publication;
