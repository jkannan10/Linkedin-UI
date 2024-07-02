import React from "react";
import "../assets/styles/ProfileCard.css";
import dev from "../assets/images/dev2.jpg";
import logo from "../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const ProfileCard: React.FC = () => {
  return (
    <div className="border rounded profileCard mb-3 bg-white">
      <div className="banner">
        <img src={logo} alt="banner" className="img-fluid rounded w-100" />
      </div>
      <div className="text-center ProfileImg">
        <img src={dev} alt="profile" className="rounded-circle profile-img" />
      </div>
      <div className="text-center p-1">
        <h5 className="mt-2 mb-1 profilename">AbsaklcnR</h5>
        <p className="text-muted mb-2 bio">
          Full Stack Intern || Kce || JAVA || C || React || Express{" "}
        </p>
      </div>
      <div className="stats d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center py-2 px-3 Views">
          <div>
            <p className="me-3 mb-0 text-secondary ">Profile Views</p>
          </div>
          <div>
            <p className=" mb-0 count">119</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center py-2 px-3 Views">
          <div>
            <p className="me-3 mb-0 text-secondary">Post Impressions</p>
          </div>
          <div>
            <p className=" mb-0 count">85</p>
          </div>
        </div>
      </div>

      <div className="promotion text-center border-bottom p-2 ">
        <p className="">Strengthen your profile with an AI writing assistant</p>
        <p className="fw-bold text-center p-2">
          Get hired faster. Try Premium free.
        </p>
      </div>
      <div className="text-center py-2 BtnSave">
        <button className="savedBtn">
          <FontAwesomeIcon icon={faBookmark} /> Saved items
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
