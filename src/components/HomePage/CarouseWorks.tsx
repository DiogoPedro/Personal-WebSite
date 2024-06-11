import React from "react";
import CarouseComponents from "../Carouse";

const PresentationWorks: React.FC = () => {
  return (
    <div className="bg-CarouseWorks">
      <div className="trapezoid-third">
        <h3 className="title-home text-center text-light" style={{ paddingBottom: "1.2em" }}>
          Projects I have worked on.
        </h3>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <CarouseComponents />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PresentationWorks;
