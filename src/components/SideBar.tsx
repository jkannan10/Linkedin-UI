import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/SideBar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar p-3 border rounded">
      <div className="mb-3">
        <h6>Recent</h6>
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
              className="d-flex align-items-center mb-2 ButtonGroup"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span className="text-truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <p className=" groupsHead fw-bold">Groups</p>
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
              className="d-flex align-items-center mb-2 ButtonGroup"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span className="text-truncate">{item}</span>
            </li>
          ))}
          <div className="seeall">
            <p className="ps-1">See all</p>
          </div>
        </ul>
      </div>
      <div className="mb-3 d-flex justify-content-between">
        <div className="groupsHead  fw-bold">Events</div>
        <div className="">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
        </div>
      </div>
      <div className="mb-3">
        <div className="groupsHead  fw-bold">Followed Hashtags</div>
      </div>
      <div className="text-center mt-3 border-top pt-1 discover">
        <button className="btn fw-bold">Discover more</button>
      </div>
    </div>
  );
};

export default Sidebar;
