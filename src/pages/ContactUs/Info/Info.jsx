import React from "react";
import './Info.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Info() {
  return (
    <div className="info-container">
      <h2>Contact Information</h2>
      <div className="d-flex flex-column gap-3 mt-4">
      <h5><span className="me-3"><FaMapMarkerAlt /> </span>Chennai, Tamil Nadu, India</h5>
      <h5><span className="me-3"><FaPhone /> </span> +91 99623 13298</h5>
      <h5><span className="me-3"><FaEnvelope /> </span> mailofcookie@gmail.com</h5>
      </div>
     
    </div>
  );
}
