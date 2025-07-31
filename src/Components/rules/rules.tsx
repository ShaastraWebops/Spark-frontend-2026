// src/Components/rules/Rules.tsx

import React from 'react';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

// SVG Icons for a clean, consistent look
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
    const elementRefs = useScrollTriggerAnimation();

    return (
        <div className="bg-slate-900 text-white font-sans">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                        Rules and Regulations
                    </h1>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 md:mb-16">
                        Round 1 is a quiz to test the students' Aptitude, Logical and Mathematical Reasoning skills and is conducted in over 20 cities nationwide.
                    </p>
                </div>

                {/* Grid layout for the rule cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Card 1: Details Table */}
                    <div
                        ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/30"
                    >
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
                    </div>

                    {/* Card 2: Important Rules List */}
                    <div
                        ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-900/30"
                    >
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rules;