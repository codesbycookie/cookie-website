import React from "react";
import "./Card.css";
export default function Card({icon, title, content}) {
  return (
    <div className="card about_card shadow-lg h-100">
      <div className="card-body px-4">
        <div className="icon mb-3">
          {icon}
        </div>
        <div className="card_content">
          <h4>{title}</h4>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
