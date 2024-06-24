import React, { useEffect, useState } from "react";
import UfpeImg from "../../assets/ufpe.png";

const Presentation: React.FC = () => {
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
      <div className="bg-secondary">
        <div className="trapezoid-primary">
          <h3 className="title-home text-center">
            I am a web developer passionate about{" "}
            <span className="text-color">
              technolog
              <span id="position-y" ref={spanRef}>
                y
              </span>
              .
            </span>
          </h3>
          <div
            className="hyphen"
            style={{
              position: "absolute",
              top: `${spanPosition.top + 5}px`,
              left: `${spanPosition.left}px`,
            }}></div>
          <div className="mt-5">
            <p className="title-content">Systems integration using artificial intelligence.</p>
            <p className="title-content">Degree in Computer Engineering from the Federal University of Pernambuco.</p>
          </div>
          <div className="d-flex flex-row-reverse">
            <img src={UfpeImg} height="60px" alt="UFPE" className="ufpe-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
