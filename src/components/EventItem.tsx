import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/EventItem.css";
import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
  attend: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text, attend }) => {
  return (
    <div className="card border rounded eventCard">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-texts  text-secondary">{attend}</p>
        <div className="text-center mt-5">
          <button className="viewBtn">View</button>
          <span className="viewSpan">
            <FontAwesomeIcon icon={faShare} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
