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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    document.title = "Cookie • Home";

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
      <TaglineReveal />
      <div
        className="horizontal-container"
        ref={horizontalRef}
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
            <div style={{ maxWidth: "700px", textAlign: "center" }}>
              <h1 style={{ marginBottom: "25px", height: 100 }}>
                <Typewriter
                  words={["Where every idea is baked to perfection"]}
                  cursorBlinking={true}
                  loop={false}
                />
              </h1>
              <h5 style={{ lineHeight: "30px" }}>
                At <b>Cookie</b>, we blend technology with creativity to build
                cutting-edge solutions that drive businesses forward.
              </h5>
              <button
                className="contact_us mt-4"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Section 2 - Lottie */}
          <div
            className="section"
            ref={(el) => (sectionsRef.current[1] = el)}
            style={{
              flex: "0 0 100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eaeaea",
            }}
          >
            <Lottie
              animationData={hero_animation}
              loop={true}
              style={{ width: "60%", height: "auto" }}
            />
          </div>

          {/* Section 3 - Extra content (optional) */}
          <div
            className="section"
            ref={(el) => (sectionsRef.current[2] = el)}
            style={{
              flex: "0 0 100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#d0e0ff",
            }}
          >
            <NextButton page="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
