/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import hero_animation from "../../../assets/animations/hero_animation.json";
import './Hero.css'
import {useNavigate} from "react-router-dom"
export default function Hero() {


    const navigate = useNavigate();

  return (
   <div className="row g-0 hero-section">

          <div className="col-12 d-flex align-items-center justify-content-center d-flex flex-column gap-4">
            <h1 className="text-center hero-title"><b>Confused where to start your <br /> <span className=''> Digital Presence <div className='dot d-inline-flex'>?</div></span></b></h1>
          <h3><b>We&apos;ve Got You</b></h3>
          </div>
          <div className="col-12  d-flex align-items-center justify-content-center">
            <a className='hero-button' style={{textDecoration: 'none'}}   href='#contact-us'            
            >Get a quote</a>
          </div>
        </div>
  )
}
