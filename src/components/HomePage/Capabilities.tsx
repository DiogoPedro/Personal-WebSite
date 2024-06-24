import React, { useState } from "react";
import { MdOutlineWeb } from "react-icons/md";
import { FaCog, FaServer } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const Capabilities: React.FC = () => {
  const [iconColors, setIconColors] = useState({
    web: "white",
    cog: "white",
    server: "white",
    signal: "white",
  });

  const changeIconColor = (icon: string, color: string) => {
    setIconColors((prev) => ({ ...prev, [icon]: color }));
  };

  return (
    <div className="row px-3">
      {/* Primeiro Card */}
      <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
        <div
          className="card-capabilities d-flex pt-3"
          onMouseEnter={() => changeIconColor("web", "#9780e4")}
          onMouseLeave={() => changeIconColor("web", "white")}>
          <div className="d-flex justify-content-center col-3">
            <MdOutlineWeb size={30} color={iconColors.web} />
          </div>
          <div className="col-9">
            <h4>Web Apps</h4>
            <div style={{ paddingRight: "5px" }}>
              <p>Build web apps with React, AspNet MVC, Blazor and Navilla.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Segundo Card */}
      <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
        <div
          className="card-capabilities d-flex pt-3"
          onMouseEnter={() => changeIconColor("cog", "#9780e4")}
          onMouseLeave={() => changeIconColor("cog", "white")}>
          <div className="d-flex justify-content-center col-3">
            <FaCog size={27} color={iconColors.cog} />
          </div>
          <div className="col-9">
            <h4>APIs</h4>
            <div style={{ paddingRight: "5px" }}>
              <p>Develop APIs using Asp Net Core, Node and Express Node.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terceiro Card */}
      <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
        <div
          className="card-capabilities d-flex pt-3"
          onMouseEnter={() => changeIconColor("signal", "#9780e4")}
          onMouseLeave={() => changeIconColor("signal", "white")}>
          <div className="d-flex justify-content-center col-3">
            <RiSignalTowerFill size={30} color={iconColors.signal} />
          </div>
          <div className="col-9">
            <h4>Real Time</h4>
            <div style={{ paddingRight: "5px" }}>
              <p>Protocols / Bi-directional communication: gRPC, RabbitMQ, SignalR.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quarto Card */}
      <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
        <div
          className="card-capabilities d-flex pt-3"
          onMouseEnter={() => changeIconColor("server", "#9780e4")}
          onMouseLeave={() => changeIconColor("server", "white")}>
          <div className="d-flex justify-content-center col-3">
            <FaServer size={25} color={iconColors.server} />
          </div>
          <div className="col-9">
            <h4>Microservices</h4>
            <div style={{ paddingRight: "5px" }}>
              <p>Creation of microservices using Docker containers and Azure Kubernetes Service etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
