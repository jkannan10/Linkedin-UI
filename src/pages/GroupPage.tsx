import React from "react";
import GroupList from "../components/GroupList";
import RecommendedGroupItemList from "../components/RecommendedGroupList";

const GroupPage = () => {
  return (
    <div>
      <div className="row d-flex justify-content-between">
        <div className="col-1"></div>
        <div className="col-7">
          <GroupList />
        </div>
        <div className="col-3">
          <RecommendedGroupItemList />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default GroupPage;
