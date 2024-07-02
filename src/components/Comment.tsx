import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Comment.css";
import dev from "../assets/images/dev.jpeg";

const Comment = () => {
  return (
    <div className="comment text-start p-2">
      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
          <img src={dev} alt="as" className="img-fluid image" />
        </div>
        <div>
          <input
            type="text"
            className="inputTag"
            placeholder="Add a comment..."
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <img src={dev} alt="as" className="img-fluid image me-2" />
        <div className="informationContainer p-2 w-100 mb-2">
          <div className="d-flex justify-content-between">
            <div>
              <p className="fw-bolder fs-6">
                Name <span className="fw-lighter text-secondary">1st</span>
              </p>
            </div>
            <div className="fs-6 fw-lighter text-secondary">
              <p>
                8h <span className="fw-normal"> ... </span>
              </p>
            </div>
          </div>
          <div className="spanStyle mb-2">
            <span>Upcoming sde@Robert Bosch| ICPC semifinalist</span>
          </div>
          <div className="fs-6">Congrats @name</div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <img src={dev} alt="as" className="img-fluid image me-2" />
        <div className="informationContainer p-2 w-100">
          <div className="d-flex justify-content-between">
            <div>
              <p className="fw-bolder fs-6">
                Name <span className="fw-lighter text-secondary">1st</span>
              </p>
            </div>
            <div className="fs-6 fw-lighter text-secondary">
              <p>
                9h <span className="fw-normal"> ... </span>
              </p>
            </div>
          </div>
          <div className="spanStyle mb-2">
            <span>SDE @tellius || founder @ DSA buster</span>
          </div>
          <div className="fs-6">Congrats @name</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
