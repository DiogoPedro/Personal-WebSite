import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/HomePage/Features";
import Presentation from "../../components/HomePage/Presentation";

import "./HomePage.css";

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

  return (
    <>
      <Navbar />
      <div className="home-page bg-secondary">
        <Presentation />
        <Features />
        <div className="bg-primary">
          <h1>Oiiii</h1>
        </div>

        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default HomePage;
