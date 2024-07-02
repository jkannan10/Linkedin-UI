import React from "react";
import "../assets/styles/ConnectionItem.css";
import dev from "../assets/images/dev.jpeg";
import dev1 from "../assets/images/dev1.png";
import dev2 from "../assets/images/dev2.jpg";
import dev3 from "../assets/images/dev3.jpg";
import dev4 from "../assets/images/dev4.jpg";
interface ConnectionItemProps {
  name: string;
  title: string;
  connectedTime: string;
}

const images: string[] = [dev, dev1, dev2, dev3, dev4];
const func = (): number => {
  return Math.round(Math.random() * 4);
};
const ConnectionItem: React.FC<ConnectionItemProps> = ({
  name,
  title,
  connectedTime,
}) => {
  return (
    <div className="connection-item">
      <div className="avatar">
        <img src={images[func()]} alt="/smcn" className="img-fluid avatar" />
      </div>
      <div className="details">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
        <div className="connected-time">Connected {connectedTime}</div>
      </div>
      <div className="d-flex align-items-center">
        <button className="message-button p-1 me-2">Message</button>
        <div className="fw-bold">...</div>
      </div>
    </div>
  );
};

export default ConnectionItem;
