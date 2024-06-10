import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/HomePage/Features";
import Presentation from "../../components/HomePage/Presentation";
import Works from "../../components/HomePage/CarouseWorks";

import "./HomePage.css";
import Publication from "../../components/HomePage/Publication";

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
        <Works />
        <Publication />

        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default HomePage;
