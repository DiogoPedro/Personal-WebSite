// src/pages/AboutPage.tsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CarouseComponents from "../../components/Carouse";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center">
        <CarouseComponents />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
