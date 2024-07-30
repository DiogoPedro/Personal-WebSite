import React, { useEffect, useState } from "react";
import DotnetSvg from "../../assets/net_svg.svg";
import DockerSvg from "../../assets/docker2.svg";
import MongoDbPng from "../../assets/mongodb4.png";
import ReactSvg from "../../assets/React_Logo_SVG.svg";
import TypeScriptX from "../../assets/typescript.png";
import { BsArrowsExpand } from "react-icons/bs";

const Features: React.FC = () => {
  const spanWhiteRef = React.useRef<HTMLDivElement>(null);
  const [spanWhitePosition, setSpanWhitePosition] = useState({
    top: 0,
    left: 0,
  });

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
      <div className="bg-Works">
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
            }}
          ></div>
          <div className="d-flex">
            <div id="azure-hex" className="hex d-flex">
              <img
                className="position-relative"
                id="azure-background"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                alt="Azure Logo"
              />
            </div>
            <div id="react-hex" className="hex d-flex">
              <img
                className="position-relative"
                id="react-background"
                src={ReactSvg}
                alt="React"
              />
            </div>
          </div>
          <div className="d-flex">
            <div id="typescript-hex" className="hex d-flex">
              <img
                className="position-relative hex"
                id="typescript-background"
                src={TypeScriptX}
                alt="React"
              />
            </div>
            <div className="hex d-flex">
              <div
                id="kubernetes-hex"
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="d-flex">
            <div id="docker-hex" className="hex d-flex">
              <div
                id="docker-background"
                style={{
                  backgroundImage: `url(${DockerSvg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="d-flex">
            <div id="mongodb-hex" className="hex d-flex">
              <div
                id="mongodb-hex-background"
                style={{
                  backgroundImage: `url(${MongoDbPng})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div id="dotnet-hex" className="hex d-flex">
              <div
                id="dotnet-hex-background"
                style={{
                  backgroundImage: `url(${DotnetSvg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="expansion d-flex justify-content-center align-items-center">
            <BsArrowsExpand size={"2em"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
