import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Message.css";
import dev from "../assets/images/dev.jpeg";

const Messaging: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("focused");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`messaging-container ${
        isExpanded ? "expanded" : ""
      } border rounded`}
    >
      <div className="messaging-header border-bottom" onClick={toggleExpand}>
        <div className=" p-1">
          <img src={dev} alt="/" className="img-fluid messageImage" />
          <span className="fw-bold ms-1 TextMessaging">Messaging</span>
        </div>

        <div className="d-flex justify-content-between  p-1">
          <div className="fw-bold text-secondary me-4">...</div>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-secondary me-4"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={isExpanded ? faChevronDown : faChevronUp}
              className="text-secondary"
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="messaging-body">
          <div className="border-bottom">
            <input type="text" placeholder="Search messages" />
          </div>
          <div className="tabs border-bottom">
            <span
              className={`tab ${
                activeTab === "focused" ? "active" : ""
              } fw-bold`}
              onClick={() => handleTabClick("focused")}
            >
              Focused
            </span>
            <span
              className={`tab ${
                activeTab === "other" ? "active" : ""
              } fw-bold ms-4`}
              onClick={() => handleTabClick("other")}
            >
              Other
            </span>
          </div>
          {activeTab == "focused" && (
            <div className="messages">
              <div className="message">
                <img src="https://via.placeholder.com/50" alt="User" />
                <div>
                  <span>ABC</span>
                  <div className="d-flex justify-content-between align-items-center TextM">
                    <div className="me-auto">
                      <p>You: asjbx</p>
                    </div>
                    {/* <div className="ms-auto">
                    <p>Jun 23</p>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="message">
                <img src="https://via.placeholder.com/50" alt="User" />
                <div>
                  <span>BYZ</span>
                  <div className="d-flex justify-content-between align-items-center TextM">
                    <div className="me-auto">
                      <p>BYZ: Normal call pannu</p>
                    </div>
                    {/* <div className="ms-auto">
                    <p>Jun 22</p>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="message">
                <img src="https://via.placeholder.com/50" alt="User" />
                <div>
                  <span>Ibjb</span>
                  <div className="d-flex justify-content-between align-items-center TextM">
                    <div className="me-auto">
                      <p>You:asdkcn</p>
                    </div>
                    {/* <div className="ms-auto">
                    <p>Jun 19</p>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="message">
                <img src="https://via.placeholder.com/50" alt="User" />
                <div>
                  <span>Jkjcb</span>
                  <div className="d-flex justify-content-between align-items-center TextM">
                    <div className="me-auto">
                      <p>Jkjcb: akxb</p>
                    </div>
                    {/* <div className="ms-auto">
                    <p>Jun 16</p>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="message">
                <img src="https://via.placeholder.com/50" alt="User" />
                <div>
                  <span>Kscjbas</span>
                  <div className="d-flex justify-content-between align-items-center TextM">
                    <div className="me-auto">
                      <p>Kscjbas: asjbx</p>
                    </div>
                    {/* <div className="ms-auto">
                    <p>Jun 11</p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "other" && (
            <div className="">
              <div className="p-5">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
                  alt="/"
                  className="img-fluid ms-4"
                />
                <p className="p-3 fs-4" style={{ whiteSpace: "nowrap" }}>
                  No Messages Yet
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Messaging;
