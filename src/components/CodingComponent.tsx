import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
  faRedo,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/CodingComponent.css";
import dev from "../assets/images/dev.jpeg";
import Comment from "./Comment";
import Reactions from "./Reaction";
import Share from "./Share";
interface CodingComponentProps {
  image: string;
  header: string;
  name: string;
  year: string;
  post: string;
}
const CodingComponent: React.FC<CodingComponentProps> = ({
  image,
  header,
  name,
  year,
  post,
}) => {
  const [comment, setComment] = useState<boolean>(false);
  return (
    <div className="card coding-card">
      <div className="card-header d-flex align-items-center">
        <img src={image} className="rounded-circle mr-3" alt="profile" />
        <div>
          <h5 className="mb-0 GroupHeading">{header}</h5>
          <small className="text-secondary">
            {name} • {year}
          </small>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">
          What is Coding{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </p>
        <p>🎯 Hit the like button</p>
        <div
          className="image-container w-100"
          style={{ width: "600px", height: "600px" }}
        >
          <img
            src={post}
            alt="What is Coding"
            className="img-fluid w-100 h-100"
          />
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between ">
        <div>
          <FontAwesomeIcon icon={faHeart} /> Jayanarayan Manjunath and 386
          others
        </div>
        <div>8 comments • 20 reposts</div>
      </div>
      <div
        className="d-flex justify-content-around mt-2 align-items-center p-2 "
        style={{ fontSize: "large" }}
      >
        <div className="">
          <Reactions />
        </div>
        <button
          className="customBtn"
          onClick={() => {
            setComment(!comment);
          }}
        >
          <FontAwesomeIcon icon={faComment} style={{ color: "#000000ad" }} />{" "}
          <span className="fw-bold " style={{ color: "#000000ad" }}>
            Comment
          </span>
        </button>
        <button className="customBtn">
          <FontAwesomeIcon icon={faRedo} style={{ color: "#000000ad" }} />{" "}
          <span className="fw-bold " style={{ color: "#000000ad" }}>
            Repost
          </span>
        </button>
        <button className="customBtn">
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#000000ad" }} />{" "}
          <span className="fw-bold " style={{ color: "#000000ad" }}>
            Send
          </span>
        </button>
      </div>
      {comment && (
        <div style={{ position: "relative", zIndex: 10 }}>
          <Comment />
        </div>
      )}
    </div>
  );
};

export default CodingComponent;
