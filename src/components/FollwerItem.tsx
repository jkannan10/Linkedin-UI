import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/FollowerItem.css";

interface FollowerItemProps {
  name: string;
  title: string;
  profileImage: string;
}

const FollowerItem: React.FC<FollowerItemProps> = ({
  name,
  title,
  profileImage,
}) => {
  return (
    <div className="follower-item d-flex align-items-center p-3 border-bottom">
      <img
        src={profileImage}
        alt={name}
        className="avatar rounded-circle mr-3"
      />
      <div className="details flex-grow-1">
        <div className="name font-weight-bold">{name}</div>
        <div className="title text-muted">{title}</div>
      </div>
      <button className="followButton">Following</button>
    </div>
  );
};

export default FollowerItem;
