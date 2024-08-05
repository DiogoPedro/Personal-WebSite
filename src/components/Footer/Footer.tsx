import React from "react";
import logoWebSite from "../../assets/IconeFundoCinza.png";
import { FaLinkedin, FaInstagram, FaEnvelope, FaMobileAlt, FaWhatsapp, FaFileExport } from "react-icons/fa";

const Footer: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Phone number copied to clipboard");
  };

  return (
    <footer className="bg-footer footer" id="contact">
      <div className="row">
        <div className="col-12 col-md-6 mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <img src={logoWebSite} alt="Logo" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <a href="https://www.linkedin.com/in/diogo-dpfs" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mx-1" size={20} color="white" />
            </a>
            <a href="mailto:diogo_francadd5@hotmail.com">
              <FaEnvelope className="mx-1" size={20} color="white" />
            </a>
            <a href="https://www.instagram.com/diogo_francadd5" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="mx-1" size={20} color="white" />
            </a>
            <a href="https://wa.me/5581988356989" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mx-1" size={20} color="white" />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div>
            <p className="mt-2 text-light text-footer">
              I'm open to discussing any opportunities or collaborations you may have in mind.
            </p>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <div className="d-flex align-items-center">
                <FaLinkedin size={18} className="mt-1" color="white" />
                <p className="text-light mx-2 mb-0">
                  <a
                    href="https://www.linkedin.com/in/diogo-dpfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light">
                    Diogo França
                  </a>
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FaEnvelope size={18} className="mt-1" color="white" />
                <p className="text-light mx-2 mb-0 word-break">
                  <a href="mailto:diogo_francadd5@hotmail.com" className="text-light">
                    diogo_francadd5@hotmail.com
                  </a>
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FaMobileAlt size={18} className="mt-1" color="white" />
                <p
                  className="text-light mx-2 mb-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => copyToClipboard("+5581988356989")}>
                  +55 (81) 98835-6989
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FaFileExport size={18} className="mt-1" color="white" />
                <p className="text-light mx-2 mb-0">
                  <a
                    href="../../../public/cv_diogo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light">
                    My resume skills.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center text-light mt-3">
        <span className="text-light">© 2024 Diogo Pedro de França Silva. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
