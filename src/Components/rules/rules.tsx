// src/Components/rules/Rules.tsx

import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons (code unchanged)
const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const Rules: React.FC = () => {
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                // ✅ CORRECTED: Replaced the broken array with a standard, smooth easing function.
                ease: "easeInOut" 
            }
        },
        hover: {
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-slate-900 text-white font-sans">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text"
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Rules and Regulations
                    </motion.h1>
                    <motion.p
                        className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 md:mb-16"
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Round 1 is a quiz to test the students' Aptitude, Logical and Mathematical Reasoning skills and is conducted in over 20 cities nationwide.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Card 1: Details Table */}
                    <motion.div
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-xl hover:shadow-blue-900/30"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Content for Card 1... */}
                        <div className="flex items-center mb-4">
                            <InfoIcon />
                            <h3 className="text-xl font-bold text-white ml-3">Key Details</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-base">
                                <tbody className="divide-y divide-slate-700">
                                    <tr>
                                        <td className="py-3 pr-3 font-semibold text-white">Topics</td>
                                        <td className="py-3 text-slate-300">Aptitude, Logical & Mathematical Reasoning</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-3 font-semibold text-white">Eligibility</td>
                                        <td className="py-3 text-slate-300">Students of Classes 7 to 10</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-3 font-semibold text-white">Student ID</td>
                                        <td className="py-3 text-slate-300">Not mandatory</td>
                                    </tr>
                                    <tr className="border-none">
                                        <td className="py-3 pr-3 font-semibold text-white">Registration Fee</td>
                                        <td className="py-3 text-slate-300">None</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Card 2: Important Rules List */}
                    <motion.div
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-xl hover:shadow-teal-900/30"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Content for Card 2... */}
                        <div className="flex items-center mb-4">
                            <ListIcon />
                            <h3 className="text-xl font-bold text-white ml-3">Important Points</h3>
                        </div>
                        <ul className="list-disc list-outside space-y-3 pl-5 text-base text-slate-300 leading-relaxed">
                            <li>Students can only carry a pen/pencil box and a water bottle. No rough sheets are allowed in the Quiz hall.</li>
                            <li>The top 10 participants from each city would qualify for Spark Round 2.</li>
                            <li>Certificates of Appreciation and Prizes will be awarded to the top 3 participants from each city.</li>
                            <li><strong className="font-semibold text-green-400">On-the-spot registrations are also available</strong></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Rules;