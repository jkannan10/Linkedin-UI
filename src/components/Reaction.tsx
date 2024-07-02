import React, { useState } from "react";
import "../assets/styles/Reaction.css";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Reaction {
  id: number;
  name: string;
  icon: string;
  color: string;
}

const Reactions: React.FC = () => {
  const [selectedReaction, setSelectedReaction] = useState<Reaction | null>(
    null
  );
  const [showReactions, setShowReactions] = useState<boolean>(false);

  const reactions: Reaction[] = [
    { id: 1, name: "Like", icon: "👍", color: "#0e76a8" },
    { id: 2, name: "Celebrate", icon: "👏", color: "#5bc236" },
    { id: 3, name: "Support", icon: "🙏", color: "#bb0000" },
    { id: 4, name: "Love", icon: "❤️", color: "#f25268" },
    { id: 5, name: "Insightful", icon: "💡", color: "#ffd700" },
    { id: 6, name: "Funny", icon: "😂", color: "#4bb3fd" },
  ];

  const handleReactionClick = (reaction: Reaction): void => {
    setSelectedReaction(reaction);
    setShowReactions(false);
  };

  return (
    <div
      className="reaction-container"
      onMouseEnter={() => setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)}
    >
      <div className="like-button">
        {selectedReaction ? (
          <div
            className="selected-reaction"
            style={{ color: selectedReaction.color }}
          >
            {selectedReaction.icon} {selectedReaction.name}
          </div>
        ) : (
          <div className="default-like">
            <span className="me-1">
              <FontAwesomeIcon icon={faSmile} style={{ color: "#000000ad" }} />
            </span>{" "}
            <span className="fw-bold" style={{ color: "#000000ad" }}>
              React
            </span>
          </div>
        )}
        {showReactions && (
          <div className="reactions-popup d-flex">
            {reactions.map((reaction) => (
              <div
                key={reaction.id}
                className="reaction-option"
                onClick={() => handleReactionClick(reaction)}
                style={{ color: reaction.color }}
              >
                {reaction.icon}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reactions;
