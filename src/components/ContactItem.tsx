import React from "react";
import "../assets/styles/ContactItem.css";
import dev from "../assets/images/dev5.jpg";
import dev1 from "../assets/images/dev1.png";
import dev2 from "../assets/images/dev7.jpg";
import dev3 from "../assets/images/dev2.jpg";
interface ContactItemProps {
  name: string;
  title: string;
  createdDate: string;
  hasMessageButton?: boolean;
}

const images: string[] = [dev, dev1, dev2, dev3];
const func = (): number => {
  return Math.round(Math.random() * 3);
};
const ContactItem: React.FC<ContactItemProps> = ({
  name,
  title,
  createdDate,
  hasMessageButton = false,
}) => {
  return (
    <div className="contact-item d-flex align-items-center p-3 border-bottom">
      <div className="avatar rounded-circle bg-secondary mr-3">
        <img src={images[func()]} alt="/sc kj" className="img-fluid avatar" />
      </div>
      <div className="details flex-grow-1">
        <div className="name font-weight-bold">{name}</div>
        <div className="title text-muted">{title}</div>
        <div className="created-date text-muted small">
          Created: {createdDate}
        </div>
      </div>
      {hasMessageButton ? (
        <button className="contactButton">Message</button>
      ) : (
        <button className="contactButton">Connect</button>
      )}
    </div>
  );
};

export default ContactItem;
