/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import hero_animation from "../../assets/animations/hero_animation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TaglineReveal from "../components/TaglineReveal/TaglineReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextButton from "../components/NextButton/NextButton";
import Hero from "../components/Hero/Hero";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {

    const ctx = gsap.context(() => {
      let totalWidth = 0;
      const sections = sectionsRef.current;
      totalWidth = sections.length * window.innerWidth;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${totalWidth}`,
        //   markers: true,
        },
      });
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Hero />
      <TaglineReveal />
      <div
        className="horizontal-container"
        ref={horizontalRef}
        id='about-us'
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="horizontal-sections"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "400vw",
          }}
        >
          <div
            className="section"
            ref={(el) => (sectionsRef.current[0] = el)}
            style={{
              flex: "0 0 100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <h1 style={{ fontSize: 70, textAlign: "center", height: 100 }}>
                  <b>
                    {" "}
                    Who are we <span style={{ color: "#c18b13" }}>?</span>
                  </b>
                </h1>
              </div>
              <div className="col-md-6">
                <h3 style={{ width: "90%", fontSize: 30, lineHeight: 1.5 }} className='content'>
                  <b style={{ fontSize: 50 }}>
                    Cookie Inc <span style={{ color: "#c18b13" }}>.</span>
                  </b>{" "}
                  is more than just a tech firm — we’re digital architects
                  helping businesses craft their online identity. With
                  design-driven thinking and tech precision, we turn ideas into
                  real-world impact.
                </h3>
                {/* <button className="contact_us mt-4">
    Contact Us
  </button> */}
              </div>
            </div>
          </div>

          {/* Section 2 - Lottie */}
          <div
            className="section"
            id="what-we-do"
            ref={(el) => (sectionsRef.current[1] = el)}
            style={{
              flex: "0 0 100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px 20px",
            }}
          >
            <div className="row g-4 align-items-center w-100">
              <div className="col-12 col-md-6 text-center">
                <h1 style={{ fontSize: 70 }}>
                  <b>
                    What do we do <span style={{ color: "#c18b13" }}>?</span>
                  </b>
                </h1>
              </div>
              <div className="col-12 col-md-6">
              <div className="container mt-4">
  <div className="row">
    {[
      "UI/UX Design",
      "Mobile App Development",
      "Static & Dynamic Websites",
      "Digital Marketing & Branding",
      "E-Commerce Solutions",
    ].map((service, index) => (
      <div key={index} className="col-12 mb-4">
        <div className="service-card">
          <span role="img" aria-label="cookie" className="emoji">🍪</span>
          <span>{service}</span>
        </div>
      </div>
    ))}
  </div>
</div>

              </div>
            </div>
          </div>

          {/* Section 3 - Extra content (optional) */}
          <div
            className="section"
            id="why-cookie"
            ref={(el) => (sectionsRef.current[2] = el)}
            style={{
              flex: "0 0 100vw",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="row g-4 align-items-center w-100">
              <div className="col-12 col-md-6 text-center">
                <h1 style={{ fontSize: 70 }}>
                  <b>
                    Why Cookie <span style={{ color: "#c18b13" }}>?</span>
                  </b>
                </h1>
              </div>
              <div className="col-12 col-md-6">
                <p
                className="content"
                  style={{
                    fontSize: 30,
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  <b>
                    Cookie Inc <span style={{ color: "#c18b13" }}>.</span>
                  </b>{" "}
                  isn’t just another tech company — we&apos;re your creative and
                  strategic growth partner. From pixel to product, we turn your
                  ideas into powerful, user-centric digital experiences.
                </p>
                <ul
                className='content'
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: 10,
                    fontSize: 25,
                    fontWeight: 500,
                    lineHeight: "2",
                  }}
                >
                  <li>
                    🍪 <b>Full-Spectrum Expertise</b>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Design, development,
                    and marketing under one roof.
                  </li>
                  <li>
                    🍪 <b>Tailored Solutions</b>
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We listen, adapt,
                    and deliver what fits <b>you</b>, not just the trend.
                  </li>
                  <li>
                    🍪 <b>Fast, Agile Delivery</b>
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Built to move
                    with the speed of your ambition.
                  </li>
                  <li>
                    🍪 <b>Modern Design Thinking</b>
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beautiful
                    interfaces backed by strategy and UX.
                  </li>
                  <li>
                    🍪 <b>Long-Term Partnership</b>
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Not just
                    projects; we build lasting digital success stories.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ height: "fit-content" }} id='portfolio'>
        <div className="row g-0 h-100" style={{ height: "100%" }}>
          <div className="col-12 100vh d-flex flex-column align-items-start justify-content-start">
            <h1
              style={{ fontSize: 70, paddingTop: "10vh", paddingLeft: "10vh" }}
            >
              <b>
                Our Portfolio <span style={{ color: "#c18b13" }}>.</span>
              </b>
            </h1>
            <div className="container mt-5">
              <div className="row justify-content-center">
                {[1, 2, 3, 4, 5, 6].map((project, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="portfolio-card">
                      <img
                        src={`/imgs/project.jpg`}
                        alt={`Project ${project}`}
                        className="portfolio-image"
                      />
                      <div className="portfolio-content">
                        <h5>Project {project}</h5>
                        <p>
                          Short description of what this project is about, its
                          purpose or impact.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="100vh" id='contact-us'>
        <div className="row g-0 100vh" style={{ height: "100%" }}>
        <h1
              style={{ fontSize: 70, paddingTop: "10vh", paddingLeft: "10vh" }}
            >
              <b>
                Contact Us <span style={{ color: "#c18b13" }}>.</span>
              </b>
            </h1>
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            
            <ContactUs/>
          </div>
        </div>
      </div>
     <Footer/>

    </div>
  );
}
