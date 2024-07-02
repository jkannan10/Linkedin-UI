import React from "react";
import "../assets/styles/GroupItem.css";
interface GroupItemProps {
  picture: string;
  heading: string;
  members: string;
}

const GroupItem: React.FC<GroupItemProps> = ({ picture, heading, members }) => {
  return (
    <div className="">
      <div className="d-flex align-items-center  ">
        <div className="me-2">
          <img src={picture} alt="sdklnc" className="img-fluid avatar" />
        </div>
        <div className=" flex-grow-1 border-bottom p-2 w-100">
          <div className="headings fw-bold">{heading}</div>
          <div className="members text-secondary">{members}</div>
        </div>
        <div className="fw-bold fs-4">...</div>
      </div>
    </div>
  );
};

export default GroupItem;
