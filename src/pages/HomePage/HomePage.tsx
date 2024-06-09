import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";
import UfpeImg from "../../assets/ufpe.png";
import DotnetSvg from "../../assets/net_svg.svg";

const HomePage: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const spanRef = useRef(null);
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
      <Navbar />
      <div className="home-page bg-secondary">
        <div className="trapezoid">
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
        <div className="bg-secondary vh-100">
          <h3 className="title-home text-center text-light">Technologies I've been working.</h3>
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
        </div>

        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default HomePage;
