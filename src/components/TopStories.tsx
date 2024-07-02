import React, { useState } from "react";
import "../assets/styles/TopStories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faChevronDown,
  faChevronUp,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const TopStories = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="container">
      <div className="topStories p-3  border rounded ">
        <div className="row d-flex mt-2">
          <div className="">
            <div className="">
              <div className=" d-flex align-content-center justify-content-between">
                <div className="">
                  <p className="fw-bold fs-4 news">LinkedIn News</p>
                </div>
                <div className="">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </div>
              </div>
            </div>
            <div className="HeaderStory">
              <h3 className="fw-bold text-secondary fs-6">Top stories</h3>
            </div>
          </div>
          <div className="stories">
            <p className="fw-bolder" style={{ fontSize: "medium" }}>
              Zepto rises $665 million
              <p
                className="fw-lighter text-secondary"
                style={{ fontSize: "x-small" }}
              >
                Top news . 31434 readers
              </p>
            </p>
          </div>
          <div className="stories">
            <p className="fw-bolder" style={{ fontSize: "medium" }}>
              Sail,Bob ramp up hiring
              <p
                className="fw-lighter text-secondary"
                style={{ fontSize: "x-small" }}
              >
                16h ago. 16872 readers
              </p>
            </p>
          </div>
          <div className="stories">
            <p className="fw-bolder" style={{ fontSize: "medium" }}>
              NBFC'S on growth path
              <p
                className="fw-lighter text-secondary"
                style={{ fontSize: "x-small" }}
              >
                1d ago . 7983 readers
              </p>
            </p>
          </div>
          <div className="stories">
            <p className="fw-bolder" style={{ fontSize: "medium" }}>
              Relators promote wellness home
              <p
                className="fw-lighter text-secondary"
                style={{ fontSize: "x-small" }}
              >
                1d ago . 3574 readers
              </p>
            </p>
          </div>
          {open && (
            <div className="stories">
              <p className="fw-bolder" style={{ fontSize: "medium" }}>
                Gender Lines blur in shopping
                <p
                  className="fw-lighter text-secondary"
                  style={{ fontSize: "x-small" }}
                >
                  18h ago . 299 readers
                </p>
              </p>
            </div>
          )}
          {open && (
            <div className="stories">
              <p className="fw-bolder" style={{ fontSize: "medium" }}>
                EV loans charge Up slowly
                <p
                  className="fw-lighter text-secondary"
                  style={{ fontSize: "x-small" }}
                >
                  18h ago . 198 readers
                </p>
              </p>
            </div>
          )}
          {open && (
            <div className="stories">
              <p className="fw-bolder" style={{ fontSize: "medium" }}>
                More ESG player's emerge
                <p
                  className="fw-lighter text-secondary"
                  style={{ fontSize: "x-small" }}
                >
                  1d ago . 175 readers
                </p>
              </p>
            </div>
          )}
          {open && (
            <div className="stories">
              <p className="fw-bolder" style={{ fontSize: "medium" }}>
                Cheif growth officer in demand
                <p
                  className="fw-lighter text-secondary"
                  style={{ fontSize: "x-small" }}
                >
                  18h ago . 157 readers
                </p>
              </p>
            </div>
          )}
          {open && (
            <div className="stories">
              <p className="fw-bolder" style={{ fontSize: "medium" }}>
                Rental furniture market slows
                <p
                  className="fw-lighter text-secondary"
                  style={{ fontSize: "x-small" }}
                >
                  1d ago . 1011 readers
                </p>
              </p>
            </div>
          )}

          <div className="">
            <button
              className="showMoreStories fw-bold"
              onClick={() => setOpen(!open)}
            >
              Show {!open ? "more" : "less"}
              <FontAwesomeIcon
                icon={open ? faChevronUp : faChevronDown}
                className="ms-2"
              />
            </button>
          </div>
          <div className="mt-2">
            <p className="text-secondary fw-bold">
              Daily games{" "}
              <span className="fw-bold text-black newSpan">New</span>
            </p>
          </div>
          <div className="container">
            <div className="d-flex align-items-center p-2 Games">
              <div className="me-2">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/8ilyk40nkjoeuzohmqsoc6iiv"
                  alt="Crossclimb"
                  className="news-module_puzzle-icon img-fluid"
                />
              </div>

              <div className="games">
                <p className="fw-bold">
                  Crossclimb<span className="fw-normal ms-2">#55</span>
                  <p className="fw-normal gamesSpan">Unlock a trivia ladder</p>
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center p-2 Games">
              <div className="me-2">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"
                  alt="Crossclimb"
                  className="news-module_puzzle-icon img-fluid"
                />
              </div>

              <div className="games">
                <p className="fw-bold">
                  Queens<span className="fw-normal ms-2">#55</span>
                  <p className="fw-normal gamesSpan">Crown each region</p>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center p-2 Games">
              <div className="me-2">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/3zbbe4rnqg4embu5uy17dpiph"
                  alt="Crossclimb"
                  className="news-module_puzzle-icon img-fluid"
                />
              </div>

              <div className="games">
                <p className="fw-bold">
                  Pinpoint<span className="fw-normal ms-2">#55</span>
                  <p className="fw-normal gamesSpan">Guess the category</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
