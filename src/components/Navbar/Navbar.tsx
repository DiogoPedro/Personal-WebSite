import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  // Função para lidar com o clique em links da navegação
  const handleNavLinkClick: EventListener = (event) => {
    const target = event.target as HTMLAnchorElement;
    const anchorId = target.getAttribute("href");
    if (anchorId && anchorId.startsWith("#")) {
      const targetElement = document.querySelector(anchorId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="60" height="30" className="d-inline-block align-text-top" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#publications">
                Publications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
