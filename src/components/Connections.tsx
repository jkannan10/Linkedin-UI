import React from "react";
import ConnectionItem from "./ConnectionItem";
import "../assets/styles/Connections.css";
import dev from "../assets/images/dev.jpeg";
import dev1 from "../assets/images/dev1.png";
import dev2 from "../assets/images/dev2.jpg";
import dev3 from "../assets/images/dev3.jpg";
import dev4 from "../assets/images/dev4.jpg";

const connections = [
  {
    name: "Saran S",
    title: "Client Partner in Access Healthcare Pvt. Ltd",
    connectedTime: "4 hours ago",
  },
  {
    name: "Uday Kumar Reddy",
    title: "Data Analyst at Randstad",
    connectedTime: "4 hours ago",
  },

  {
    name: "Shanmuga Valli",
    title: "Student at Karpagam College of engineering",
    connectedTime: "1 day ago",
  },
  {
    name: "Sivabalan S",
    title: "Student at Karpagam College of Engineering",
    connectedTime: "2 days ago",
  },
  {
    name: "Bala Arumugam A",
    title: "Student at Karpagam College of engineering",
    connectedTime: "3 days ago",
  },
];

const ConnectionsList: React.FC = () => {
  return (
    <div className="border rounded ">
      <div className="p-3">455 Connections</div>
      <div className="d-flex justify-content-between p-2 border-bottom">
        <div className="">
          <span className="me-2 spanSort">sort by :</span>
          <span className="fw-bold spanSort">Recently connected</span>
        </div>
        <div className="rounded">
          <span>
            <input
              type="text"
              placeholder="Search by name"
              className="TextInput"
            />
          </span>
          <span className="text-primary ms-2 searchtext">
            Search with filter
          </span>
        </div>
      </div>
      <div className="connections-list w-100">
        {connections.map((connection, index) => (
          <ConnectionItem
            key={index}
            name={connection.name}
            title={connection.title}
            connectedTime={connection.connectedTime}
          />
        ))}
        {connections.map((connection, index) => (
          <ConnectionItem
            key={index}
            name={connection.name}
            title={connection.title}
            connectedTime={connection.connectedTime}
          />
        ))}
        {connections.map((connection, index) => (
          <ConnectionItem
            key={index}
            name={connection.name}
            title={connection.title}
            connectedTime={connection.connectedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ConnectionsList;
