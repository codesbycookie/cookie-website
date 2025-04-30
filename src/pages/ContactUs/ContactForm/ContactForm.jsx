import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sk7t7co",
        "template_gf13oqj", // Replace with your EmailJS Template ID
        formData,
        "Oht2VZndlktWjLOQT" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="text-start">
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="text-start">
          <button type="submit">Send</button>
        </div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
