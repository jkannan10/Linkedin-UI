import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/SideBar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar border">
      <div className="mb-3">
        <h6 className="ps-3 pt-3">Recent</h6>
        <ul className="list-unstyled">
          {[
            "React, Angular, Vue, Node....",
            "DevOps Professionals",
            "JavaScript",
            "React Native",
            "Java Developers Community",
          ].map((item, index) => (
            <li
              key={index}
              className="d-flex align-items-center mb-2  ps-3 ButtonGroup"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span className="text-truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3 ">
        <p className=" groupsHead fw-bold ps-3">Groups</p>
        <ul className="list-unstyled">
          {[
            "React, Angular, Vue, Node....",
            "DevOps Professionals",
            "JavaScript",
            "React Native",
            "Java Developers Community",
            "React Developers - ReactJS ...",
            "Data Structures and Algorithms",
          ].map((item, index) => (
            <li
              key={index}
              className="d-flex align-items-center mb-2 ButtonGroup ps-3"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span className="text-truncate">{item}</span>
            </li>
          ))}
          <div className="seeall">
            <p className="ps-4">See all</p>
          </div>
        </ul>
      </div>
      <div className="mb-3 ps-2 d-flex justify-content-between">
        <div className="groupsHead  fw-bold">Events</div>
        <div className="">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
        </div>
      </div>
      <div className="mb-3 ps-2">
        <div className="groupsHead  fw-bold">Followed Hashtags</div>
      </div>
      <div className="text-center border-top discover">
        <button className="discoverText">Discover more</button>
      </div>
    </div>
  );
};

export default Sidebar;
