import React, { useState } from "react";
import "./WorkCard.css";

export default function WorkCard({ img, content, title }) {
  const [showContent, setShowContent] = useState(false);

  const handleHover = () => {
    setShowContent(true);
  };

  const handleLeave = () => {
    setShowContent(false);
  };

  return (
    <div
      className="card work_card"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onTouchMove={handleHover}  
      onClick={handleHover}     
    >
      <div className="card-body">
        <div className="card-img">
          <img src={img} alt="Card" />
        </div>
        <div className="card_content my-3">
          <h3 className="mt-5">{title}</h3>
          {showContent && <p className="fade-in">{content}</p>}
        </div>
      </div>
    </div>
  );
}
