import React from "react";
import "../assets/styles/ProfileCard.css";
import dev from "../assets/images/dev2.jpg";
import logo from "../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const ProfileCard: React.FC = () => {
  return (
    <div className="border profileCard mb-3 bg-white">
      <div className="banner">
        <img src={logo} alt="banner" className="img-fluid w-100" />
      </div>
      <div className="text-center ProfileImg">
        <img src={dev} alt="profile" className="rounded-circle profile-img" />
      </div>
      <div className="text-center p-1">
        <h5 className="mt-4 mb-1 profilename">AbsaklcnR</h5>
        <p className="text-muted mb-2 bio p-1">
          Full Stack Intern || Kce || JAVA || C || React || Express{" "}
        </p>
      </div>
      <div className="stats d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center py-1 px-3 Views">
          <div>
            <p className="me-3 mb-0 text-secondary ">Profile views</p>
          </div>
          <div>
            <p className=" mb-0 count">119</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center py-1 px-3 Views">
          <div>
            <p className="me-3 mb-0 text-secondary">Post impressions</p>
          </div>
          <div>
            <p className=" mb-0 count">85</p>
          </div>
        </div>
      </div>

      <div className="promotion border-bottom p-3 ">
        <p className="">Strengthen your profile with an AI writing assistant</p>
        <p className="fw-bold getHire">Get hired faster. Try Premium free.</p>
      </div>
      <div className="text-start ps-3 py-2 BtnSave">
        <button className="savedBtn">
          <FontAwesomeIcon icon={faBookmark} className="text-secondary" />
          <span className="ms-2">Saved items</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
