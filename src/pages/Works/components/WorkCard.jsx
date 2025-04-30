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

<div className="card mb-3" onMouseEnter={handleHover}
onMouseLeave={handleLeave}
onTouchMove={handleHover}  
onClick={handleHover}   style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className={showContent ? 'col-md-4' : 'col-md-12'}>
      <img src={img} className="img-fluid rounded-start" style={{height: '500px', width: '100%', objectFit: 'cover'}} alt="..."/>
    </div>
   {showContent ? (
     <div className="col-md-8">
     <div className="card-body text-start">
       <h5 className="card-title">{title}</h5>
       <p className="card-text">{content}</p>
     </div>
   </div>
   ): ( ' ')}
  </div>
</div>


  );
}

