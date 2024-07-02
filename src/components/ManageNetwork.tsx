import {
  faCalendar,
  faCalendarDays,
  faContactCard,
  faPager,
  faPeopleGroup,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/styles/ManageNetwork.css";
import { useNavigate } from "react-router-dom";
const ManageNetwork = () => {
  const navigate = useNavigate();
  return (
    <div className="container network border rounded">
      <div className="fw-bold border-bottom p-3" style={{ fontSize: "large" }}>
        Manage my network
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/connection")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="text-secondary me-3"
          />
          <span className="mng">Connections</span>
        </div>
        <div className="text-secondary fw-normal mng">452</div>
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/contact")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faContactCard}
            className="text-secondary icon"
          />
          <span className=" mng">Contacts</span>
        </div>
        <div className="text-secondary fw-normal mng">152</div>
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/follow")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faUser} className="text-secondary me-4" />
          <span className="mng">Following and Followers</span>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/group")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faUsers} className="text-secondary  group" />
          <span className="mng">Groups</span>
        </div>
        <div className="text-secondary fw-normal mng">12</div>
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/event")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCalendar} className="text-secondary me-4" />
          <span className="mng">Events</span>
        </div>
        <div></div>
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/page")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPager} className="text-secondary me-4" />
          <span className=" mng">Pages</span>
        </div>
        <div className="text-secondary fw-normal mng">24</div>
      </div>
      <div
        className="d-flex align-items-center justify-content-between networkList"
        onClick={() => navigate("/page")}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-secondary me-4"
          />
          <span className=" mng">NewsLetters</span>
        </div>
        <div className="text-secondary fw-normal mng">24</div>
      </div>
    </div>
  );
};

export default ManageNetwork;
