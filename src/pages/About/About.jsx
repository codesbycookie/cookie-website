import React from "react";
import {
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import "./About.css";
import Card from "./components/Card/Card";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";
import NextButton from "../components/NextButton/NextButton";

export default function About() {
  return (
    <div>
      <div className="row g-0 p-4 d-flex justify-content-center align-items-center">
        <div className="col-md-9">
          <div className="about_container">
            <h2>About Us</h2>
            <div className="about_content mt-4">
              <p>
                At <b>Cookie</b>, we’re revolutionizing the way the world
                experiences cookies with the power of technology. Our mission is
                to blend innovation with indulgence, creating a seamless digital
                experience for cookie lovers everywhere. From AI-driven
                personalization that curates your perfect flavor to cutting-edge
                logistics ensuring fresh deliveries, we leverage technology to
                redefine convenience without compromising taste. Whether you're
                customizing your dream cookie online or exploring new flavors
                through data-driven insights, we make every bite smarter,
                fresher, and more delightful. Our platform connects passionate
                bakers, cookie enthusiasts, and businesses, ensuring that
                technology enhances not just efficiency but the joy of sharing
                something sweet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0 p-4 d-flex justify-content-center align-items-center">
        <div className="col-md-9">
          <div className="wwd_container mb-3">
            <h2>What Do We Do ?</h2>
            <div className="row g-3 d-flex mt-4">
              <div className="col-lg-6">
                <Card
                  icon={<FaCode />}
                  title={"Web Based Solutions"}
                  content={
                    "We build powerful web-based solutions that drive efficiency and innovation. Our expertise spans custom applications, enterprise solutions, and AI-driven automation. With a focus on scalability, security, and user experience, we help businesses thrive in the digital era."
                  }
                />
              </div>
              <div className="col-lg-6">
                <Card
                  icon={<FaMobileScreenButton />}
                  title={"Mobile App Solutions"}
                  content={
                    "We develop cutting-edge mobile app solutions that enhance user experience and business efficiency. From intuitive UI/UX to scalable and secure architectures, we create custom apps tailored to your needs. Our expertise spans Android, iOS, and cross-platform development, ensuring seamless performance and innovation."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0 p-4 d-flex justify-content-center align-items-center">
        <div className="col-md-9">
          <div className="kos_container">
            <h2>Know Our Stack</h2>
          </div>
          <div className="stack_container">
            <div className="stack_icons d-flex">
              <div className="icon">
                <FaHtml5 />
              </div>
              <div className="icon">
                <FaCss3Alt />
              </div>
              <div className="icon">
                <FaJs />
              </div>
              <div className="icon">
                <FaReact />
              </div>
              <div className="icon">
                <SiExpress />
              </div>
              <div className="icon">
                <FaNode />
              </div>
              <div className="icon">
                <SiMongodb />
              </div>
              <div className="icon">
                <TbBrandReactNative />
              </div>
            </div>
          </div>
        </div>
        <NextButton page='works'/>
      </div>
    </div>
  );
}
