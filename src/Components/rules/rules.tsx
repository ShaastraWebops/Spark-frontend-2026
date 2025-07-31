import React from 'react';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

const Rules: React.FC = () => {
    const elementRefs = useScrollTriggerAnimation();

    return (
        <div className="bg-gray-950 text-white font-sans">
            <div 
                ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}
                className="max-w-4xl mx-auto px-6 py-16 md:py-24"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                    Rules and Regulations
                </h1>

                <div className="space-y-10">
                    {/* Introduction Paragraph */}
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Round 1 is a quiz to test the students' Aptitude, Logical and Mathematical Reasoning skills and is conducted in over 20 cities nationwide.
                    </p>

                    {/* Modern Table for Details */}
                    <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50">
                        <table className="w-full text-left text-lg">
                            {/* Using <tbody> with divide-y is a clean way to add borders between rows */}
                            <tbody className="divide-y divide-slate-800">
                                <tr>
                                    <td className="w-1/3 px-4 py-4 font-semibold text-white">Topics:</td>
                                    <td className="px-4 py-4 text-slate-300">Aptitude, Logical and Mathematical Reasoning</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 px-4 py-4 font-semibold text-white">Eligibility:</td>
                                    <td className="px-4 py-4 text-slate-300">Students of Classes 7 to 10.</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 px-4 py-4 font-semibold text-white">Dress code:</td>
                                    <td className="px-4 py-4 text-slate-300">None</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 px-4 py-4 font-semibold text-white">Student ID:</td>
                                    <td className="px-4 py-4 text-slate-300">Not mandatory</td>
                                </tr>
                                <tr className="border-none">
                                    <td className="w-1/3 px-4 py-4 font-semibold text-white">Registration fee:</td>
                                    <td className="px-4 py-4 text-slate-300">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Properly Formatted List */}
                    <ul className="list-disc list-outside space-y-4 pl-5 text-lg text-slate-300 leading-relaxed">
                        <li>Students can only carry a pen/pencil box and a water bottle. No rough sheets are allowed in the Quiz hall.</li>
                        <li>The top 10 participants from each city would qualify for Spark Round 2 and stand a chance to compete with students from different cities and backgrounds.</li>
                        <li>Certificates of Appreciation and Prizes will be awarded to the top 3 participants from each city.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Rules;