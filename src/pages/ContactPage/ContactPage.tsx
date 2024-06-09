// src/pages/ContactPage.tsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Contact Me</h1>
        <p>This is the contact page content.</p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
