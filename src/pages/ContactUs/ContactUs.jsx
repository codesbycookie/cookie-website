import React from 'react'
import contact_us from "../../assets/animations/contact_us.json";
import Lottie from "lottie-react";
import NextButton from '../components/NextButton/NextButton';
import ContactForm from './ContactForm/ContactForm';
import Info from './Info/Info';
export default function ContactUs() {
  return (
  <div className="contact_container" style={{ height: "calc(100vh - 120px)" }}>
        <div className="row g-0 w-100 h-100">
          <div className="col-md-6 order-md-2 order-2 d-flex p-4 ps-5 d-flex justify-content-center align-items-center">
          <div>
            <ContactForm/>
            <Info/>
          </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
          <Lottie
              animationData={contact_us}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="row order-3 g-0 d-flex justify-content-center align-items-center px-4">
          <NextButton page="" />
        </div>
        </div>

  </div>
  )
}
