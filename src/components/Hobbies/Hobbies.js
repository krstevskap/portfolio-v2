import React, { useState } from "react";
import "./hobbies.css";
import icon1 from "../../assets/comic-logo4.png";
import icon2 from "../../assets/comic-logo5.png";
import icon3 from "../../assets/comic-logo6.png";

const Hobbies = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleComicsClick = () => {
    setShowIcons(true);
    setTimeout(() => setShowIcons(false), 2000);
  };
  return (
    <div className="hobbies-container box">
      <h3>Hobbies</h3>
      {showIcons && (
        <div className="all-icons">
          <img src={icon1} alt="comic-icon" className="comic-icon" />
          <img src={icon2} alt="comic-icon" className="comic-icon" />
          <img src={icon3} alt="comic-icon" className="comic-icon" />
        </div>
      )}
      <ul>
        <li>
          <a
            className="change-color"
            href="https://steamcommunity.com/profiles/76561199262764790"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gaming
          </a>
        </li>
        <li>Painting</li>
        <li className="change-color">Photography</li>
        <li>Watching movies</li>
        <li>
          Reading books and{" "}
          <span className="change-color" onClick={handleComicsClick}>
            comics
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
