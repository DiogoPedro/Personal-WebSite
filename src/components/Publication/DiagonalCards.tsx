import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Publication.css";
import UfpeImg from "../../assets/ufpe.png";

const DiagonalCards = () => {
  const [expanded, setExpanded] = useState(false);
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];
  const fullText = `CQRS, or Command Query Responsibility Segregation, is an architectural pattern that separates reading (queries) and writing (commands) operations into separate models. This segregation allows for the optimization of each model independently based on its specific requirements.`;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="grid-container mx-2">
      {cards.map((card, index) => (
        <div key={index} style={{ gridColumnStart: index + 1, gridRowStart: index + 1 }}>
          <Card style={{ width: "100%", borderRadius: "10px" }}>
            <Card.Img
              src={UfpeImg}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                margin: "auto",
              }}
            />
            <Card.Body
              onClick={toggleExpanded}
              className="bg-card-iceWhite"
              style={{ cursor: "pointer", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
              <Card.Title>CQRS</Card.Title>
              <Card.Text className={`card-text ${expanded ? "expanded" : ""}`}>
                {expanded ? fullText : truncateText(fullText, 150)}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DiagonalCards;
