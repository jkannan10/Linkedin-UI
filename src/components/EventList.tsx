import React, { useState } from "react";
import Card from "./EventItem";
import "../assets/styles/EventList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import poster1 from "../assets/images/poster1.jpeg";
import poster2 from "../assets/images/poster3.jpeg";
import poster3 from "../assets/images/poster4.jpeg";
import poster4 from "../assets/images/poster5.jpeg";
import poster5 from "../assets/images/poster6.jpeg";
import poster6 from "../assets/images/poster7.jpeg";
import poster7 from "../assets/images/poster8.jpeg";
function generateRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}

function generateRandomDate() {
  const currentDate = new Date();
  const randomDays = Math.floor(Math.random() * 7);
  const randomDate = new Date(
    currentDate.getTime() + randomDays * 24 * 60 * 60 * 1000
  );
  return `Sat, Jul ${randomDate.getDate()}, 2024, 6:00 PM  Live Audio`;
}

function generateRandomText() {
  const texts = [
    "Exploring the Future of Artificial Intelligence and Its Transformative Potential",
    "Navigating the Complexities of Quantum Computing: Unlocking the Secrets of the Quantum Realm",
    "Unlocking the Potential of Renewable Energy Technologies: Powering a Sustainable Future",
    "Revolutionizing Healthcare with Biotechnology: Advancements in Personalized Medicine and Disease",
    "Transforming Transportation with Electric Vehicles: Driving Towards a Greener, More Efficient Future",
    "Enhancing Cybersecurity in the Digital Age: Protecting Our Data and Privacy in a Connected World",
    "Harnessing the Power of Big Data Analytics: Unlocking Insights and Driving Innovation Across Industries",
    "Advancing Space Exploration and Colonization: Pushing the Boundaries of Human Endeavor",
    "Developing Sustainable Smart Cities of Tomorrow: Integrating Technology, Infrastructure, and Livability",
    "Empowering the Global Workforce with Remote Work: Redefining the Future of Work and Productivity",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}
const images = [poster1, poster2, poster3, poster4, poster5, poster6, poster7];
const locations = [
  "San Francisco, CA",
  "New York City, NY",
  "Seattle, WA",
  "Boston, MA",
  "Los Angeles, CA",
  "Chicago, IL",
  "Austin, TX",
  "Miami, FL",
  "Atlanta, GA",
  "Washington, D.C.",
  "Denver, CO",
  "Portland, OR",
  "Dallas, TX",
  "Houston, TX",
  "Philadelphia, PA",
  "Phoenix, AZ",
  "San Diego, CA",
  "Nashville, TN",
  "Minneapolis, MN",
  "Tampa, FL",
];

const cardData = Array.from({ length: 21 }, (_, i) => ({
  imageSrc: images[Math.floor(Math.random() * images.length)],
  title: generateRandomDate(),
  text: generateRandomText(),
  attend: `Arpit Apoorva ${generateRandomNumber()} attendees - ${
    locations[Math.floor(Math.random() * locations.length)]
  }`,
}));

const cardData1 = Array.from({ length: 21 }, (_, i) => ({
  imageSrc: images[Math.floor(Math.random() * images.length)],
  title: generateRandomDate(),
  text: generateRandomText(),
  attend: `Arpit Apoorva ${generateRandomNumber()} attendees - ${
    locations[Math.floor(Math.random() * locations.length)]
  }`,
}));
const EventList: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [visiblesCards, setVisiblesCards] = useState(3);

  const handleShowMore = () => {
    setVisibleCards(cardData.length);
  };
  const handleShowsMore = () => {
    setVisiblesCards(cardData.length);
  };

  return (
    <div className="container mt-5">
      <div className="bg-white p-3 mb-2 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fs-4 fw-bold mb-0">Events</p>
          <button className="createEvent">Create an event</button>
        </div>
      </div>
      <div className="bg-white p-2 mb-2 border rounded">
        <p className="fs-4 fw-bold mb-0">Your Event</p>
      </div>
      <div className="bg-white p-2 mb-2 border rounded">
        <p className="fs-4 fw-bold mb-3">Top Audio for you</p>
        <div className="row">
          {cardData.slice(0, visibleCards).map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                attend={card.attend}
              />
            </div>
          ))}
        </div>
      </div>
      {visibleCards < cardData.length && (
        <div className="text-center mt-3 mb-2">
          <button className="ShowMoreBtn" onClick={handleShowMore}>
            Show More
            <span className="ms-2">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </div>
      )}
      <div className="bg-white p-2 mb-2 border rounded">
        <p className="fs-4 fw-bold mb-3">Recommandations for you</p>
        <div className="row">
          {cardData1.slice(0, visiblesCards).map((card, index) => (
            <div className="col-md-4 mb-4 " key={index}>
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                attend={card.attend}
              />
            </div>
          ))}
        </div>
      </div>
      {visiblesCards < cardData.length && (
        <div className="text-center mt-4">
          <button className="ShowMoreBtn" onClick={handleShowsMore}>
            Show More
            <span className="ms-2">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EventList;
