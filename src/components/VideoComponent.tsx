import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

interface Url {
  url: string;
}
const VideoComponent: React.FC<Url> = ({ url }) => {
  const [comment, setComment] = useState<boolean>(false);

  return (
    <div className="card coding-card w-100">
      <div className="card-header d-flex align-items-center">
        <img src={dev} className="rounded-circle mr-3" alt="profile" />
        <div>
          <h5 className="mb-0">JavaScript</h5>
          <small>Zeeshan Shakeel • 3rd+</small>
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
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
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

export default VideoComponent;