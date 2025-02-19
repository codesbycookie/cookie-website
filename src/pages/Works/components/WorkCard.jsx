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

<div class="card mb-3" onMouseEnter={handleHover}
onMouseLeave={handleLeave}
onTouchMove={handleHover}  
onClick={handleHover}   style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class={showContent ? 'col-md-4' : 'col-md-12'}>
      <img src={img} class="img-fluid rounded-start" style={{height: '500px', width: '100%', objectFit: 'cover'}} alt="..."/>
    </div>
   {showContent ? (
     <div class="col-md-8">
     <div class="card-body text-start">
       <h5 class="card-title">{title}</h5>
       <p class="card-text">{content}</p>
     </div>
   </div>
   ): ( ' ')}
  </div>
</div>


  );
}

