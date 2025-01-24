import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container box">
      <h3>Contact</h3>
      <div className="contact-icons">
        <a
          href="https://github.com/krstevskap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/petrana-krstevska-b28a67276/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/pkrstevska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
