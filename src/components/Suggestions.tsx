import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/SuggestionCard.css";
import SuggestionCard from "./SugesstionCard";
import dev from "../assets/images/dev.jpeg";
import dev1 from "../assets/images/dev1.png";
import dev2 from "../assets/images/dev2.jpg";
import dev3 from "../assets/images/dev3.jpg";
import dev4 from "../assets/images/dev4.jpg";
import logo from "../assets/images/bcgBanner.jpg";

interface ConnectionCardProps {
  banner: string;
  picture: string;
  name: string;
  bio: string;
  followedBy: string;
}

const generateMockData = (): ConnectionCardProps[] => {
  const names = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "Chris Brown",
    "Jessica Williams",
    "Matthew Jones",
    "Amanda Garcia",
    "Daniel Martinez",
    "Laura Robinson",
    "David Clark",
    "Sophia Rodriguez",
    "James Lewis",
    "Megan Lee",
    "Paul Walker",
    "Nancy Hall",
    "Brian Allen",
    "Linda Young",
    "Kevin Hernandez",
    "Rachel King",
  ];

  const bios = [
    "Software Engineer at TechCorp",
    "Product Manager at Innovate Inc.",
    "Data Scientist at DataWorks",
    "UX/UI Designer at CreateDesign",
    "Marketing Specialist at MarketSmart",
    "Financial Analyst at FinAnalyze",
    "Operations Manager at OperatePlus",
    "HR Specialist at PeopleFirst",
    "Business Development at GrowBiz",
    "Sales Manager at SellWell",
    "Digital Marketer at DigiReach",
    "Consultant at ConsultPro",
    "Project Manager at ManageIt",
    "Customer Support at HelpDesk",
    "Content Writer at WriteNow",
    "Technolog Lead at TechFix",
    "Legal Advisor at LawAssist",
    "Graphic Designer at Artistry",
    "Research Analyst at Insightful",
    "Adminin at AdminExpert",
  ];

  const followers = [
    "Followed by Alice",
    "Followed by Bob",
    "Followed by Charlie",
    "Followed by David",
    "Followed by Eva",
    "Followed by Frank",
    "Followed by Grace",
    "Followed by Hannah",
    "Followed by Ian",
    "Followed by Julia",
    "Followed by Kyle",
    "Followed by Lisa",
    "Followed by Max",
    "Followed by Nina",
    "Followed by Oscar",
    "Followed by Penny",
    "Followed by Quinn",
    "Followed by Rachel",
    "Followed by Steve",
    "Followed by Tina",
  ];
  const images: string[] = [dev, dev1, dev2, dev3, dev4];

  const mockData: ConnectionCardProps[] = [];
  for (let i = 0; i < 100; i++) {
    mockData.push({
      banner: logo,
      picture: images[Math.round(Math.random() * 4)],
      name: names[i % names.length],
      bio: bios[i % bios.length],
      followedBy: followers[i % followers.length],
    });
  }

  return mockData;
};

const Suggestions: React.FC = () => {
  const mockData = generateMockData();

  const groupedData = [];
  for (let i = 0; i < 80; i += 8) {
    groupedData.push(mockData.slice(i, i + 8));
  }

  return (
    <div className="suggestions-section">
      {groupedData.map((group, index) => (
        <div
          key={index}
          className="suggestion-group p-3 mb-3 bg-white border rounded"
        >
          <div className="d-flex justify-content-between align-items-center">
            <p>Suggestion Group {index + 1}</p>
            <button
              className="fw-bold"
              style={{ background: "none", border: "none" }}
            >
              Show all
            </button>
          </div>
          {group
            .reduce<ConnectionCardProps[][]>((rows, key, index) => {
              if (index % 4 === 0) rows.push([]);
              rows[rows.length - 1].push(key);
              return rows;
            }, [])
            .map((row, idx) => (
              <div key={idx} className="row">
                {row.map((connection, colIdx) => (
                  <div key={colIdx} className="col-lg-3 col-md-6 col-sm-12">
                    <SuggestionCard
                      banner={connection.banner}
                      picture={connection.picture}
                      name={connection.name}
                      bio={connection.bio}
                      followedBy={connection.followedBy}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
