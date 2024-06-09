import React, { useEffect, useState, useRef } from "react";
import DotnetSvg from "../../assets/net_svg.svg";

const Features: React.FC = () => {
  const spanWhiteRef = React.useRef<HTMLDivElement>(null);
  const [spanWhitePosition, setSpanWhitePosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (spanWhiteRef.current) {
        const rect = spanWhiteRef.current.getBoundingClientRect();
        setSpanWhitePosition({ top: rect.bottom, left: rect.left });
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
      <div className="trapezoid-secondary bg-secondary  ">
        <h3 className="title-home text-center text-light">
          Technologies I've been workin
          <span id="position-hypen-white" ref={spanWhiteRef}>
            g
          </span>
          .
        </h3>
        <div
          className="hyphen-white"
          style={{
            position: "absolute",
            top: `${spanWhitePosition.top + 5}px`,
            left: `${spanWhitePosition.left}px`,
          }}></div>
        <div className="d-flex">
          <div id="hex-1" className="hex d-flex">
            <div
              id="hex-background-1"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
          <div id="hex-2" className="hex d-flex">
            <div
              id="hex-background-2"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
        </div>
        <div className="d-flex">
          <div id="hex-3" className="hex d-flex">
            <div
              id="hex-background-3"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
          <div id="hex-4" className="hex d-flex">
            <div
              id="hex-background-4"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
        </div>
        <div className="d-flex">
          <div id="hex-5" className="hex d-flex">
            <div
              id="hex-background-5"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
        </div>
        <div className="d-flex">
          <div id="hex-6" className="hex d-flex">
            <div
              id="hex-background-6"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
          <div id="hex-7" className="hex d-flex">
            <div
              id="hex-background-7"
              style={{
                backgroundImage: `url(${DotnetSvg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
          </div>
        </div>
        {/* <div className="expansion d-flex justify-content-center align-items-center">
            <BsArrowsExpand size={"2em"} />
          </div> */}
      </div>
    </>
  );
};

export default Features;
