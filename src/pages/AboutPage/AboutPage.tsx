// src/pages/AboutPage.tsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hex"></div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
