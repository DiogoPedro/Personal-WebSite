import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { FaCog, FaServer } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const Capabilities: React.FC = () => {
  return (
    <div className="bg-secondary mt-3 ml-3">
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {/* Primeiro Card */}
        <div className="col">
          <div className="card-capabilities d-flex pt-3">
            <div className="d-flex justify-content-center col-3">
              <MdOutlineWeb className="w-100" size={30} color="white" />
            </div>
            <div className="col-9">
              <h4 className="text-light">Web Apps</h4>
              <p className="text-light">Build full stack web apps with React, Blazor, Navilla.</p>
            </div>
          </div>
        </div>

        {/* Segundo Card */}
        <div className="col">
          <div className="card-capabilities d-flex pt-3">
            <div className="d-flex justify-content-center col-3">
              <FaCog className="w-100" size={30} color="white" />
            </div>
            <div className="col-9">
              <h4 className="text-light">Automation</h4>
              <p className="text-light">Automate processes using modern tools and technologies.</p>
            </div>
          </div>
        </div>

        {/* Terceiro Card */}
        <div className="col">
          <div className="card-capabilities d-flex pt-3">
            <div className="d-flex justify-content-center col-3">
              <RiSignalTowerFill className="w-100" size={30} color="white" />
            </div>
            <div className="col-9">
              <h4 className="text-light">Networking</h4>
              <p className="text-light">Design and implement robust networking solutions.</p>
            </div>
          </div>
        </div>

        {/* Quarto Card */}
        <div className="col">
          <div className="card-capabilities d-flex pt-3">
            <div className="d-flex justify-content-center col-3">
              <FaServer className="w-100" size={30} color="white" />
            </div>
            <div className="col-9">
              <h4 className="text-light">Microservices</h4>
              <p className="text-light">Architect scalable microservices-based applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
