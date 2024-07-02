import React from "react";
import ConnectionsList from "../components/Connections";
import Footerpage from "./Footerpage";

const ConnectionPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ConnectionsList />
        </div>
        <div className="col-3">
          <Footerpage />
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;
