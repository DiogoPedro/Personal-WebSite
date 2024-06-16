import React, { useState } from "react";
import UfpeImg from "../../assets/ufpe.png";
import { Card } from "react-bootstrap";

const Publication: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  const fullText = `CQRS, or Command Query Responsibility Segregation, is an architectural pattern that separates reading (queries) and writing (commands) operations into separate models. This segregation allows for the optimization of each model independently based on its specific requirements.`;

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
            }}>
            Publications created by me.
          </h3>
          <div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-9 card-size">
                <Card>
                  <Card.Img
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                  <Card.Body onClick={toggleExpanded} className="bg-card-iceWhite" style={{ cursor: "pointer" }}>
                    <Card.Title>CQRS</Card.Title>
                    <Card.Text className={`card-text ${expanded ? "expanded" : ""}`}>
                      {expanded ? fullText : truncateText(fullText, 150)}
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
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                  <Card.Body onClick={toggleExpanded} className="bg-card-iceWhite" style={{ cursor: "pointer" }}>
                    <Card.Title>CQRS</Card.Title>
                    <Card.Text className={`card-text ${expanded ? "expanded" : ""}`}>
                      {expanded ? fullText : truncateText(fullText, 150)}
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
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                  <Card.Body onClick={toggleExpanded} className="bg-card-iceWhite" style={{ cursor: "pointer" }}>
                    <Card.Title>CQRS</Card.Title>
                    <Card.Text className={`card-text ${expanded ? "expanded" : ""}`}>
                      {expanded ? fullText : truncateText(fullText, 150)}
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
                    src={UfpeImg}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />
                  <Card.Body onClick={toggleExpanded} className="bg-card-iceWhite" style={{ cursor: "pointer" }}>
                    <Card.Title>CQRS</Card.Title>
                    <Card.Text className={`card-text ${expanded ? "expanded" : ""}`}>
                      {expanded ? fullText : truncateText(fullText, 150)}
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
