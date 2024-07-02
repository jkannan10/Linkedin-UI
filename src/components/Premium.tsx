import React from "react";
import "../assets/styles/Premium.css";
import dev from "../assets/images/dev.jpeg";
import logo from "../assets/images/premiumLogo.png";

const Premium = () => {
  return (
    <div className="premium border rounded p-3">
      <div className="">Unlock your full potential with linkedin primium</div>
      <div className="d-flex align-items-center">
        <div className="me-3">
          <img
            src={dev}
            alt="User Avatar"
            className="rounded-circle avatar img-fluid"
            style={{ maxWidth: "50px", maxHeight: "50px" }}
          />
        </div>

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="img-fluid rounded-circle avatar"
            style={{ maxWidth: "50px", maxHeight: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Premium;
