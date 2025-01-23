import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./card.css";

const Card = ({ title, description, website, technologies, link }) => {
  return (
    <div className="card-container">
      <h4>{title}</h4>
      <p className="card-description">{description}</p>
      <p className="technologies">{technologies}</p>
      <div className="card-icons">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
