import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/HomePage/Features";
import Presentation from "../../components/HomePage/Presentation";
import Works from "../../components/HomePage/CarouseWorks";

import "./HomePage.css";
import Publication from "../../components/HomePage/Publication";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Presentation />
      <Features />
      <Works />
      <Publication />
      <Footer />
    </>
  );
};

export default HomePage;
