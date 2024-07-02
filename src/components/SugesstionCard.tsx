import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/SuggestionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTimes,
  faTimesCircle,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

interface SuggestionCardProps {
  banner: string;
  picture: string;
  name: string;
  bio: string;
  followedBy: string;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  banner,
  picture,
  name,
  bio,
  followedBy,
}) => {
  const [connect, setConnect] = useState<boolean>(false);
  return (
    <div className="suggestionCard border rounded">
      <div className="banner position-relative">
        <img
          src={banner}
          alt="banner"
          className="img-fluid rounded w-100 h-100"
        />
        <div className="profile-img position-absolute  start-50 translate-middle">
          <img src={picture} alt="profile" className="rounded-circle" />
        </div>
      </div>
      <div className="profile-card-body text-center ">
        <p className="profile-name fw-bold mt-2" title={name}>
          {name}
        </p>
        <p className="profile-bio p-1 text-secondary mb-4">{bio}</p>
        <p className="profile-followed-by text-secondary mb-auto ">
          {followedBy}
        </p>
        <button
          className={`connect-button ${connect === true ? "active" : ""}`}
          onClick={() => setConnect(true)}
        >
          {!connect && (
            <>
              <FontAwesomeIcon icon={faUserPlus} className="Icon" />
              Connect
            </>
          )}
          {connect && (
            <>
              <FontAwesomeIcon icon={faClock} className="Icon" />
              Pending
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SuggestionCard;
