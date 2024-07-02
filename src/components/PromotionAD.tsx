import React from "react";
import "../assets/styles/PromotionAd.css";
const PromotionAD = () => {
  return (
    <div className="container">
      <div className="promotionCard">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          className="img-fluid border rounded IMG"
        />
      </div>
      <div className=" Footer mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="row">
              <span className="text-small text-secondary">
                About &nbsp;&nbsp; Accessibility &nbsp; &nbsp; Help Center{" "}
                <br></br>&nbsp;&nbsp; Privacy & Terms
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ad Choices
              </span>
            </div>
            <div className="row">
              <span className="text-small text-secondary">
                &nbsp;Advertising &nbsp;&nbsp;&nbsp;&nbsp; Business Services{" "}
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;Get the LinkedIn app
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More
              </span>
            </div>
            <div className="row ">
              <div className="col mt-1 align-items-center">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                  alt="LinkedIn Logo"
                  className="LinkedinLogo"
                />
                <span className="">LinkedIn Corporation © 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionAD;
