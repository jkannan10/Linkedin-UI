import React from "react";
import ContactItem from "./ContactItem";
import "../assets/styles/ContactList.css";

const contacts = [
  {
    name: "Srinith B M",
    title: "Student at Sri Shakthi Institute of Engineering and Technology",
    createdDate: "3/2/2024",
    hasMessageButton: false,
  },
  {
    name: "Divyashree .Y",
    title: "Make Your Own Sunshine In building You Up",
    createdDate: "2/24/2024",
    hasMessageButton: true,
  },
  {
    name: "Jeeva Sir",
    title: "",
    createdDate: "2/24/2024",
    hasMessageButton: false,
  },
  {
    name: "Abi pooj",
    title: "",
    createdDate: "2/24/2024",
    hasMessageButton: true,
  },
  {
    name: "Pharmacy FC Cafe",
    title: "",
    createdDate: "2/19/2024",
    hasMessageButton: false,
  },
  {
    name: "Dharma",
    title: "",
    createdDate: "1/19/2024",
    hasMessageButton: false,
  },
  {
    name: "Rithika IT A",
    title: "",
    createdDate: "1/12/2024",
    hasMessageButton: true,
  },
  {
    name: "Elakkiya AIDS",
    title: "",
    createdDate: "1/12/2024",
    hasMessageButton: false,
  },
];

const ContactsList: React.FC = () => {
  return (
    <div className="">
      <div className="row">
        <div className="d-flex align-items-center text-center">
          <div className="">Saved contacts</div>
          <div className="" style={{ marginLeft: "20px" }}>
            <button
              className="fw-bold"
              style={{
                color: "white",
                border: "1px solid #0a66c2",
                borderRadius: "10px",
                padding: "5px",
                background: "#0a66c2",
              }}
            >
              Phone contacts
            </button>
          </div>
        </div>
      </div>
      <div className="imported-contacts-list container mt-3">
        <div className="row"></div>
        <h2>279 Imported Contacts</h2>
        <div className="d-flex justify-content-between align-items-center mb-3 p-2">
          <span className="Span">
            Sort by :
            <span className="fw-bold text-secondary Span"> Recently added</span>
          </span>
          <input
            type="text"
            className="w-50 border rounded"
            placeholder="Search by name or company"
          />
        </div>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            name={contact.name}
            title={contact.title}
            createdDate={contact.createdDate}
            hasMessageButton={contact.hasMessageButton}
          />
        ))}
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            name={contact.name}
            title={contact.title}
            createdDate={contact.createdDate}
            hasMessageButton={contact.hasMessageButton}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
