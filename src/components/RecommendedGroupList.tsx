import React from "react";
import RecommendedGroupItem from "./RecommendedGroupItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/RecommendedGroupItem.css";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";

const generateRandomNumber = () => Math.floor(Math.random() * 10000) + 1;
const images = [logo1, logo2, logo3, logo4, logo5];
const headings = [
  "Innovative Tech Solutions",
  "Global Software Leaders",
  "Disruptive Digital Platforms",
  "Cutting-Edge AI Advancements",
  "Pioneering Fintech Innovations",
  "Transformative Cloud Computing",
  "Groundbreaking Biotech Breakthroughs",
  "Visionary Renewable Energy Initiatives",
  "Revolutionizing the Future of Mobility",
  "Empowering the Digital Workforce",
];

const groupData = Array.from({ length: 5 }, (_, i) => ({
  picture: images[i],
  heading: headings[Math.floor(Math.random() * headings.length)],
  members: `${generateRandomNumber()} members`,
}));

const RecommendedGroupItemList: React.FC = () => {
  return (
    <div className="container mt-5 border rounded p-2">
      <div className="p-2 fw-bold mb-3">Groups you might be interested in</div>
      <div className="border-bottom">
        {groupData.map((group, index) => (
          <div className="mb-4" key={index}>
            <RecommendedGroupItem
              picture={group.picture}
              heading={group.heading}
              members={group.members}
            />
          </div>
        ))}
      </div>
      <div className=" text-center p-2 extend">
        <button className=" fw-bold " style={{ border: "none" }}>
          Show all <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default RecommendedGroupItemList;
