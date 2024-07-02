import React from "react";
import FollowerItem from "../components/PagesItem";
import FollowersList from "../components/FollowerList";
import Footerpage from "./Footerpage";

const FollowingPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <FollowersList />
        </div>
        <div className="col-3">
          <Footerpage />
        </div>
      </div>
    </div>
  );
};

export default FollowingPage;
