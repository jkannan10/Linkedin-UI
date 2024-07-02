import React from "react";
import "../assets/styles/RecommendedGroupItem.css";
interface Recommandation {
  picture: string;
  heading: string;
  members: string;
}
const RecommendedGroupItem: React.FC<Recommandation> = ({
  picture,
  heading,
  members,
}) => {
  return (
    <div className="">
      <div className="d-flex align-items-center  ">
        <div className="me-2">
          <img src={picture} alt="sdklnc" className="img-fluid logos" />
        </div>
        <div className=" flex-grow-1 border-bottom p-2 w-100">
          <div className="headings fw-bold">{heading}</div>
          <div className="members text-secondary">{members}</div>
          <div className="">
            <button className="joinGroup">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedGroupItem;
