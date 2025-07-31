import React from "react";
// import "./about.css";
import about from "../../assets/2.jpg";
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

const About: React.FC = () => {
  const elementRefs = useScrollTriggerAnimation();

  return (
    <>
      <div className=" px-10 mb-4 md:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 mt-4 md:mt-8 lg:mt-12 xl:mt-16 2xl:mt-20"
        ref={(el) =>
          el &&
          !elementRefs.current.includes(el) &&
          elementRefs.current.push(el)
        }
      >
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          About Shaastra
        </h3>

        {/* Responsive Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Column */}
          <div className="flex flex-col gap-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Shaastra is the annual technical festival of IIT Madras. Ever
              since its inception in the year 2000, Shaastra has been an
              integral part of the technical experience at IIT Madras. It has
              been growing in size, substance, and stature and has become a
              trendsetter among college technical festivals across the country.
              Shaastra has the distinction of being the first student-managed
              technical festival in the nation to be ISO 9001:2015 certified.
              Every edition of Shaastra features a wide variety of events
              encompassing the entire spectrum of innovation.
            </p>
          </div>

          {/* Image Column */}
          <div>
            <img
              src={about}
              alt="A glimpse of a Shaastra event"
              className="w-full h-auto rounded-xl shadow-lg shadow-blue-900/50 ring-1 ring-white/10"
            />
          </div>
        </div>

        {/* Second Paragraph Below the Grid */}
        <div className="mt-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            To ensure a steep learning curve, numerous workshops, lectures, and
            video conferences dealing with diverse spheres of science,
            technology, and finance are also organized. Shaastra believes
            strongly in knowledge sharing and encouraging technical spirit among
            the students of the country. Spark is an innovative initiative that
            adheres to Shaastra's non-profit roots as we provide a national
            platform for students to compete and improve themselves at zero
            registration fee. With Spark, Shaastra aims to ignite the 'Spark' of
            Innovation & Technology in the tech-savvy scientific young student
            minds of the country.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
