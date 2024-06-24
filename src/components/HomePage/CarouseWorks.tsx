import React from "react";
import CarouseComponents from "../Carouse";
import Capabilities from "./Capabilities";

const PresentationWorks: React.FC = () => {
  return (
    <div className="bg-CarouseWorks">
      <div className="trapezoid-third" id="works">
        <h3 className="text-center text-light px-1" style={{ paddingBottom: "1.2em", paddingTop: "1.7em" }}>
          Organizations with Which I Have Collaborated.
        </h3>
        <div className="row">
          <div className="col-0 col-sm-0 col-md-3"></div>
          <div className="col-12 col-sm-12 col-md-6 p-3">
            <CarouseComponents />
          </div>
          <div className="col-0 col-sm-0 col-md-3"></div>
        </div>
        <p className="text-center text-light" style={{ fontSize: "1.5em", paddingBottom: "1em" }}>
          A summary of my qualifications.
        </p>
        <Capabilities></Capabilities>
      </div>
    </div>
  );
};

export default PresentationWorks;
