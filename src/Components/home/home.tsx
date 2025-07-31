import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // Your GSAP animation logic is preserved
  useEffect(() => {
    // Initial visibility setup for GSAP
    gsap.set([headingRef.current, paragraphRef.current], { autoAlpha: 0 });

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
                ease: "back.out(1.7)",
                overwrite: "auto",
              }
            );
          },
          onLeave: () => {
            gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
          },
          onEnterBack: () => {
            gsap.fromTo(
              elem,
              { y: -100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back.out(1.7)",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: () => {
            gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
          },
        });
      });
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-white px-4 text-center overflow-hidden ">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.3),rgba(255,255,255,0))]"></div>

      <h1
        ref={headingRef}
        className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-green-400"
      >
        SPARK
      </h1>
      <p 
        ref={paragraphRef} 
        className="max-w-xl md:max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed"
      >
        Spark is an innovative initiative of Shaastra in which we provide a national platform for students to compete and improve themselves at a zero registration fee.
      </p>
    </div>
  );
};

export default Home;