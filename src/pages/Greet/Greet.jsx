import React from "react";
import Lottie  from 'lottie-react';
import './Greet.css'
import greet_animation from '../../assets/animations/greet_animation.json'
export default function NotFound() {
  return (
    <>
    
        <div className="notfound_page container" >
          <h2>Our website is still baking with love! 🍪 We're whipping up something special—stay tuned for a delightful experience!</h2>
          <Lottie
            animationData={greet_animation}
            loop={true}
    className="notfound_animation mt-4"
    />
    

    
        </div>
    </>
  );
}
