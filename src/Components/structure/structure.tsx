import React from 'react';
// import './structure.css';
import i1 from '../../assets/1.jpg';
import i2 from '../../assets/2.jpg';
import i3 from '../../assets/3.jpg';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

const Structure: React.FC = () => {
    const elementRefs = useScrollTriggerAnimation();

    return (
        <> {/* --- Introduction Section --- */}
    <div ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)} className="text-center px-10">
      <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
        Structure
      </h3>
      <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-16 md:mb-24">
        SPARK is a three-tier mega event, with the first phase being the SPARK Junior Quiz, a pan-India quiz competition to be conducted in over 20 cities, far and wide across the nation. With 4000+ participants, the SPARK Junior Quiz is indeed one epic quizzing journey. The winners stand a chance to travel all the way to IIT Madras free of cost to compete in the national finals and experience what Shaastra has to offer.
      </p>
    </div>

    {/* --- Round 1 --- */}
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20" ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
      {/* Image */}
      <div>
        <img src={i1} alt="Quiz competition visual" className="w-full h-auto rounded-xl shadow-lg shadow-blue-900/50 ring-1 ring-white/10" />
      </div>
      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-blue-400 mb-2">Round 1</h2>
        <h4 className="text-xl font-semibold text-white mb-4">Shaastra Spark Quiz</h4>
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>It is a quiz to test the student's Aptitude, Logical and Mathematical Reasoning skills and happens in over 20+ cities nationwide.</li>
          <li>The top 10 participants from each city would qualify for Spark Round 2 and stand a chance to compete with students from different cities and backgrounds.</li>
        </ul>
        <button className="cursor-pointer mt-6 inline-block rounded-lg px-5 py-3 text-sm font-medium text-white 
       bg-linear-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-800 transition-colors">
          Attempt Mock Quiz
        </button>
      </div>
    </div>

    {/* --- Round 2 --- */}
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20" ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-green-400 mb-2">Round 2</h2>
        <h4 className="text-xl font-semibold text-white mb-4">Online Case Study Competition</h4>
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>A problem statement will be provided to qualified participants for Round 2. </li>
          <li>Teams must come up with an innovative solution for the same.</li>
          <li>Further details will be conveyed later</li>
          <li><strong className="font-semibold text-green-300">Note:</strong> This is only for students who qualified in the first round.</li>
        </ul>
      </div>
      {/* Image */}
      <div>
        <img src={i2} alt="Case study competition visual" className="w-full h-auto rounded-xl shadow-lg shadow-green-900/50 ring-1 ring-white/10" />
      </div>
    </div>

    {/* --- Round 3 --- */}
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-2" ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
      {/* Image */}
      <div>
        <img src={i3} alt="Championship event visual" className="w-full h-auto rounded-xl shadow-lg shadow-purple-900/50 ring-1 ring-white/10" />
      </div>
      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-purple-400 mb-2">Round 3</h2>
        <h4 className="text-xl font-semibold text-white mb-4">Shaastra Spark Junior Championship (SJC)</h4>
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>Selected teams from Round 2 will be invited to IIT Madras on a sponsored two-day trip.</li>
          <li>Finalists will participate in competitions and will get a chance to interact with IIT Madras Professors and students to ensure a holistic learning experience.</li>
          <li>Further details regarding the competition will be provided later to the selected teams.</li>
        </ul>
      </div>
    </div>
        </>
    );
}

export default Structure;
