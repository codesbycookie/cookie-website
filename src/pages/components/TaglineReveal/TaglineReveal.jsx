import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TaglineReveal.css";

gsap.registerPlugin(ScrollTrigger);

const words = ["Experience", "Every", "Byte"];

export default function TaglineReveal() {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${words.length * 100}vh`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      words.forEach((_, index) => {
        tl.fromTo(
          wordRefs.current[index],
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          index * 1.2 // delay between each word reveal
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="tagline-scroll">
     
      <h1 className="tagline">
        {words.map((word, index) => (
          <span
            key={index}
            className="tagline-word"
            ref={(el) => (wordRefs.current[index] = el)}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
}
