import React from "react";
import DiagonalCards from "../Publication/DiagonalCards";

const Publication: React.FC = () => {
  return (
    <>
      <div className="bg-publication">
        <div className="trapezoid-quaternary" id="publications">
          <h1
            className="text-center text-light"
            style={{
              paddingTop: "1.5em",
              position: "sticky",
              top: "25vh",
            }}>
            Publications created by me.
          </h1>
          <div style={{ marginTop: "6em" }}>
            <DiagonalCards></DiagonalCards>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publication;
