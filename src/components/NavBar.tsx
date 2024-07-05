import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBorderAll,
  faHome,
  faMessage,
  faPodcast,
  faSearch,
  faSuitcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/navbar.css";

import dev from "../assets/images/dev.jpeg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container .navbar-container">
      <div className="row">
        <div className="col-4 d-flex align-items-center ">
          <div className="logoHolder">
            <img src={logo} alt="logo" className="img-fluid LogoIMG" />
          </div>
          <div className="searchBar d-flex align-items-center ">
            <span>
              <FontAwesomeIcon icon={faSearch} className="iconSearch" />
            </span>
            <input type="text" className="inputtag ml-2" placeholder="Search" />
          </div>
        </div>

        <div className="col-7 d-flex p-2  align-items-center NavBar">
          <div className="text-center ms-5 d-flex justify-content-between">
            <div
              className={`navItem ${activeTab === "home" ? "active" : ""} `}
              onClick={() => {
                handleTabClick("home");
                navigate("/");
              }}
            >
              <FontAwesomeIcon
                icon={faHome}
                className={`homeIcon ${
                  activeTab === "home" ? "text-black" : "text-secondary"
                }`}
              />
              <p className="text">Home</p>
              <span className="notification-indicator">
                <span className="notification-indicator1"></span>
              </span>
            </div>
            <div
              className={`navItem ${activeTab === "network" ? "active" : ""} `}
              onClick={() => {
                handleTabClick("network");
                navigate("/network");
              }}
            >
              <FontAwesomeIcon
                icon={faUsers}
                className={`homeIcon ${
                  activeTab === "network" ? "text-black" : "text-secondary"
                }`}
              />
              <p className="text">My Network</p>
            </div>
            <div
              className={`navItem ${activeTab === "jobs" ? "active" : ""} `}
              onClick={() => {
                handleTabClick("jobs");
                navigate("/");
              }}
            >
              <FontAwesomeIcon
                icon={faSuitcase}
                className={` homeIcon ${
                  activeTab === "jobs" ? "text-black" : "text-secondary"
                }`}
              />
              <p className="text">Jobs</p>
            </div>
            <div
              className={`navItem ${activeTab === "message" ? "active" : ""}`}
              onClick={() => {
                handleTabClick("message");
                navigate("/");
              }}
            >
              <FontAwesomeIcon
                icon={faMessage}
                className={` homeIcon ${
                  activeTab === "message" ? "text-black" : "text-secondary"
                }`}
              />
              <p className="text">Messaging</p>
            </div>
            <div
              className={`navItem ${activeTab === "notify" ? "active" : ""} `}
              onClick={() => {
                handleTabClick("notify");
                navigate("/");
              }}
            >
              <FontAwesomeIcon
                icon={faBell}
                className={` homeIcon ${
                  activeTab === "notify" ? "text-black" : "text-secondary"
                }`}
              />
              <p className="text">Notifications</p>
            </div>
            <div className={`navItem `}>
              <img src={dev} className="img-fluid ProfileImage" />
              <p className="text">Me</p>
            </div>
            <div className=" d-flex  ">
              <div className="border-left" style={{ height: "50px" }}></div>
              <div
                className={`navItem ${
                  activeTab === "business" ? "active" : ""
                } ps-2 `}
                onClick={() => {
                  handleTabClick("business");
                  navigate("/");
                }}
              >
                <FontAwesomeIcon
                  icon={faBorderAll}
                  className={` ${
                    activeTab === "business" ? "text-black" : "text-secondary"
                  }`}
                />
                <p className="text">Bussiness</p>
              </div>
              <div
                className={`navItem ${
                  activeTab === "postAJob" ? "active" : ""
                }`}
                onClick={() => {
                  handleTabClick("postAJob");
                  navigate("/");
                }}
              >
                <FontAwesomeIcon
                  icon={faPodcast}
                  className={` ${
                    activeTab === "postAJob" ? "text-black" : "text-secondary"
                  }`}
                />
                <p className="text">Post a Job</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default NavBar;
