import React, { useState } from "react";
import GroupItem from "./GroupItem";
import "../assets/styles/GroupList.css";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.png";
import logo10 from "../assets/images/logo10.png";
import logo11 from "../assets/images/logo11.png";
import logo12 from "../assets/images/logo12.png";
import logo13 from "../assets/images/logo13.png";
import logo14 from "../assets/images/logo14.png";
import logo15 from "../assets/images/logo15.png";
import logo16 from "../assets/images/logo16.png";
import logo17 from "../assets/images/logo17.png";
import logo18 from "../assets/images/logo18.png";
import logo19 from "../assets/images/logo19.png";

const generateRandomNumber = () => Math.floor(Math.random() * 10000) + 1;
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo13,
  logo14,
  logo12,
  logo15,
  logo16,
  logo17,
  logo18,
  logo,
  logo19,
];
const techCompanies = [
  "Apple",
  "Google",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Tesla",
  "Netflix",
  "Spotify",
  "Uber",
  "Airbnb",
  "Dropbox",
  "Slack",
  "Zoom",
  "Twitch",
  "Discord",
  "Snapchat",
  "Twitter",
  "Pinterest",
  "LinkedIn",
  "Reddit",
];

const groupData = Array.from({ length: 10 }, (_, i) => ({
  picture: logos[i],
  heading: `${techCompanies[i]}`,
  members: `${generateRandomNumber()} members`,
}));
const requestData = Array.from({ length: 10 }, (_, i) => ({
  picture: logos[i + 10],
  heading: `${techCompanies[i + 10]}`,
  members: `${generateRandomNumber()} members`,
}));

const GroupList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Your Groups");
  return (
    <div className="container mt-5 border rounded p-2">
      <div className="d-flex fs-6 fw-bold justify-content-between border-bottom mb-2 t">
        <div className="d-flex justify-item-between p-2">
          <div
            className={`messageType ${
              activeTab === "Your Groups" ? "active" : ""
            } me-2`}
            onClick={() => setActiveTab("Your Groups")}
          >
            Your Groups
          </div>
          <div
            className={`messageType ${
              activeTab === "Requested" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Requested")}
          >
            Requested
          </div>
        </div>
        <div className="">
          <button className="grpBtn"> Create group</button>
        </div>
      </div>
      {activeTab === "Your Groups" &&
        groupData.map((group, index) => (
          <div className="mb-4" key={index}>
            <GroupItem
              picture={group.picture}
              heading={group.heading}
              members={group.members}
            />
          </div>
        ))}
      {activeTab === "Requested" &&
        requestData.map((group, index) => (
          <div className="mb-4" key={index}>
            <GroupItem
              picture={group.picture}
              heading={group.heading}
              members={group.members}
            />
          </div>
        ))}
    </div>
  );
};

export default GroupList;
