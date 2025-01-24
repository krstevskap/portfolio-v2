import React from "react";
import "./technologies.css";

const Technologies = () => {
  return (
    <div className="technologies-container box">
      <h3>Technologies</h3>
      <div className="icons">
        <div className="icons-top">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="html-icon"
            style={{ backgroundColor: "#E44D266f" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="css-icon"
            style={{ backgroundColor: "#1572B66f" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="javascripit-icon"
            style={{ backgroundColor: "#f0da4f6f" }}
          />
        </div>
        <div className="icons-bottom">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="react-icon"
            style={{ backgroundColor: "#97eaff6f" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="java-icon"
            style={{ backgroundColor: "#0074BD6f" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="postgresql-icon"
            style={{ backgroundColor: "#3367916f" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
