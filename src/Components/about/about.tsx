import React from "react";
import about from "../../assets/2.jpg";
import { motion } from "framer-motion"; // 1. Import motion

const About: React.FC = () => {
  // 2. Define animation variants for a modern look

  // A container variant to orchestrate staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Animate children with a 0.2s delay between them
        delayChildren: 0.1,
      },
    },
  };

  // Variant for elements fading in from the left
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variant for elements fading in from the right
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variant for elements fading in from the bottom
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* 3. Apply variants to motion components */}
      <motion.div
        className="px-10 mb-4 md:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 mt-4 md:mt-8 lg:mt-12 xl:mt-16 2xl:mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Trigger when 20% is visible
      >
        <motion.h3
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text"
          variants={fadeInUp} // Title fades up
        >
          About Shaastra
        </motion.h3>

        {/* Responsive Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeInLeft} 
            viewport={{ once: false, amount: 0.1 }}// Text fades in from the left
          >
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
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={fadeInRight} // Image fades in from the right
          >
            <img
              src={about}
              alt="A glimpse of a Shaastra event"
              className="w-full h-auto rounded-xl shadow-lg shadow-blue-900/50 ring-1 ring-white/10"
            />
          </motion.div>
        </div>

        {/* Second Paragraph Below the Grid */}
        <motion.div
          className="mt-12"
          variants={fadeInUp} // Second paragraph fades up
        >
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
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;