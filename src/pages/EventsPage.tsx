import React from "react";
import EventList from "../components/EventList";

const EventsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <EventList />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default EventsPage;
