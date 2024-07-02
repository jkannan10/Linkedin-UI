import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faRedo,
  faPaperPlane,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Share.css";

const Share: React.FC = () => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faEdit} className="icon" />
        Repost with your thoughts
      </div>
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faRedo} className="icon" />
        Repost
      </div>
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        Send as message
      </div>
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faLink} className="icon" />
        Copy link
      </div>
    </div>
  );
};

export default Share;
