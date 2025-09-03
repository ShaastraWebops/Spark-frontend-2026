import React from "react";
import i1 from "../../assets/1.jpg";
import i2 from "../../assets/2.jpg";
import i3 from "../../assets/3.jpg";
import { motion } from "framer-motion";

const Structure: React.FC = () => {
  // Main section variant for a general fade-in-slide-up
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variant for images with a slight scale-up and fade-in
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.2, // Slight delay for images
      },
    },
  };

  // Container variant for staggering children animations
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
      },
    },
  };

  // Variant for individual list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variant for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };


  return (
    <div className="space-y-16 md:space-y-24">
      {/* --- Introduction Section --- */}
      <motion.div
        className="text-center px-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariants} // Using the general section variant
      >
        <motion.h3
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Structure
        </motion.h3>
        <motion.p
          className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          SPARK is a three-tier mega event, with the first phase being the SPARK
          Junior Quiz, a pan-India quiz competition to be conducted in over 20
          cities, far and wide across the nation. With 4000+ participants, the
          SPARK Junior Quiz is indeed one epic quizzing journey. The winners
          stand a chance to travel all the way to IIT Madras free of cost to
          compete in the national finals and experience what Shaastra has to
          offer.
        </motion.p>
      </motion.div>

      {/* --- Round 1 --- */}
      <motion.div
        className="px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants} // This div itself fades in
      >
        {/* Text Content for Round 1 */}
        <motion.div> {/* Wrap text content for staggering */}
          <motion.h2 variants={listItemVariants} className="text-3xl font-bold text-blue-400 mb-2">Round 1</motion.h2>
          <motion.h4 variants={listItemVariants} className="text-xl font-semibold text-white mb-4">
            Shaastra Spark Quiz
          </motion.h4>
          <motion.ul className="list-disc list-inside space-y-3 text-slate-300" variants={listContainerVariants}>
            <motion.li variants={listItemVariants}>
              It is a quiz to test the student's Aptitude, Logical and
              Mathematical Reasoning skills and happens in over 20+ cities
              nationwide.
            </motion.li>
            <motion.li variants={listItemVariants}>
              The top 10 participants from each city would qualify for Spark
              Round 2 and stand a chance to compete with students from different
              cities and backgrounds.
            </motion.li>
          </motion.ul>
          <motion.div className="flex gap-4" variants={listContainerVariants} initial="hidden" animate="visible">
            <motion.a
              href="/pdf/SPARK'25 QP1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button className="cursor-pointer mt-6 inline-block rounded-lg px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-800 transition-colors">
                Model Paper 1
              </button>
            </motion.a>
            <motion.a
              href="/pdf/SPARK'25 QP2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button className="cursor-pointer mt-6 inline-block rounded-lg px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-800 transition-colors">
                Model Paper 2
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image for Round 1 */}
        <motion.div
          variants={imageVariants} // Apply image-specific animation
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.1 }}
        >
          <img
            src={i1}
            alt="Quiz competition visual"
            className="w-full h-auto rounded-xl shadow-lg shadow-blue-900/50 ring-1 ring-white/10"
          />
        </motion.div>
      </motion.div>

      {/* --- Round 2 --- */}
      <motion.div
        className="px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        // exit="hidden"
        viewport={{ once: false, amount: 0.1 }}
        variants={sectionVariants}
      >
        {/* Text Content for Round 2 */}
        <motion.div className="order-1 md:order-2"> {/* Wrap text content for staggering */}
          <motion.h2 variants={listItemVariants} className="text-3xl font-bold text-green-400 mb-2">Round 2</motion.h2>
          <motion.h4 variants={listItemVariants} className="text-xl font-semibold text-white mb-4">
            Online Case Study Competition
          </motion.h4>
          <motion.ul className="list-disc list-inside space-y-3 text-slate-300" variants={listContainerVariants}>
            <motion.li variants={listItemVariants}>
              A problem statement will be provided to qualified participants for
              Round 2.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Teams must come up with an innovative solution for the same.
            </motion.li>
            <motion.li variants={listItemVariants}>Further details will be conveyed later</motion.li>
            <motion.li variants={listItemVariants}>
              <strong className="font-semibold text-green-300">Note:</strong>{" "}
              This is only for students who qualified in the first round.
            </motion.li>
          </motion.ul>
        </motion.div>
        {/* Image for Round 2 */}
        <motion.div
          className="order-2 md:order-1"
          variants={imageVariants} // Apply image-specific animation
          initial="hidden"
          whileInView="visible"
          exit = "hidden"
          viewport={{ once: false, amount: 0.1 }}
        >
          <img
            src={i2}
            alt="Case study competition visual"
            className="w-full h-auto rounded-xl shadow-lg shadow-green-900/50 ring-1 ring-white/10"
          />
        </motion.div>
      </motion.div>

      {/* --- Round 3 --- */}
      <motion.div
        className="px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        // exit ='hidden'
        viewport={{ once: false, amount: 0.1 }}
        variants={sectionVariants}
      >
        {/* Text Content for Round 3 */}
        <motion.div> {/* Wrap text content for staggering */}
          <motion.h2 variants={listItemVariants} className="text-3xl font-bold text-purple-400 mb-2">Round 3</motion.h2>
          <motion.h4 variants={listItemVariants} className="text-xl font-semibold text-white mb-4">
            Shaastra Spark Junior Championship (SJC)
          </motion.h4>
          <motion.ul className="list-disc list-inside space-y-3 text-slate-300" variants={listContainerVariants}>
            <motion.li variants={listItemVariants}>
              Selected teams from Round 2 will be invited to IIT Madras on a
              sponsored two-day trip.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Finalists will participate in competitions and will get a chance
              to interact with IIT Madras Professors and students to ensure a
              holistic learning experience.
            </motion.li>
            <motion.li variants={listItemVariants}>
              Further details regarding the competition will be provided later
              to the selected teams.
            </motion.li>
          </motion.ul>
        </motion.div>
        {/* Image for Round 3 */}
        <motion.div
          variants={imageVariants} // Apply image-specific animation
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.1 }}
        >
          <img
            src={i3}
            alt="Championship event visual"
            className="w-full h-auto rounded-xl shadow-lg shadow-purple-900/50 ring-1 ring-white/10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Structure;