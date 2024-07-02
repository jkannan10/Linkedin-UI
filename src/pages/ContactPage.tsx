import React from "react";
import ContactsList from "../components/ContactList";
import "../assets/styles/ContactPage.css";
import Footerpage from "./Footerpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faRepeat } from "@fortawesome/free-solid-svg-icons";
const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <ContactsList />
        </div>
        <div className="col-3 p-2">
          <div className="mb-3">
            <button className="fw-bold contactsBtn mb-3">
              <FontAwesomeIcon icon={faDownload} /> Export contacts
            </button>
            <button className="fw-bold contactsBtn mb-2">
              <FontAwesomeIcon icon={faRepeat} className="me-1" />
              Manage Sync contacts
            </button>
          </div>
          <Footerpage />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
