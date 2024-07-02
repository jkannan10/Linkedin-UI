import React, { useState } from "react";
import FollowerItem from "./FollwerItem";
import dev from "../assets/images/dev.jpeg";
import dev1 from "../assets/images/dev1.png";
import dev2 from "../assets/images/dev2.jpg";
import dev3 from "../assets/images/dev3.jpg";
import dev4 from "../assets/images/dev4.jpg";
import dev5 from "../assets/images/dev5.jpg";
import dev6 from "../assets/images/dev6.jpg";
import "../assets/styles/FollowerList.css";

const images: string[] = [dev, dev1, dev2, dev3, dev4, dev5, dev6];
const func = (): number => {
  return Math.round(Math.random() * 6);
};
const followers = [
  {
    name: "Agnel John",
    title: "I help students enhance their skills in technology & mindset",
    profileImage: images[func()],
  },
  {
    name: "Sarthak Chauhan",
    title: "Full-stack SDE @ GEP Worldwide | NIT Surat Graduate",
    profileImage: images[func()],
  },
  {
    name: "Arun Prakash M",
    title: "Founder & CEO - GUVI.io",
    profileImage: images[func()],
  },
  {
    name: "Akash Chandrasekar",
    title: "ML engineer at goML | GEN AI Developer | AWS expertise",
    profileImage: images[func()],
  },
  {
    name: "Diksha Arora",
    title:
      "Interview Coach | Helping you Land Your Dream Job | 1000+ Success Stories",
    profileImage: images[func()],
  },
  {
    name: "Mano Bala Vaikunda Moorthy",
    title: "Ex-Team Lead | Helping you Land Your Dream Job",
    profileImage: images[func()],
  },
  {
    name: "Ankur Batra",
    title: "Co-Founder & Managing Director at Lifafa",
    profileImage: images[func()],
  },
  {
    name: "Epaphra T",
    title: "Content Creation helps me do what I love | Storyteller | Writer",
    profileImage: images[func()],
  },
  {
    name: "Nikita Sharma",
    title: "Digital Marketing Expert | Social Media Enthusiast",
    profileImage: images[func()],
  },
  {
    name: "Rahul Verma",
    title: "Senior Data Analyst at TechCorp | Python & SQL Specialist",
    profileImage: images[func()],
  },
  {
    name: "Meera Nair",
    title: "Software Engineer at SoftSolutions | Java & Spring Developer",
    profileImage: images[func()],
  },
  {
    name: "Aditya Roy",
    title: "Blockchain Developer | Crypto Enthusiast",
    profileImage: images[func()],
  },
  {
    name: "Simran Kaur",
    title: "UI/UX Designer | Creative Thinker | Adobe XD & Figma",
    profileImage: images[func()],
  },
  {
    name: "Vikram Singh",
    title: "Cloud Solutions Architect | Azure & GCP Certified",
    profileImage: images[func()],
  },
  {
    name: "Priya Kapoor",
    title: "Product Manager at Innovatech | Agile & Scrum Practitioner",
    profileImage: images[func()],
  },
  {
    name: "Kunal Patel",
    title: "Cybersecurity Specialist | Ethical Hacker",
    profileImage: images[func()],
  },
  {
    name: "Anita Joshi",
    title: "Business Analyst | Data-Driven Decision Maker",
    profileImage: images[func()],
  },
  {
    name: "Rohan Mehta",
    title: "AI Researcher | Deep Learning Enthusiast",
    profileImage: images[func()],
  },
  {
    name: "Sakshi Gupta",
    title: "Financial Advisor | Investment Strategist",
    profileImage: images[func()],
  },
  {
    name: "Rajesh Iyer",
    title: "HR Manager at GlobalTech | Employee Engagement Expert",
    profileImage: images[func()],
  },
  {
    name: "Swati Bhardwaj",
    title: "SEO Specialist | Content Marketing Guru",
    profileImage: images[func()],
  },
  {
    name: "Amit Trivedi",
    title: "DevOps Engineer | Automation & CI/CD Expert",
    profileImage: images[func()],
  },
  {
    name: "Pooja Desai",
    title: "Graphic Designer | Visual Storyteller",
    profileImage: images[func()],
  },
  {
    name: "Neha Reddy",
    title: "Data Scientist | Machine Learning Engineer",
    profileImage: images[func()],
  },
  {
    name: "Ravi Kumar",
    title: "Sales Executive | B2B Sales & Marketing",
    profileImage: images[func()],
  },
  {
    name: "Anjali Singh",
    title: "Web Developer | Front-End Specialist | React & Angular",
    profileImage: images[func()],
  },
  {
    name: "Naveen Thomas",
    title: "IT Consultant | Digital Transformation Advisor",
    profileImage: images[func()],
  },
  {
    name: "Kiran Shah",
    title: "Operations Manager | Process Optimization Expert",
    profileImage: images[func()],
  },
  {
    name: "Shivani Rajput",
    title: "Content Strategist | Blogger | SEO Expert",
    profileImage: images[func()],
  },
  {
    name: "Gaurav Jain",
    title: "Customer Success Manager | Client Relationship Specialist",
    profileImage: images[func()],
  },
];

const following = [
  {
    name: "Isha Sharma",
    title: "Digital Marketing Strategist | Social Media Guru",
    profileImage: images[func()],
  },
  {
    name: "Arjun Kapoor",
    title: "Backend Developer | Python & Django Enthusiast",
    profileImage: images[func()],
  },
  {
    name: "Priya Chopra",
    title: "Project Manager | Agile Methodologies Expert",
    profileImage: images[func()],
  },
  {
    name: "Rohan Gupta",
    title: "Data Analyst | Power BI & Tableau Specialist",
    profileImage: images[func()],
  },
  {
    name: "Nisha Malhotra",
    title: "HR Consultant | Talent Acquisition Specialist",
    profileImage: images[func()],
  },
  {
    name: "Aditya Sharma",
    title: "Mobile App Developer | Flutter & React Native",
    profileImage: images[func()],
  },
  {
    name: "Riya Mehta",
    title: "Business Strategist | Entrepreneurship Mentor",
    profileImage: images[func()],
  },
  {
    name: "Nikhil Verma",
    title: "Cybersecurity Analyst | Penetration Testing Expert",
    profileImage: images[func()],
  },
  {
    name: "Shreya Gupta",
    title: "UI/UX Designer | Figma & Adobe XD Specialist",
    profileImage: images[func()],
  },
  {
    name: "Rahul Sharma",
    title: "Product Owner | Agile Scrum Practitioner",
    profileImage: images[func()],
  },
  {
    name: "Neha Kapoor",
    title: "Content Writer | Copywriting & SEO Expert",
    profileImage: images[func()],
  },
  {
    name: "Arjun Malhotra",
    title: "Cloud Architect | AWS & Azure Certified",
    profileImage: images[func()],
  },
  {
    name: "Priya Sharma",
    title: "Financial Analyst | Investment Portfolio Manager",
    profileImage: images[func()],
  },
  {
    name: "Rohan Chopra",
    title: "DevOps Engineer | Automation & CI/CD Specialist",
    profileImage: images[func()],
  },
  {
    name: "Nisha Gupta",
    title: "HR Business Partner | Employee Engagement Strategist",
    profileImage: images[func()],
  },
  {
    name: "Aditya Mehta",
    title: "Machine Learning Engineer | Deep Learning Enthusiast",
    profileImage: images[func()],
  },
  {
    name: "Riya Verma",
    title: "Sales Manager | B2B Sales & Negotiation Expert",
    profileImage: images[func()],
  },
  {
    name: "Nikhil Gupta",
    title: "Web Developer | Full-Stack Specialist",
    profileImage: images[func()],
  },
  {
    name: "Shreya Sharma",
    title: "Business Analyst | Data-Driven Decision Making",
    profileImage: images[func()],
  },
  {
    name: "Rahul Kapoor",
    title: "IT Consultant | Digital Transformation Strategist",
    profileImage: images[func()],
  },
  {
    name: "Neha Malhotra",
    title: "Operations Manager | Process Improvement Expert",
    profileImage: images[func()],
  },
  {
    name: "Arjun Gupta",
    title: "Graphic Designer | Visual Branding Specialist",
    profileImage: images[func()],
  },
  {
    name: "Priya Verma",
    title: "SEO Specialist | Content Marketing Strategist",
    profileImage: images[func()],
  },
  {
    name: "Rohan Sharma",
    title: "Customer Success Manager | Client Relationship Expert",
    profileImage: images[func()],
  },
  {
    name: "Nisha Chopra",
    title: "HR Generalist | Talent Management Specialist",
    profileImage: images[func()],
  },
  {
    name: "Aditya Gupta",
    title: "Data Scientist | Machine Learning & AI Enthusiast",
    profileImage: images[func()],
  },
  {
    name: "Riya Malhotra",
    title: "Project Coordinator | Agile Methodologies Practitioner",
    profileImage: images[func()],
  },
  {
    name: "Nikhil Mehta",
    title: "Mobile App Developer | Flutter & React Native Expert",
    profileImage: images[func()],
  },
  {
    name: "Shreya Verma",
    title: "Content Strategist | Blogger & Social Media Influencer",
    profileImage: images[func()],
  },
];
const FollowersList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Following");

  return (
    <div className="followers-list container mt-3 border rounded">
      <h5 className="p-2 border-bottom">ABC's Network</h5>
      <div className="d-flex fs-6 fw-bold border-bottom mb-2">
        <div
          className={`messageTypes ${
            activeTab === "Following" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Following")}
        >
          Following
        </div>
        <div
          className={`messageTypes ${
            activeTab === "Followers" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Followers")}
        >
          Followers
        </div>
      </div>

      {activeTab === "Following" &&
        following.map((follower, index) => (
          <FollowerItem
            key={index}
            name={follower.name}
            title={follower.title}
            profileImage={follower.profileImage}
          />
        ))}
      {activeTab === "Followers" &&
        followers.map((follower, index) => (
          <FollowerItem
            key={index}
            name={follower.name}
            title={follower.title}
            profileImage={follower.profileImage}
          />
        ))}
    </div>
  );
};

export default FollowersList;
