import React from "react";
import CarouseComponents from "../Carouse";

const PresentationWorks: React.FC = () => {
  return (
    <>
      <div className="">
        <h3 className="title-home text-center text-light" style={{ paddingBottom: "1.2em" }}>
          Projects I have worked on.
          {/* <span>y</span>. */}
        </h3>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <CarouseComponents />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default PresentationWorks;
