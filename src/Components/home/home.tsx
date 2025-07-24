import './home.css';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headingRef.current && paragraphRef.current) {
      const elements = [headingRef.current, paragraphRef.current];

      elements.forEach((elem) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 80%",
          end: "bottom 20%",
          markers: false,
          onEnter: () => {
            gsap.fromTo(
              elem,
              { y: 100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto",
              }
            );
          },
          onLeave: () => {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
          },
          onEnterBack: () => {
            gsap.fromTo(
              elem,
              { y: -100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: () => {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
          },
        });
      });
    }
  }, []);

  return (
    <>
      <h1 className="main-heading" ref={headingRef}>
        SPARK
      </h1>
      <p className="para" ref={paragraphRef}>
        Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.
      </p>
    </>
  );
}

export default Home;