import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import Network from "./pages/Network";
import GroupPage from "./pages/GroupPage";
import ConnectionPage from "./pages/ConnectionPage";
import ContactPage from "./pages/ContactPage";
import FollowingPage from "./pages/FollowingPage";
import EventsPage from "./pages/EventsPage";
import Page from "./pages/Page";

import Messaging from "./components/Message";

function App() {
  return (
    <div className="w-100 ">
      <div className="bg-white header">
        <Navbar />
      </div>
      <div className="headerP">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/connection" element={<ConnectionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/follow" element={<FollowingPage />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/page" element={<Page />} />
        </Routes>{" "}
      </div>
      <Messaging />
    </div>
  );
}

export default App;
