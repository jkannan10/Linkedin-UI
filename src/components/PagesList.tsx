import React from "react";
import PagesItem from "./PagesItem";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import "../assets/styles/PagesList.css";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
const Pages = [
  {
    name: "Tech Innovations Inc.",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "Global Enterprises Ltd.",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "Creative Solutions",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "AI Ventures",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "Career Coaches LLC",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "Mentorship Hub",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "Lifafa Enterprises",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
  {
    name: "Storytellers Inc.",
    title: `${Math.floor(Math.random() * 10000)} followers`,
    profileImage: logos[Math.round(Math.random() * 5)],
  },
];

const PagesList: React.FC = () => {
  return (
    <div className="followers-list container mt-3 border rounded">
      <h5 className="p-2 border-bottom">24 pages</h5>
      {Pages.map((page, index) => (
        <PagesItem
          key={index}
          name={page.name}
          title={page.title}
          profileImage={page.profileImage}
        />
      ))}
    </div>
  );
};

export default PagesList;
